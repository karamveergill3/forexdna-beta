-- ForexDNA — run this once in the Supabase SQL editor
-- (Dashboard → SQL Editor → New query → paste → Run)

-- 1. Table that holds the extra signup info Supabase Auth doesn't store itself.
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  risk_preference text not null default 'low'
    check (risk_preference in ('low', 'medium', 'high')),
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- Users can only ever see/edit their own row.
drop policy if exists "Profiles are viewable by owner" on public.profiles;
create policy "Profiles are viewable by owner"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "Profiles are updatable by owner" on public.profiles;
create policy "Profiles are updatable by owner"
  on public.profiles for update
  using (auth.uid() = id);

-- 2. Auto-create a profile row the moment someone signs up, pulling the
--    full_name / risk_preference that SignUpForm.js passes in as user metadata.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, risk_preference)
  values (
    new.id,
    new.raw_user_meta_data ->> 'full_name',
    coalesce(new.raw_user_meta_data ->> 'risk_preference', 'low')
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

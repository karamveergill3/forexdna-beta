# ForexDNA — Signup Site

A landing page + email/password signup flow, built with Next.js (App
Router) and Supabase Auth. No live trading or broker integration yet — this
just captures signups and each person's starting risk preference.

## What's in here

- `/` — marketing landing page
- `/signup` — create an account (email, password, name, risk preference)
- `/login` — sign in
- `/welcome` — protected page shown after signup/login
- `supabase/schema.sql` — the one-time database setup

## 1. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) → New project.
2. Once it's created, open **Project Settings → API** and copy:
   - **Project URL**
   - **anon public** key
3. Open the **SQL Editor**, paste in the contents of `supabase/schema.sql`,
   and click **Run**. This creates the `profiles` table and the trigger
   that fills it in automatically on signup.
3b. **Required for account deletion to work:** on the same API settings
   page, copy the **service_role** key (labeled "secret," not the
   "publishable"/anon one) — you'll need it for step 6 below. Never share
   this key or put it in a `NEXT_PUBLIC_` variable; it bypasses all row
   security.
4. Optional, recommended before real users sign up: go to **Authentication → Providers
   → Email** and decide whether you want "Confirm email" on. If it's on,
   new users get a 8-digit code (see step 5 below) before they can sign in.
   If you turn it off, people are signed in immediately after signup.
5. **Required for the 8-digit signup code to work:** go to **Authentication
   → Email Templates → Confirm signup**, and in the message body replace
   `{{ .ConfirmationURL }}` with `{{ .Token }}` (or add it alongside).
   Without this, Supabase's default template only sends a clickable link,
   not a code — the signup form on this site expects a 8-digit code.
   Sign-in (returning users) is unaffected either way — that's always
   plain email + password.

## 2. Run it locally

```bash
cp .env.local.example .env.local
# paste your Project URL and anon key into .env.local

npm install
npm run dev
```

Visit `http://localhost:3000`.

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "ForexDNA signup site"
gh repo create forexdna-beta --private --source=. --push
```

No `gh` CLI? Create an empty repo on github.com, then:

```bash
git remote add origin <your-repo-url>
git push -u origin main
```

## 4. Deploy on Vercel

1. [vercel.com](https://vercel.com) → **Add New → Project** → import the
   GitHub repo you just pushed.
2. When it asks for environment variables, add the same two from your
   `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (from step 3b — needed for account deletion)
3. Deploy. Vercel gives you a `*.vercel.app` URL immediately; add a custom
   domain later from the project's **Settings → Domains**.
4. In Supabase, go to **Authentication → URL Configuration** and set the
   **Site URL** to your Vercel URL (or custom domain) so confirmation
   emails link back to the right place.

## Notes on what's real vs. placeholder

- Signups are real: they create an actual Supabase Auth user and a row in
  `profiles` with their name and risk preference.
- The "Dashboard," "Risk calculator," and "Automated copytrading" cards on
  `/welcome` and the landing page are explicitly labeled as roadmap items —
  there's no broker or live trading connection yet, on purpose, since this
  is signups-only for now.
- The APY/drawdown figures on the landing page are carried over from your
  deck with a disclaimer line underneath. Worth a compliance/legal look
  before this goes in front of real users who might deposit money later —
  advertising expected returns for a copytrading product usually comes with
  licensing and disclosure requirements that vary by country.

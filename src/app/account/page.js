import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import SignOutButton from "@/components/SignOutButton";
import AccountSettingsForm from "@/components/AccountSettingsForm";
import ThemeToggle from "@/components/ThemeToggle";
import DangerZone from "@/components/DangerZone";

export const metadata = {
  title: "Account settings — ForexDNA",
};

export default async function AccountPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, created_at")
    .eq("id", user.id)
    .single();

  const memberSince = profile?.created_at
    ? new Date(profile.created_at).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <div className="min-h-screen w-full bg-ink">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
          <Link href="/" className="text-lg font-black tracking-tight">
            Forex<span className="text-accent-2">DNA</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/welcome" className="text-sm text-text-dim hover:text-text">
              Back to dashboard
            </Link>
            <SignOutButton />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-14 md:px-10">
        <div className="flex items-center justify-between">
          <div>
            <span className="eyebrow text-[11px] text-accent-2">Settings</span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight">
              Account
            </h1>
          </div>
          <ThemeToggle />
        </div>

        <div className="mt-8 flex flex-col gap-6">
          <AccountSettingsForm
            initialName={profile?.full_name}
            email={user.email}
            memberSince={memberSince}
          />
          <DangerZone />
        </div>
      </div>
    </div>
  );
}

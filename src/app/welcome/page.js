import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import SignOutButton from "@/components/SignOutButton";
import Greeting from "@/components/dashboard/Greeting";
import ProgressTracker from "@/components/dashboard/ProgressTracker";
import NextSteps from "@/components/dashboard/NextSteps";
import ReferralLink from "@/components/dashboard/ReferralLink";
import DashboardPreview from "@/components/dashboard/DashboardPreview";

export const metadata = {
  title: "Dashboard — ForexDNA",
};

export default async function WelcomePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user.id)
    .single();

  return (
    <div className="min-h-screen w-full bg-ink">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
          <Link href="/" className="text-lg font-black tracking-tight">
            Forex<span className="text-accent-2">DNA</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/faq"
              className="hidden text-sm text-text-dim hover:text-text sm:inline"
            >
              Help
            </Link>
            <Link href="/account" className="text-sm text-text-dim hover:text-text">
              Account
            </Link>
            <SignOutButton />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-8 md:px-10">
        <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">
          <Greeting name={profile?.full_name} />
        </h1>
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-6 md:px-10">
        <ProgressTracker />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-6 md:px-10">
        <NextSteps />
      </div>

      <div className="pt-8">
        <DashboardPreview />
      </div>

      <div className="mx-auto -mt-16 max-w-6xl px-6 pb-16 md:px-10">
        <ReferralLink userId={user.id} />
      </div>
    </div>
  );
}

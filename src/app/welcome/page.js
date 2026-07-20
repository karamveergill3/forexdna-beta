import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import SignOutButton from "@/components/SignOutButton";
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
    <div className="min-h-screen">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
          <Link href="/" className="text-lg font-black tracking-tight">
            Forex<span className="text-accent-2">DNA</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-text-dim sm:inline">
              {profile?.full_name || user.email}
            </span>
            <SignOutButton />
          </div>
        </div>
      </div>

      <div className="pt-8">
        <DashboardPreview />
      </div>
    </div>
  );
}

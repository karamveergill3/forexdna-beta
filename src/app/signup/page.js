import Link from "next/link";
import AuthShell from "@/components/AuthShell";
import SignUpForm from "@/components/SignUpForm";

export const metadata = {
  title: "Request access — ForexDNA",
};

export default function SignUpPage() {
  return (
    <AuthShell
      eyebrow="Get started"
      title="Request access"
      subtitle="This sets up your account. Live trading connects once your access opens."
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="text-accent-2 hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <SignUpForm />
    </AuthShell>
  );
}

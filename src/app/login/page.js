import Link from "next/link";
import AuthShell from "@/components/AuthShell";
import LoginForm from "@/components/LoginForm";

export const metadata = {
  title: "Sign in — ForexDNA",
};

export default function LoginPage() {
  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Sign in"
      footer={
        <>
          Don&rsquo;t have an account?{" "}
          <Link href="/signup" className="text-accent-2 hover:underline">
            Request access
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthShell>
  );
}

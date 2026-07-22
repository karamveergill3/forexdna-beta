import AuthShell from "@/components/AuthShell";
import ResetPasswordForm from "@/components/ResetPasswordForm";

export const metadata = {
  title: "Set new password — ForexDNA",
};

export default function ResetPasswordPage() {
  return (
    <AuthShell
      eyebrow="Account recovery"
      title="Set a new password"
      subtitle="Choose a new password for your account."
    >
      <ResetPasswordForm />
    </AuthShell>
  );
}

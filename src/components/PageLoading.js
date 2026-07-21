import Spinner from "@/components/Spinner";

export default function PageLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink">
      <Spinner className="h-7 w-7 text-accent-2" />
    </div>
  );
}

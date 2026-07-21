export default function AccountSkeleton() {
  return (
    <div className="min-h-screen w-full bg-ink">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-10">
          <div className="skeleton h-6 w-28 rounded-md" />
          <div className="flex gap-4">
            <div className="skeleton h-8 w-24 rounded-md" />
            <div className="skeleton h-8 w-20 rounded-md" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-14 md:px-10">
        <div className="skeleton h-8 w-40 rounded-md" />
        <div className="mt-8 flex flex-col gap-6">
          <div className="skeleton h-56 rounded-xl" />
          <div className="skeleton h-44 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

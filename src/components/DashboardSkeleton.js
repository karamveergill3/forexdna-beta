export default function DashboardSkeleton() {
  return (
    <div className="min-h-screen w-full bg-ink">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-10">
          <div className="skeleton h-6 w-28 rounded-md" />
          <div className="flex gap-4">
            <div className="skeleton h-8 w-16 rounded-md" />
            <div className="skeleton h-8 w-20 rounded-md" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-8 md:px-10">
        <div className="skeleton h-8 w-64 rounded-md" />

        <div className="mt-6 skeleton h-16 w-full rounded-xl" />

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="skeleton h-20 rounded-lg" />
          <div className="skeleton h-20 rounded-lg" />
          <div className="skeleton h-20 rounded-lg" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <div className="skeleton h-72 rounded-xl" />
          <div className="skeleton h-72 rounded-xl" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
          <div className="skeleton h-64 rounded-xl" />
          <div className="skeleton h-64 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

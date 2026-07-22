const steps = [
  { label: "Account created", done: true },
  { label: "Email verified", done: true },
  { label: "Broker connection", done: false, note: "Pending" },
  { label: "Live trading", done: false, note: "Pending" },
];

export default function ProgressTracker() {
  return (
    <div className="surface rounded-xl p-6">
      <div className="mb-5 text-sm font-semibold">Your status</div>
      <div className="flex flex-wrap gap-3">
        {steps.map((s) => (
          <div
            key={s.label}
            className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
            style={{
              borderColor: s.done ? "rgba(29,158,117,0.35)" : "rgba(255,255,255,0.1)",
              background: s.done ? "rgba(29,158,117,0.08)" : "transparent",
            }}
          >
            <span
              className="flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold"
              style={{
                background: s.done ? "var(--color-high)" : "rgba(255,255,255,0.12)",
                color: s.done ? "#06110c" : "var(--color-text-faint)",
              }}
            >
              {s.done ? "✓" : "·"}
            </span>
            <span className={s.done ? "text-text" : "text-text-dim"}>{s.label}</span>
            {s.note && (
              <span className="eyebrow text-[9px] text-text-faint">{s.note}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

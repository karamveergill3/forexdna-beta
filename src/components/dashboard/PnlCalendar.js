const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

function fmt(n) {
  const sign = n < 0 ? "-" : "+";
  return `${sign}$${Math.abs(n).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
}

export default function PnlCalendar({ month, year, dailyPnl }) {
  const firstOfMonth = new Date(year, month, 1);
  // Convert JS Sunday=0 to Monday-first index
  const startOffset = (firstOfMonth.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const monthLabel = firstOfMonth.toLocaleString("en-US", { month: "long", year: "numeric" });

  // Monthly summary, computed from the same daily data driving the grid.
  // Every day with a balance change counts toward the total (a day can move
  // the balance via swap alone, with no trade actually closing that day) —
  // "trades" only gates the separate "Trading days" count below.
  const allEntries = Object.values(dailyPnl);
  const totalPnl = allEntries.reduce((sum, e) => sum + e.pnl, 0);
  const bestDay = allEntries.reduce((best, e) => (e.pnl > (best?.pnl ?? -Infinity) ? e : best), null);
  const tradingDays = allEntries.filter((e) => e.trades > 0).length;

  // Heatmap intensity — scale color strength by how big that day's P&L was
  // relative to the month's biggest move, so standout days actually stand out.
  const maxAbsPnl = Math.max(1, ...allEntries.map((e) => Math.abs(e.pnl)));

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-semibold">{monthLabel}</span>
        <span className="eyebrow text-[10px] text-text-faint">Sample month</span>
      </div>
      <div className="grid grid-cols-7 gap-1.5">
        {DAYS.map((d) => (
          <div key={d} className="eyebrow pb-1 text-center text-[9px] text-text-faint">
            {d}
          </div>
        ))}
        {cells.map((day, i) => {
          const entry = day ? dailyPnl[day] : null;
          const positive = entry && entry.pnl > 0;
          const negative = entry && entry.pnl < 0;
          const intensity = entry
            ? Math.min(1, Math.max(0.18, Math.abs(entry.pnl) / maxAbsPnl))
            : 0;
          const bgColor = positive
            ? `rgba(29, 158, 117, ${(intensity * 0.32).toFixed(2)})`
            : negative
            ? `rgba(226, 75, 74, ${(intensity * 0.32).toFixed(2)})`
            : undefined;

          return (
            <div
              key={i}
              className={`aspect-square rounded-md border p-1.5 text-[10px] ${
                day ? "border-white/10" : "border-transparent"
              } ${!entry ? "bg-ink" : ""}`}
              style={bgColor ? { backgroundColor: bgColor } : undefined}
            >
              {day && (
                <>
                  <div className="text-text-faint">{day}</div>
                  {entry && (
                    <div
                      className="mt-1 font-mono-tight text-[10px] font-semibold"
                      style={{ color: positive ? "var(--color-high)" : "var(--color-mid)" }}
                    >
                      {positive ? "+" : ""}
                      {entry.pnl.toFixed(0)}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
        <SummaryStat
          label="Month total"
          value={fmt(totalPnl)}
          tone={totalPnl >= 0 ? "high" : "mid"}
        />
        <SummaryStat
          label="Best day"
          value={bestDay ? fmt(bestDay.pnl) : "—"}
          tone="high"
        />
        <SummaryStat label="Trading days" value={tradingDays} />
      </div>
    </div>
  );
}

function SummaryStat({ label, value, tone }) {
  const color = tone === "high" ? "var(--color-high)" : tone === "mid" ? "var(--color-mid)" : "var(--color-text)";
  return (
    <div>
      <div className="eyebrow text-[9px] text-text-faint">{label}</div>
      <div className="mt-1 font-mono-tight text-sm font-semibold" style={{ color }}>
        {value}
      </div>
    </div>
  );
}

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

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
          return (
            <div
              key={i}
              className={`aspect-square rounded-md border p-1.5 text-[10px] ${
                day ? "border-white/10" : "border-transparent"
              } ${positive ? "bg-high/10" : negative ? "bg-mid/10" : "bg-ink"}`}
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
    </div>
  );
}

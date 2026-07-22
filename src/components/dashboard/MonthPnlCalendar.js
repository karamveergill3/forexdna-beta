"use client";

import { useState } from "react";
import PnlCalendar from "./PnlCalendar";

// `months` is ordered oldest → newest (previous month first, current month
// last). Arrows step one month at a time — no scrolling. Defaults to the
// most recent month; left arrow steps back toward the previous month.
export default function MonthPnlCalendar({ months }) {
  const [index, setIndex] = useState(months.length - 1);
  const current = months[index];

  return (
    <div>
      <div className="mb-3 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          aria-label="Previous month"
          className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 text-text-dim transition-colors hover:border-white/20 hover:text-text disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:text-text-dim"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => setIndex((i) => Math.min(months.length - 1, i + 1))}
          disabled={index === months.length - 1}
          aria-label="Next month"
          className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 text-text-dim transition-colors hover:border-white/20 hover:text-text disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:text-text-dim"
        >
          ›
        </button>
      </div>
      <PnlCalendar month={current.month} year={current.year} dailyPnl={current.dailyPnl} />
    </div>
  );
}

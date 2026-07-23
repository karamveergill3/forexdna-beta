"use client";

import {
  useDeposit,
  ONE_WEEK_RETURN,
  FOUR_WEEK_RETURN,
  formatGBP,
} from "./DepositContext";

export default function CalcResultCard({ field, highlight = false, className = "" }) {
  const { deposit } = useDeposit();

  if (field === "deposit") {
    return <span className={className}>{formatGBP(deposit)}</span>;
  }

  const isWeek1 = field === "week1";
  const returnPct = isWeek1 ? ONE_WEEK_RETURN : FOUR_WEEK_RETURN;
  const gain = deposit * returnPct;
  const balance = deposit + gain;

  if (highlight) {
    return (
      <div className="rounded-lg border border-accent/28 bg-accent/12 p-5">
        <div className="mb-2.5 flex items-baseline justify-between">
          <span className="font-mono-tight text-[13px] tracking-[0.08em] text-text-dim">
            4 WEEKS
          </span>
          <span className="font-mono-tight text-[13px] text-accent-2">
            +{Math.round(returnPct * 100)}% actual
          </span>
        </div>
        <div className="font-mono-tight text-[32px] font-bold leading-none text-accent-2 sm:text-[42px]">
          +{formatGBP(gain)}
        </div>
        <div className="mt-2 text-sm text-text-dim">
          Est. balance {formatGBP(balance)}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-white/12 bg-ink p-4">
      <div className="mb-2 font-mono-tight text-[11px] tracking-[0.1em] text-text-faint">
        1 WEEK
      </div>
      <div className="font-mono-tight text-[20px] font-bold leading-none text-accent-2 sm:text-[22px]">
        +{formatGBP(gain)}
      </div>
      <div className="mt-1.5 text-xs text-text-dim">Est. {formatGBP(balance)}</div>
    </div>
  );
}

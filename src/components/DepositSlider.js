"use client";

import { useDeposit, DEPOSIT_MIN, DEPOSIT_MAX, DEPOSIT_STEP, formatGBP } from "./DepositContext";

export default function DepositSlider({ showBounds = false }) {
  const { deposit, setDeposit } = useDeposit();
  const pct = ((deposit - DEPOSIT_MIN) / (DEPOSIT_MAX - DEPOSIT_MIN)) * 100;

  return (
    <div>
      <input
        type="range"
        min={DEPOSIT_MIN}
        max={DEPOSIT_MAX}
        step={DEPOSIT_STEP}
        value={deposit}
        onChange={(e) => setDeposit(Number(e.target.value))}
        aria-label="Deposit amount"
        className="eq-slider"
        style={{
          background: `linear-gradient(to right, var(--color-accent) ${pct}%, rgba(255,255,255,0.12) ${pct}%)`,
        }}
      />
      {showBounds && (
        <div className="mt-2.5 flex justify-between font-mono-tight text-xs text-text-faint">
          <span>{formatGBP(DEPOSIT_MIN)}</span>
          <span>{formatGBP(DEPOSIT_MAX)}</span>
        </div>
      )}
    </div>
  );
}

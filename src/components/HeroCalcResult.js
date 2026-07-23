"use client";

import { useDeposit, FOUR_WEEK_RETURN, formatGBP } from "./DepositContext";

export default function HeroCalcResult({ field, className = "" }) {
  const { deposit } = useDeposit();

  if (field === "deposit") {
    return <span className={className}>{formatGBP(deposit)}</span>;
  }

  const result = deposit * (1 + FOUR_WEEK_RETURN);
  return <span className={className}>{formatGBP(result)}</span>;
}

"use client";

import { createContext, useContext, useState } from "react";

export const DEPOSIT_MIN = 500;
export const DEPOSIT_MAX = 1000000;
export const DEPOSIT_STEP = 500;
export const DEPOSIT_START = 50000;

// Real results from ForexDNA's live demo account (Vantage Markets MT5,
// account 25632094), 22 Jun – 21 Jul 2026. Not a projection — these are
// the actual returns over those exact windows on that one account.
export const ONE_WEEK_RETURN = 0.056278; // 22–29 Jun
export const FOUR_WEEK_RETURN = 0.4907; // 22 Jun – 21 Jul, full period

const DepositContext = createContext(null);

export function DepositProvider({ children }) {
  const [deposit, setDeposit] = useState(DEPOSIT_START);
  return (
    <DepositContext.Provider value={{ deposit, setDeposit }}>
      {children}
    </DepositContext.Provider>
  );
}

export function useDeposit() {
  const ctx = useContext(DepositContext);
  if (!ctx) throw new Error("useDeposit must be used within DepositProvider");
  return ctx;
}

export function formatGBP(n) {
  return "£" + Math.round(n).toLocaleString("en-GB");
}

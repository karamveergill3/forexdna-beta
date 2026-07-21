// Sample/preview data only — not connected to any real account or broker.
// Shapes match what the real dashboard will populate once a broker feed
// is connected.

export const sampleAccount = {
  accountNumber: "FDX-2025-01934",
  balance: 13496.32,
  equity: 13496.32,
  unrealizedPnl: 0,
  startingBalance: 10000,
  connectedSince: "5 Sep 2025",
  strategy: "Mean reversion · FX",
  platform: "MT4 / MT5",
};

export const balanceCurve = [
  { t: "5 Sep", balance: 10000 },
  { t: "8 Sep", balance: 10145 },
  { t: "9 Sep", balance: 10420 },
  { t: "10 Sep", balance: 10310 },
  { t: "11 Sep", balance: 10680 },
  { t: "12 Sep", balance: 11150 },
  { t: "15 Sep", balance: 11020 },
  { t: "16 Sep", balance: 11540 },
  { t: "17 Sep", balance: 12100 },
  { t: "18 Sep", balance: 11890 },
  { t: "19 Sep", balance: 12430 },
  { t: "22 Sep", balance: 12950 },
  { t: "23 Sep", balance: 13496 },
];

export const closedTrades = [
  { id: "144312881", side: "Buy", closeTime: "23 Sep, 14:12", volume: 0.6, symbol: "EURUSD", pnl: 546.20, pips: 44, duration: "02:10:12" },
  { id: "144287654", side: "Buy", closeTime: "22 Sep, 09:41", volume: 0.6, symbol: "GBPUSD", pnl: 520.15, pips: 38, duration: "01:05:22" },
  { id: "144255120", side: "Sell", closeTime: "19 Sep, 17:02", volume: 0.5, symbol: "USDJPY", pnl: 540.30, pips: 46, duration: "00:42:10" },
  { id: "144230981", side: "Buy", closeTime: "18 Sep, 11:20", volume: 0.5, symbol: "EURUSD", pnl: -210.40, pips: -17, duration: "00:24:36" },
  { id: "144198765", side: "Buy", closeTime: "17 Sep, 21:02", volume: 0.6, symbol: "GBPUSD", pnl: 560.71, pips: 42, duration: "01:00:51" },
  { id: "144178959", side: "Buy", closeTime: "16 Sep, 17:32", volume: 0.6, symbol: "EURUSD", pnl: 520.98, pips: 41, duration: "00:17:36" },
  { id: "144042872", side: "Sell", closeTime: "15 Sep, 04:01", volume: 0.5, symbol: "USDJPY", pnl: -130.56, pips: -12, duration: "01:00:46" },
  { id: "144026201", side: "Buy", closeTime: "12 Sep, 17:01", volume: 0.5, symbol: "USDJPY", pnl: 470.09, pips: 39, duration: "00:46:36" },
  { id: "143995557", side: "Buy", closeTime: "11 Sep, 04:31", volume: 0.5, symbol: "EURUSD", pnl: 370.86, pips: 29, duration: "09:16:44" },
  { id: "143978943", side: "Sell", closeTime: "10 Sep, 15:09", volume: 0.5, symbol: "GBPUSD", pnl: -110.38, pips: -9, duration: "00:03:35" },
  { id: "143961212", side: "Buy", closeTime: "9 Sep, 08:44", volume: 0.5, symbol: "EURUSD", pnl: 275.60, pips: 22, duration: "00:38:12" },
  { id: "143944301", side: "Buy", closeTime: "8 Sep, 10:15", volume: 0.5, symbol: "USDJPY", pnl: 145.20, pips: 13, duration: "00:29:04" },
];

export const dailyPnl = {
  5: { pnl: 0, trades: 0 },
  8: { pnl: 145.2, trades: 1 },
  9: { pnl: 275.6, trades: 1 },
  10: { pnl: -110.38, trades: 1 },
  11: { pnl: 370.86, trades: 1 },
  12: { pnl: 470.09, trades: 1 },
  15: { pnl: -130.56, trades: 1 },
  16: { pnl: 520.98, trades: 1 },
  17: { pnl: 560.71, trades: 1 },
  18: { pnl: -210.4, trades: 1 },
  19: { pnl: 540.3, trades: 1 },
  22: { pnl: 520.15, trades: 1 },
  23: { pnl: 546.2, trades: 1 },
};

export const statistics = {
  winRate: 75.0,
  avgProfit: 383.79,
  avgLoss: -150.45,
  numberOfTrades: 12,
  lots: 6.4,
  sharpe: 1.64,
  avgRRR: 1.72,
  expectancy: 191.53,
  profitFactor: 2.55,
};

// Usage against the risk stack's own internal caps — shown as progress,
// not as a hard "limit" figure.
export const riskStack = [
  { label: "Daily loss buffer used", pct: 14, tone: "high" },
  { label: "Drawdown buffer used", pct: 26, tone: "high" },
  { label: "Monthly profit progress", pct: 68, tone: "accent" },
];

export const disciplineScore = 88;

// Deterministic (no Math.random — stays identical between server & client)
// synthetic trend ending exactly at the real stat value, purely for the
// sparkline visuals in the Statistics grid.
function sparkTrend(final, amplitude, phase = 0, points = 8) {
  const arr = [];
  for (let i = 0; i < points; i++) {
    const t = i / (points - 1);
    const wiggle = Math.sin(t * Math.PI * 2.4 + phase) * amplitude * (1 - t * 0.7);
    arr.push(final - amplitude * 0.35 + wiggle + t * amplitude * 0.35);
  }
  arr[points - 1] = final;
  return arr;
}

export const statTrends = {
  winRate: sparkTrend(statistics.winRate, 9, 0.4),
  avgProfit: sparkTrend(statistics.avgProfit, 90, 1.1),
  avgLoss: sparkTrend(statistics.avgLoss, 40, 2.0),
  numberOfTrades: sparkTrend(statistics.numberOfTrades, 3, 0.8),
  lots: sparkTrend(statistics.lots, 1.2, 1.6),
  sharpe: sparkTrend(statistics.sharpe, 0.5, 0.2),
  avgRRR: sparkTrend(statistics.avgRRR, 0.4, 2.4),
  expectancy: sparkTrend(statistics.expectancy, 60, 0.6),
  profitFactor: sparkTrend(statistics.profitFactor, 0.6, 1.4),
};

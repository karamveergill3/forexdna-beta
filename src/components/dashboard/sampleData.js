// Sample/preview data only — not connected to any real account or broker.
// Shapes match what the real dashboard will populate once a broker feed
// is connected.

export const sampleAccount = {
  balance: 8967.91,
  equity: 8967.91,
  unrealizedPnl: 0,
  startingBalance: 10000,
  connectedSince: "5 Sep 2025",
  strategy: "Mean reversion · FX",
  platform: "MT4 / MT5",
};

export const balanceCurve = [
  { t: "5 Sep", balance: 10000 },
  { t: "8 Sep", balance: 10127 },
  { t: "9 Sep", balance: 10284 },
  { t: "10 Sep", balance: 9975 },
  { t: "11 Sep", balance: 10054 },
  { t: "12 Sep", balance: 10325 },
  { t: "15 Sep", balance: 9945 },
  { t: "16 Sep", balance: 9582 },
  { t: "17 Sep", balance: 8968 },
];

export const closedTrades = [
  { id: "144178959", side: "Sell", closeTime: "17 Sep, 21:02", volume: 0.5, symbol: "GBPUSD", pnl: -620.71, pips: -42, duration: "00:00:51" },
  { id: "144128383", side: "Buy", closeTime: "16 Sep, 17:32", volume: 0.5, symbol: "EURUSD", pnl: -362.98, pips: -28, duration: "00:17:36" },
  { id: "144042872", side: "Buy", closeTime: "15 Sep, 04:01", volume: 0.5, symbol: "EURUSD", pnl: -380.56, pips: -31, duration: "01:00:46" },
  { id: "144026201", side: "Buy", closeTime: "12 Sep, 17:01", volume: 0.5, symbol: "USDJPY", pnl: 110.09, pips: 14, duration: "00:46:36" },
  { id: "143995557", side: "Buy", closeTime: "12 Sep, 04:31", volume: 0.5, symbol: "USDJPY", pnl: 160.86, pips: 19, duration: "09:16:44" },
  { id: "143978943", side: "Buy", closeTime: "11 Sep, 15:09", volume: 0.5, symbol: "EURUSD", pnl: 78.38, pips: 9, duration: "00:03:35" },
];

export const dailyPnl = {
  // day number -> { pnl, trades }
  5: { pnl: 8.01, trades: 1 },
  8: { pnl: 127.13, trades: 1 },
  9: { pnl: 156.83, trades: 1 },
  10: { pnl: -309.14, trades: 2 },
  11: { pnl: 78.38, trades: 1 },
  12: { pnl: 270.95, trades: 2 },
  15: { pnl: -380.56, trades: 1 },
  16: { pnl: -362.98, trades: 1 },
  17: { pnl: -620.71, trades: 1 },
};

export const statistics = {
  winRate: 63.64,
  avgProfit: 100.77,
  avgLoss: -434.37,
  numberOfTrades: 11,
  lots: 5.05,
  sharpe: -0.37,
  avgRRR: 0.23,
  expectancy: -93.83,
  profitFactor: 0.41,
};

export const riskStackLimits = [
  { label: "Max daily loss", limit: "-$500", current: "-$833.10", pct: -8.3, breached: true },
  { label: "Max drawdown", limit: "-$1,000", current: "-$1,244.48", pct: -12.4, breached: true },
  { label: "Monthly profit target", limit: "$500", current: "-$1,032.09", pct: -10.3, breached: true },
];

export const disciplineScore = 73;

export const buySell = [
  { name: "Buy", value: -18 },
  { name: "Sell", value: -1013 },
];

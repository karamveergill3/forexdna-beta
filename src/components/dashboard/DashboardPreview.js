"use client";

import BalanceChart from "./BalanceChart";
import DisciplineGauge from "./DisciplineGauge";
import PnlCalendar from "./PnlCalendar";
import {
  sampleAccount,
  balanceCurve,
  closedTrades,
  dailyPnl,
  statistics,
  riskStackLimits,
  disciplineScore,
} from "./sampleData";

function fmt(n) {
  const sign = n < 0 ? "-" : "";
  return `${sign}$${Math.abs(n).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export default function DashboardPreview() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 md:px-10">
      <div className="mb-8 flex items-center gap-3 rounded-lg border border-accent-2/30 bg-accent/10 px-4 py-3">
        <span className="eyebrow text-[10px] text-accent-2">Preview</span>
        <p className="text-xs text-text-dim">
          Sample data shown below — this is not your real account. It&rsquo;ll
          populate with your live stats once your broker connection opens.
        </p>
      </div>

      {/* Top row: balance / equity / unrealized */}
      <div className="grid grid-cols-3 gap-3">
        <StatBox label="Balance" value={fmt(sampleAccount.balance)} />
        <StatBox label="Equity" value={fmt(sampleAccount.equity)} />
        <StatBox label="Unrealized P&L" value={fmt(sampleAccount.unrealizedPnl)} />
      </div>

      {/* Chart + account overview */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="surface rounded-xl p-6">
          <div className="mb-2 text-sm font-semibold">Balance history</div>
          <BalanceChart data={balanceCurve} startingBalance={sampleAccount.startingBalance} />
        </div>

        <div className="surface rounded-xl p-6">
          <div className="mb-4 text-sm font-semibold">Account overview</div>
          <dl className="flex flex-col gap-3 text-sm">
            <Row label="Strategy" value={sampleAccount.strategy} />
            <Row label="Connected since" value={sampleAccount.connectedSince} />
            <Row label="Starting balance" value={fmt(sampleAccount.startingBalance)} />
            <Row label="Platform" value={sampleAccount.platform} />
          </dl>
        </div>
      </div>

      {/* Trading journal + calendar */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="surface rounded-xl p-6">
          <div className="mb-4 text-sm font-semibold">Closed trades</div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="eyebrow text-left text-[10px] text-text-faint">
                  <th className="pb-3 pr-4 font-medium">Side</th>
                  <th className="pb-3 pr-4 font-medium">Closed</th>
                  <th className="pb-3 pr-4 font-medium">Symbol</th>
                  <th className="pb-3 pr-4 font-medium">Volume</th>
                  <th className="pb-3 text-right font-medium">P&amp;L</th>
                </tr>
              </thead>
              <tbody>
                {closedTrades.map((t) => (
                  <tr key={t.id} className="border-t border-white/8">
                    <td className="py-3 pr-4">
                      <span
                        className="font-mono-tight text-xs font-semibold"
                        style={{ color: t.side === "Buy" ? "var(--color-high)" : "var(--color-mid)" }}
                      >
                        {t.side}
                      </span>
                    </td>
                    <td className="py-3 pr-4 text-text-dim">{t.closeTime}</td>
                    <td className="py-3 pr-4 font-mono-tight">{t.symbol}</td>
                    <td className="py-3 pr-4 font-mono-tight text-text-dim">{t.volume}</td>
                    <td
                      className="py-3 text-right font-mono-tight font-semibold"
                      style={{ color: t.pnl >= 0 ? "var(--color-high)" : "var(--color-mid)" }}
                    >
                      {fmt(t.pnl)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="surface rounded-xl p-6">
          <PnlCalendar month={8} year={2025} dailyPnl={dailyPnl} />
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-6 surface rounded-xl p-6">
        <div className="mb-4 text-sm font-semibold">Statistics</div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          <StatBox small label="Win rate" value={`${statistics.winRate}%`} tone="high" />
          <StatBox small label="Avg profit" value={fmt(statistics.avgProfit)} tone="high" />
          <StatBox small label="Avg loss" value={fmt(statistics.avgLoss)} tone="mid" />
          <StatBox small label="Trades" value={statistics.numberOfTrades} />
          <StatBox small label="Lots" value={statistics.lots} />
          <StatBox small label="Sharpe ratio" value={statistics.sharpe} />
          <StatBox small label="Avg RRR" value={statistics.avgRRR} />
          <StatBox small label="Expectancy" value={fmt(statistics.expectancy)} tone="mid" />
          <StatBox small label="Profit factor" value={statistics.profitFactor} />
        </div>
      </div>

      {/* Risk stack + discipline */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
        <div className="surface flex flex-col items-center rounded-xl p-6">
          <div className="mb-2 self-start text-sm font-semibold">Discipline score</div>
          <DisciplineGauge score={disciplineScore} />
        </div>

        <div className="surface rounded-xl p-6">
          <div className="mb-4 text-sm font-semibold">Risk stack limits</div>
          <div className="flex flex-col divide-y divide-white/8">
            {riskStackLimits.map((r) => (
              <div key={r.label} className="flex items-center justify-between py-3 text-sm">
                <span className="text-text-dim">{r.label}</span>
                <div className="flex items-center gap-4">
                  <span className="font-mono-tight text-xs text-text-faint">Limit {r.limit}</span>
                  <span
                    className="font-mono-tight text-sm font-semibold"
                    style={{ color: r.breached ? "var(--color-mid)" : "var(--color-high)" }}
                  >
                    {r.current}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatBox({ label, value, small, tone }) {
  const color =
    tone === "high" ? "var(--color-high)" : tone === "mid" ? "var(--color-mid)" : "var(--color-text)";
  return (
    <div className={`surface rounded-lg ${small ? "p-3" : "p-4"}`}>
      <div className="eyebrow text-[10px] text-text-faint">{label}</div>
      <div
        className={`mt-1.5 font-mono-tight font-bold ${small ? "text-base" : "text-xl"}`}
        style={{ color }}
      >
        {value}
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-text-faint">{label}</dt>
      <dd className="font-mono-tight text-text">{value}</dd>
    </div>
  );
}

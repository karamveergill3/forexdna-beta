"use client";

import { useEffect, useRef, useState } from "react";
import BalanceChart from "./BalanceChart";
import DisciplineGauge from "./DisciplineGauge";
import MonthPnlCalendar from "./MonthPnlCalendar";
import CountUp from "./CountUp";
import Sparkline from "./Sparkline";
import TiltCard from "@/components/TiltCard";
import {
  sampleAccount,
  balanceCurve,
  closedTrades,
  dailyPnlJune2026,
  dailyPnlJuly2026,
  statistics,
  statTrends,
  riskStack,
  disciplineScore,
} from "./sampleData";

function fmt(n) {
  const sign = n < 0 ? "-" : "";
  return `${sign}$${Math.abs(n).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

const toneColor = {
  high: "var(--color-high)",
  accent: "var(--color-accent-2)",
  mid: "var(--color-mid)",
};

export default function DashboardPreview() {
  return (
    <div className="mx-auto max-w-[1440px] px-6 pb-24 md:px-10">
      <div className="mb-8 flex items-center gap-3 rounded-lg border border-accent-2/30 bg-accent/10 px-4 py-3">
        <span className="eyebrow text-[10px] text-accent-2">Preview</span>
        <p className="text-xs text-text-dim">
          Sample data shown below — this is not your real account. It&rsquo;ll
          populate with your live stats once your broker connection opens.
        </p>
      </div>

      {/* Top row: balance / equity */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <StatBox label="Balance" countValue={sampleAccount.balance} countFormat={fmt} tone="high" />
        <StatBox label="Equity" countValue={sampleAccount.equity} countFormat={fmt} tone="high" />
      </div>

      {/* Chart + account overview */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <div className="glass-card relative overflow-hidden rounded-xl p-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold">Balance history</span>
            <CountUp
              value={((sampleAccount.balance - sampleAccount.startingBalance) / sampleAccount.startingBalance) * 100}
              format={(n) => `+${n.toFixed(1)}%`}
              className="font-mono-tight text-sm font-semibold"
              style={{ color: "var(--color-high)" }}
            />
          </div>
          <BalanceChart data={balanceCurve} startingBalance={sampleAccount.startingBalance} />
          <div className="trace-sweep pointer-events-none absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        <div className="glass-card rounded-xl p-6">
          <div className="mb-4 text-sm font-semibold">Account overview</div>
          <dl className="flex flex-col gap-3 text-sm">
            <Row label="Account number" value={sampleAccount.accountNumber} />
            <Row label="Strategy" value={sampleAccount.strategy} />
            <Row label="Connected since" value={sampleAccount.connectedSince} />
            <Row label="Starting balance" value={fmt(sampleAccount.startingBalance)} />
            <Row label="Platform" value={sampleAccount.platform} />
          </dl>
        </div>
      </div>

      {/* Trading journal + calendar */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
        <div className="glass-card rounded-xl p-6 self-start">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-semibold">Closed trades</span>
            <span className="eyebrow text-[10px] text-text-faint">{closedTrades.length} trades</span>
          </div>
          <div className="max-h-[480px] overflow-y-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="sticky top-0 z-10 bg-panel">
                <tr className="eyebrow text-left text-[10px] text-text-faint">
                  <th className="pb-3 pr-4 font-medium">Side</th>
                  <th className="pb-3 pr-4 font-medium">Closed</th>
                  <th className="pb-3 pr-4 font-medium">Symbol</th>
                  <th className="pb-3 pr-4 font-medium">Volume</th>
                  <th className="pb-3 text-right font-medium">P&amp;L</th>
                </tr>
              </thead>
              <tbody>
                {closedTrades.map((t, i) => (
                  <tr
                    key={t.id}
                    className="rise border-t border-white/8"
                    style={{ animationDelay: `${Math.min(i, 20) * 55}ms` }}
                  >
                    <td className="py-3 pr-4">
                      <span
                        className="rounded-full px-2 py-0.5 font-mono-tight text-[11px] font-semibold"
                        style={{
                          color: t.side === "Buy" ? "var(--color-high)" : "var(--color-mid)",
                          background: t.side === "Buy" ? "rgba(29,158,117,0.12)" : "rgba(226,75,74,0.12)",
                        }}
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

        <div className="glass-card rounded-xl p-6 self-start">
          <MonthPnlCalendar
            months={[
              { month: 5, year: 2026, dailyPnl: dailyPnlJune2026 },
              { month: 6, year: 2026, dailyPnl: dailyPnlJuly2026 },
            ]}
          />
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-6 glass-card rounded-xl p-6">
        <div className="mb-4 text-sm font-semibold">Statistics</div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          <StatBox small label="Win rate" countValue={statistics.winRate} countFormat={(n) => `${n.toFixed(1)}%`} tone="high" trend={statTrends.winRate} />
          <StatBox small label="Avg profit" countValue={statistics.avgProfit} countFormat={fmt} tone="high" trend={statTrends.avgProfit} />
          <StatBox
            small
            label="Avg loss"
            countValue={statistics.avgLoss}
            countFormat={(n) => `$${Math.abs(n).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
            tone="mid"
            trend={statTrends.avgLoss}
          />
          <StatBox small label="Trades" countValue={statistics.numberOfTrades} countFormat={(n) => Math.round(n)} trend={statTrends.numberOfTrades} />
          <StatBox small label="Lots" countValue={statistics.lots} countFormat={(n) => n.toFixed(2)} trend={statTrends.lots} />
          <StatBox small label="Sharpe ratio" countValue={statistics.sharpe} countFormat={(n) => n.toFixed(2)} tone="high" trend={statTrends.sharpe} />
          <StatBox small label="Avg RRR" countValue={statistics.avgRRR} countFormat={(n) => n.toFixed(2)} tone="high" trend={statTrends.avgRRR} />
          <StatBox small label="Expectancy" countValue={statistics.expectancy} countFormat={fmt} tone="high" trend={statTrends.expectancy} />
          <StatBox small label="Profit factor" countValue={statistics.profitFactor} countFormat={(n) => n.toFixed(2)} tone="high" trend={statTrends.profitFactor} />
        </div>
      </div>

      {/* Risk stack + discipline */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
        <div className="glass-card flex flex-col items-center rounded-xl p-6 self-start">
          <div className="mb-2 self-start text-sm font-semibold">Discipline score</div>
          <DisciplineGauge score={disciplineScore} />
        </div>

        <div className="glass-card rounded-xl p-6 self-start">
          <div className="mb-5 text-sm font-semibold">Risk stack</div>
          <div className="flex flex-col gap-5">
            {riskStack.map((r) => (
              <div key={r.label}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-text-dim">{r.label}</span>
                  <span
                    className="font-mono-tight text-xs font-semibold"
                    style={{ color: toneColor[r.tone] }}
                  >
                    {r.pct}%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-ink">
                  <RiskBar pct={r.pct} color={toneColor[r.tone]} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatBox({ label, value, countValue, countFormat, small, tone, trend }) {
  const color = tone ? toneColor[tone] : "var(--color-text)";
  const sizeClass = `mt-1.5 font-mono-tight font-bold ${small ? "text-base" : "text-xl"}`;
  return (
    <TiltCard className={`glass-card rounded-lg ${small ? "p-3" : "p-4"}`}>
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="eyebrow text-[10px] text-text-faint">{label}</div>
          {countValue !== undefined ? (
            <CountUp
              value={countValue}
              format={countFormat}
              className={sizeClass}
              style={{ color }}
            />
          ) : (
            <div className={sizeClass} style={{ color }}>
              {value}
            </div>
          )}
        </div>
        {trend && <Sparkline data={trend} color={color} />}
      </div>
    </TiltCard>
  );
}

function RiskBar({ pct, color }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="h-full rounded-full transition-[width] duration-1000 ease-out"
      style={{ width: visible ? `${pct}%` : "0%", background: color }}
    />
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="shrink-0 text-text-faint">{label}</dt>
      <dd className="truncate font-mono-tight text-text">{value}</dd>
    </div>
  );
}

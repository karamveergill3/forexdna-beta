"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

export default function BalanceChart({ data, startingBalance }) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="balanceFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-high)" stopOpacity={0.4} />
              <stop offset="100%" stopColor="var(--color-high)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
          <XAxis
            dataKey="t"
            stroke="var(--color-text-faint)"
            fontSize={11}
            fontFamily="var(--font-jbmono)"
            tickLine={false}
            axisLine={{ stroke: "rgba(255,255,255,0.08)" }}
          />
          <YAxis
            stroke="var(--color-text-faint)"
            fontSize={11}
            fontFamily="var(--font-jbmono)"
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
            width={48}
          />
          <ReferenceLine
            y={startingBalance}
            stroke="var(--color-text-faint)"
            strokeDasharray="4 4"
            label={{
              value: "Starting balance",
              position: "insideTopLeft",
              fill: "var(--color-text-faint)",
              fontSize: 10,
              fontFamily: "var(--font-jbmono)",
            }}
          />
          <Tooltip
            contentStyle={{
              background: "var(--color-panel)",
              border: "1px solid var(--color-line)",
              borderRadius: 8,
              fontFamily: "var(--font-jbmono)",
              fontSize: 12,
            }}
            labelStyle={{ color: "var(--color-text-dim)" }}
            formatter={(v) => [`$${v.toLocaleString()}`, "Balance"]}
          />
          <Area
            type="monotone"
            dataKey="balance"
            stroke="var(--color-high)"
            strokeWidth={2.5}
            fill="url(#balanceFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

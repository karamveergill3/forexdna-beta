export default function DisciplineGauge({ score }) {
  const clamped = Math.max(0, Math.min(100, score));
  const angle = (clamped / 100) * 180;
  const rad = (Math.PI / 180) * (180 - angle);
  const r = 80;
  const cx = 100;
  const cy = 100;
  const x = cx + r * Math.cos(rad);
  const y = cy - r * Math.sin(rad);

  const label = clamped >= 80 ? "Excellent" : clamped >= 30 ? "Good" : "Needs work";
  const color = clamped >= 80 ? "var(--color-high)" : clamped >= 30 ? "var(--color-accent-2)" : "var(--color-mid)";

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 200 115" className="w-full max-w-[220px]">
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke={color}
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={`${(clamped / 100) * 251.2} 251.2`}
        />
        <circle cx={x} cy={y} r="5" fill="var(--color-text)" />
        <text
          x="100"
          y="88"
          textAnchor="middle"
          fontSize="30"
          fontWeight="800"
          fill="var(--color-text)"
          fontFamily="var(--font-jbmono)"
        >
          {clamped}%
        </text>
      </svg>
      <span className="eyebrow -mt-1 text-[11px]" style={{ color }}>
        {label}
      </span>
    </div>
  );
}

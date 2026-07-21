// Purely decorative — stylized candles, not real market data.
const candles = [
  { o: 40, h: 48, l: 35, c: 46 },
  { o: 46, h: 57, l: 44, c: 55 },
  { o: 55, h: 59, l: 46, c: 49 },
  { o: 49, h: 61, l: 47, c: 59 },
  { o: 59, h: 69, l: 57, c: 67 },
  { o: 67, h: 69, l: 58, c: 61 },
  { o: 61, h: 73, l: 60, c: 71 },
  { o: 71, h: 75, l: 64, c: 68 },
  { o: 68, h: 81, l: 67, c: 79 },
  { o: 79, h: 84, l: 71, c: 73 },
  { o: 73, h: 89, l: 72, c: 87 },
  { o: 87, h: 95, l: 85, c: 93 },
  { o: 93, h: 94, l: 82, c: 86 },
  { o: 86, h: 100, l: 85, c: 98 },
];

const COLS = candles.length;
const COL_W = 26;
const BODY_W = 15;
const CHART_W = COLS * COL_W;
const CHART_H = 100;

// Values run low->high in "price" terms; invert for SVG y (0 at top).
function y(v) {
  return CHART_H - v;
}

export default function CandlestickArt() {
  return (
    <svg
      viewBox={`0 0 ${CHART_W} ${CHART_H}`}
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {candles.map((k, i) => {
        const bullish = k.c >= k.o;
        const color = bullish ? "var(--color-high)" : "var(--color-mid)";
        const bodyTop = y(Math.max(k.o, k.c));
        const bodyBottom = y(Math.min(k.o, k.c));
        const bodyHeight = Math.max(bodyBottom - bodyTop, 1.5);
        const x = i * COL_W + (COL_W - BODY_W) / 2;

        return (
          <g key={i}>
            <line
              x1={x + BODY_W / 2}
              x2={x + BODY_W / 2}
              y1={y(k.h)}
              y2={y(k.l)}
              stroke={color}
              strokeWidth={1.4}
              opacity={0.9}
            />
            <rect
              x={x}
              y={bodyTop}
              width={BODY_W}
              height={bodyHeight}
              fill={color}
              opacity={0.85}
              rx={1.5}
            />
          </g>
        );
      })}
    </svg>
  );
}

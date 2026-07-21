// Purely decorative — stylized candles, not real market data.
const candles = [
  { o: 60, h: 68, l: 55, c: 58 },
  { o: 58, h: 62, l: 50, c: 52 },
  { o: 52, h: 56, l: 44, c: 46 },
  { o: 46, h: 54, l: 43, c: 51 },
  { o: 51, h: 60, l: 49, c: 57 },
  { o: 57, h: 58, l: 47, c: 49 },
  { o: 49, h: 51, l: 40, c: 42 },
  { o: 42, h: 50, l: 39, c: 47 },
  { o: 47, h: 55, l: 45, c: 53 },
  { o: 53, h: 61, l: 51, c: 59 },
  { o: 59, h: 60, l: 49, c: 51 },
  { o: 51, h: 58, l: 48, c: 55 },
  { o: 55, h: 64, l: 53, c: 62 },
  { o: 62, h: 70, l: 60, c: 68 },
];

const COLS = candles.length;
const COL_W = 26;
const BODY_W = 14;
const CHART_W = COLS * COL_W;
const CHART_H = 80;

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

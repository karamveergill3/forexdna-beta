// Purely decorative — stylized candles, not real market data. Built as a
// staircase: a few candles consolidating at each level, then a breakout
// candle jumping to the next level up.
const candles = [
  // step 1
  { o: 10, h: 14, l: 7, c: 12 },
  { o: 12, h: 13, l: 8, c: 9 },
  { o: 9, h: 12, l: 7, c: 11 },
  { o: 11, h: 22, l: 10, c: 20 },
  // step 2
  { o: 20, h: 23, l: 17, c: 18 },
  { o: 18, h: 21, l: 16, c: 20 },
  { o: 20, h: 22, l: 17, c: 19 },
  { o: 19, h: 31, l: 18, c: 29 },
  // step 3
  { o: 29, h: 32, l: 26, c: 27 },
  { o: 27, h: 30, l: 24, c: 29 },
  { o: 29, h: 31, l: 26, c: 28 },
  { o: 28, h: 30, l: 25, c: 27 },
  { o: 27, h: 40, l: 26, c: 38 },
  // step 4
  { o: 38, h: 41, l: 35, c: 36 },
  { o: 36, h: 39, l: 34, c: 38 },
  { o: 38, h: 40, l: 35, c: 37 },
  { o: 37, h: 50, l: 36, c: 48 },
  // step 5
  { o: 48, h: 51, l: 45, c: 46 },
  { o: 46, h: 49, l: 44, c: 48 },
  { o: 48, h: 50, l: 45, c: 47 },
  { o: 47, h: 61, l: 46, c: 59 },
  // step 6
  { o: 59, h: 62, l: 56, c: 57 },
  { o: 57, h: 60, l: 55, c: 59 },
  { o: 59, h: 61, l: 56, c: 58 },
  { o: 58, h: 60, l: 55, c: 57 },
  { o: 57, h: 72, l: 56, c: 70 },
  // final rally
  { o: 70, h: 73, l: 67, c: 68 },
  { o: 68, h: 71, l: 66, c: 70 },
  { o: 70, h: 85, l: 69, c: 83 },
  { o: 83, h: 86, l: 78, c: 80 },
];

const COLS = candles.length;
const COL_W = 10;
const BODY_W = 7;
const CHART_W = COLS * COL_W;
const CHART_H = 96;

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
              rx={1}
            />
          </g>
        );
      })}
    </svg>
  );
}

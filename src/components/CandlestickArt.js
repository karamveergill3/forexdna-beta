// Purely decorative — stylized candles generated with a fixed seed (not
// real market data). Shaped like a classic pattern: a choppy base, a sharp
// "flagpole" rally, a narrowing pennant consolidation, a breakout, a
// pullback, more chop, then a final rally to the top-right.

function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildCandles() {
  const rand = mulberry32(42); // fixed seed -> identical on server & client
  const candles = [];
  let level = 8;

  function pushCandle(driftMin, driftMax, volMin, volMax) {
    const drift = driftMin + rand() * (driftMax - driftMin);
    const open = level;
    const close = Math.max(open + drift, 1);
    const vol = volMin + rand() * (volMax - volMin);
    const high = Math.max(open, close) + rand() * vol;
    const low = Math.max(Math.min(open, close) - rand() * vol, 0.5);
    candles.push({ o: open, h: high, l: low, c: close });
    level = close;
  }

  // Phase 1: choppy base, mild uptrend
  for (let i = 0; i < 13; i++) pushCandle(-2, 3, 1, 3);
  // Phase 2: flagpole rally
  for (let i = 0; i < 4; i++) pushCandle(4, 9, 1, 2);
  // Phase 3: pennant — range narrows as it goes, slight downward drift
  for (let i = 0; i < 9; i++) {
    const shrink = 1 - i / 12;
    pushCandle(-3 * shrink, 2 * shrink, 1, 2 * shrink + 0.5);
  }
  // Phase 4: breakout rally
  for (let i = 0; i < 4; i++) pushCandle(4, 8, 1, 2);
  // Phase 5: pullback
  pushCandle(-6, -3, 1, 2);
  for (let i = 0; i < 3; i++) pushCandle(-2, 1, 1, 2);
  // Phase 6: choppier consolidation
  for (let i = 0; i < 10; i++) pushCandle(-3, 3, 1, 3);
  // Phase 7: final rally to the top, small chop right at the end
  for (let i = 0; i < 6; i++) pushCandle(3, 7, 1, 2);
  pushCandle(-2, 0, 1, 2);
  pushCandle(1, 3, 1, 2);

  return candles;
}

const candles = buildCandles();
const COLS = candles.length;
const COL_W = 9;
const BODY_W = 6;

const allValues = candles.flatMap((k) => [k.h, k.l]);
const MIN_V = Math.min(...allValues);
const MAX_V = Math.max(...allValues);
const PAD = (MAX_V - MIN_V) * 0.06;
const Y_SCALE = 6; // stretches candle height without widening them
const CHART_W = COLS * COL_W;
const CHART_H = (MAX_V - MIN_V + PAD * 2) * Y_SCALE;

// Values run low->high in "price" terms; invert + scale for SVG y (0 at top).
function y(v) {
  return CHART_H - (v - MIN_V + PAD) * Y_SCALE;
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
        const bodyHeight = Math.max(bodyBottom - bodyTop, 1.2);
        const x = i * COL_W + (COL_W - BODY_W) / 2;

        return (
          <g key={i}>
            <line
              x1={x + BODY_W / 2}
              x2={x + BODY_W / 2}
              y1={y(k.h)}
              y2={y(k.l)}
              stroke={color}
              strokeWidth={1.2}
              opacity={0.9}
            />
            <rect
              x={x}
              y={bodyTop}
              width={BODY_W}
              height={bodyHeight}
              fill={color}
              opacity={0.85}
              rx={0.8}
            />
          </g>
        );
      })}
    </svg>
  );
}

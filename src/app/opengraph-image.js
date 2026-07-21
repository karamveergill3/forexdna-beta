import { ImageResponse } from "next/og";

export const alt = "ForexDNA — Automated Forex Strategy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#060709",
          backgroundImage:
            "radial-gradient(ellipse 60% 60% at 75% 30%, rgba(30,102,255,0.28), rgba(6,7,9,0))",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#5fa0ff",
            marginBottom: 28,
          }}
        >
          Automated Forex Strategy
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 148,
            fontWeight: 800,
            color: "#eef2f8",
            lineHeight: 1,
            letterSpacing: -4,
          }}
        >
          Forex
          <span style={{ color: "#5fa0ff" }}>DNA</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#aeb6c2",
            marginTop: 36,
            maxWidth: 820,
          }}
        >
          Retail access to algorithmic trading on curated FX pairs.
        </div>
      </div>
    ),
    { ...size }
  );
}

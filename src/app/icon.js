import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: 4,
          padding: 12,
          background: "#060709",
          borderRadius: 14,
        }}
      >
        <div style={{ width: 8, height: 22, background: "#e24b4a", borderRadius: 2 }} />
        <div style={{ width: 8, height: 36, background: "#5fa0ff", borderRadius: 2 }} />
        <div style={{ width: 8, height: 16, background: "#1d9e75", borderRadius: 2 }} />
      </div>
    ),
    { ...size }
  );
}

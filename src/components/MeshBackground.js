export default function MeshBackground({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="mesh-blob mesh-blob-1"
        style={{ background: "var(--color-accent)", top: "-8%", left: "2%" }}
      />
      <div
        className="mesh-blob mesh-blob-2"
        style={{ background: "var(--color-high)", top: "15%", right: "-8%" }}
      />
      <div
        className="mesh-blob mesh-blob-3"
        style={{ background: "var(--color-low)", bottom: "-18%", left: "28%" }}
      />
    </div>
  );
}

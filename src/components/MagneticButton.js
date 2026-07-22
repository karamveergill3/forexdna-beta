"use client";

import Link from "next/link";
import { useRef } from "react";

// A button that gently pulls toward the cursor and shows a soft glow that
// follows the pointer — replaces the flat hover state on primary CTAs.
// Falls back to a normal static link with no JS (styling stays intact).
export default function MagneticButton({ href, children, className = "" }) {
  const ref = useRef(null);
  const offset = useRef({ x: 0, y: 0 });
  const pressed = useRef(false);

  function applyTransform() {
    const el = ref.current;
    if (!el) return;
    const scale = pressed.current ? 0.95 : 1;
    el.style.transform = `translate(${offset.current.x}px, ${offset.current.y}px) scale(${scale})`;
  }

  function handleMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    offset.current = {
      x: (x / rect.width - 0.5) * 12,
      y: (y / rect.height - 0.5) * 12 - 2,
    };
    applyTransform();
    el.style.setProperty("--glow-x", `${x}px`);
    el.style.setProperty("--glow-y", `${y}px`);
    el.style.setProperty("--glow-opacity", "1");
  }

  function reset() {
    const el = ref.current;
    if (!el) return;
    offset.current = { x: 0, y: 0 };
    pressed.current = false;
    applyTransform();
    el.style.setProperty("--glow-opacity", "0");
  }

  function handlePressStart() {
    pressed.current = true;
    applyTransform();
  }

  function handlePressEnd() {
    pressed.current = false;
    applyTransform();
  }

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      onMouseDown={handlePressStart}
      onMouseUp={handlePressEnd}
      onTouchStart={handlePressStart}
      onTouchEnd={handlePressEnd}
      className={`relative isolate overflow-hidden ${className}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: "var(--glow-opacity, 0)",
          background:
            "radial-gradient(140px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(255,255,255,0.35), transparent 70%)",
        }}
      />
      <span className="relative">{children}</span>
    </Link>
  );
}

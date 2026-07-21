"use client";

import { useEffect, useState } from "react";

export default function Particles({ count = 22 }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const items = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 1 + Math.random() * 1.8,
      duration: 20 + Math.random() * 24,
      delay: Math.random() * -40,
      driftX: (Math.random() - 0.5) * 70,
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(items);
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle-dot absolute rounded-full bg-accent-2"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            "--drift-x": `${p.driftX}px`,
          }}
        />
      ))}
    </div>
  );
}

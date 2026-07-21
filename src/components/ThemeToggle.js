"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLight(document.documentElement.getAttribute("data-theme") === "light");
  }, []);

  function toggle() {
    const next = !isLight;
    setIsLight(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("forexdna-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("forexdna-theme", "dark");
    }
  }

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm text-text-dim transition hover:border-white/20 hover:text-text"
    >
      <span>{isLight ? "☀️" : "🌙"}</span>
      {isLight ? "Light mode" : "Dark mode"}
    </button>
  );
}

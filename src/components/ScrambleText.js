"use client";

import { useEffect, useRef, useState } from "react";

// Letters only — keeps it reading as "decoding text," not a glitch/noise effect.
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function ScrambleText({
  text,
  className = "",
  startDelay = 0,
  staggerPerChar = 85, // ms between each character's turn — creates the cascade
  settleDuration = 520, // how long each character spends unsettled before locking
  shuffleEvery = 65, // ms between glyph swaps — slower reads as more deliberate
}) {
  const [display, setDisplay] = useState(text);
  const [settled, setSettled] = useState(true);
  const frameRef = useRef(null);

  useEffect(() => {
    const mountTime = performance.now();
    const lastShuffle = new Array(text.length).fill(0);
    const current = text.split("");

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSettled(false);

    function tick(now) {
      const elapsed = now - mountTime;
      let allLocked = true;

      for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
          current[i] = " ";
          continue;
        }
        const lockTime = startDelay + i * staggerPerChar + settleDuration;
        if (elapsed >= lockTime) {
          current[i] = text[i];
          continue;
        }
        allLocked = false;
        if (now - lastShuffle[i] > shuffleEvery) {
          current[i] = CHARS[Math.floor(Math.random() * CHARS.length)];
          lastShuffle[i] = now;
        }
      }

      setDisplay(current.join(""));
      if (!allLocked) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
        setSettled(true);
      }
    }
    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [text, startDelay, staggerPerChar, settleDuration, shuffleEvery]);

  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        filter: settled ? "blur(0px)" : "blur(2.5px)",
        opacity: settled ? 1 : 0.75,
        transition: "filter 0.5s ease-out, opacity 0.5s ease-out",
      }}
    >
      {display}
    </span>
  );
}

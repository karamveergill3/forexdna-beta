"use client";

import { useState } from "react";

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpenIndex(open ? -1 : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="text-lg font-semibold">{item.q}</span>
              <span
                className={`shrink-0 font-mono-tight text-xl text-accent-2 transition-transform ${
                  open ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {open && (
              <p className="max-w-2xl pb-6 text-base leading-relaxed text-text-dim">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

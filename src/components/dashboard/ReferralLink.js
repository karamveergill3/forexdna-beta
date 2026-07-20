"use client";

import { useState } from "react";

export default function ReferralLink({ userId }) {
  const [copied, setCopied] = useState(false);
  const link =
    typeof window !== "undefined"
      ? `${window.location.origin}/signup?ref=${userId.slice(0, 8)}`
      : "";

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — no-op, the link is still selectable.
    }
  }

  return (
    <div className="surface rounded-xl p-6">
      <div className="mb-2 text-sm font-semibold">Invite others</div>
      <p className="mb-4 text-sm text-text-dim">
        Share your link — anyone who signs up through it lands on the same
        waitlist.
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          readOnly
          value={link}
          className="w-full truncate rounded-lg border border-white/10 bg-ink px-4 py-3 font-mono-tight text-sm text-text-dim"
          onFocus={(e) => e.target.select()}
        />
        <button
          onClick={handleCopy}
          className="btn-primary shrink-0 rounded-lg px-5 py-3 text-sm font-semibold text-white"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}

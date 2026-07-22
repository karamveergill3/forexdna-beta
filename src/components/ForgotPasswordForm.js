"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Spinner from "./Spinner";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-ink px-4 py-3.5 text-sm text-text placeholder:text-text-faint outline-none transition focus:border-accent-2/60 focus:ring-1 focus:ring-accent-2/60";

export default function ForgotPasswordForm() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | sent | error
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    // Supabase doesn't reveal whether an email is registered (avoids
    // leaking which addresses have accounts), so we show the same
    // confirmation either way — only a genuine error (e.g. rate limit)
    // surfaces differently.
    if (error) {
      setStatus("error");
      setErrorMessage(error.message);
      return;
    }

    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-accent-2/30 bg-accent/10 p-4 text-sm leading-relaxed text-text">
        If an account exists for <span className="font-semibold">{email}</span>,
        we&rsquo;ve sent a link to reset your password. It&rsquo;ll expire
        shortly, so use it soon after it arrives — and don&rsquo;t forget to
        check your junk or spam folder if it doesn&rsquo;t show up.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs text-text-dim">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>

      {status === "error" && <p className="text-sm text-mid">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary mt-1 flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold tracking-wide text-white disabled:opacity-60"
      >
        {status === "loading" && <Spinner />}
        {status === "loading" ? "Sending…" : "Send reset link"}
      </button>
    </form>
  );
}

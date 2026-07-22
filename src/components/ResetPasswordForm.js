"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import Spinner from "./Spinner";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-ink px-4 py-3.5 text-sm text-text placeholder:text-text-faint outline-none transition focus:border-accent-2/60 focus:ring-1 focus:ring-accent-2/60";

export default function ResetPasswordForm() {
  const router = useRouter();
  const supabase = createClient();

  // checking | ready | invalid | saving | done | error
  const [status, setStatus] = useState("checking");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Clicking the emailed link redirects here with recovery tokens in the
    // URL; supabase-js reads them automatically and fires this event once
    // a temporary recovery session is established.
    const { data: listener } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        setStatus("ready");
      }
    });

    // Fallback in case the event already fired before this listener was
    // attached (e.g. on a fast reload) — a session existing here still
    // means the link was valid.
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        setStatus((s) => (s === "checking" ? "ready" : s));
      } else {
        setStatus((s) => (s === "checking" ? "invalid" : s));
      }
    });

    return () => listener.subscription.unsubscribe();
  }, [supabase]);

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match.");
      return;
    }

    setStatus("saving");

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setStatus("ready");
      setErrorMessage(error.message);
      return;
    }

    setStatus("done");
    setTimeout(() => {
      router.push("/welcome");
      router.refresh();
    }, 1500);
  }

  if (status === "checking") {
    return (
      <div className="flex items-center gap-2 text-sm text-text-dim">
        <Spinner />
        Checking your link…
      </div>
    );
  }

  if (status === "invalid") {
    return (
      <div className="flex flex-col gap-4">
        <div className="rounded-lg border border-mid/30 bg-mid/10 p-4 text-sm leading-relaxed text-text">
          This link is invalid or has expired. Reset links only work once
          and don&rsquo;t stay valid for long.
        </div>
        <Link
          href="/forgot-password"
          className="btn-primary flex items-center justify-center rounded-lg px-6 py-3.5 text-sm font-semibold tracking-wide text-white"
        >
          Request a new link
        </Link>
      </div>
    );
  }

  if (status === "done") {
    return (
      <div className="rounded-lg border border-accent-2/30 bg-accent/10 p-4 text-sm leading-relaxed text-text">
        Password updated. Taking you to your dashboard&hellip;
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="password" className="mb-1.5 block text-xs text-text-dim">
          New password
        </label>
        <input
          id="password"
          type="password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClass}
          placeholder="At least 8 characters"
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="mb-1.5 block text-xs text-text-dim">
          Confirm new password
        </label>
        <input
          id="confirmPassword"
          type="password"
          required
          minLength={8}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={inputClass}
          placeholder="Re-enter your new password"
        />
      </div>

      {errorMessage && <p className="text-sm text-mid">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "saving"}
        className="btn-primary mt-1 flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold tracking-wide text-white disabled:opacity-60"
      >
        {status === "saving" && <Spinner />}
        {status === "saving" ? "Saving…" : "Set new password"}
      </button>
    </form>
  );
}

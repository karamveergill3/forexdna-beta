"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-ink px-4 py-3.5 text-sm text-text placeholder:text-text-faint outline-none transition focus:border-accent-2/60 focus:ring-1 focus:ring-accent-2/60";

export default function SignUpForm() {
  const router = useRouter();
  const supabase = createClient();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | check-email | error
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      setStatus("error");
      setErrorMessage(error.message);
      return;
    }

    // If email confirmation is required, Supabase returns a user but no
    // session yet — the row still lands in the profiles table via trigger.
    if (data.session) {
      router.push("/welcome");
      router.refresh();
    } else {
      setStatus("check-email");
    }
  }

  if (status === "check-email") {
    return (
      <div className="rounded-lg border border-accent-2/30 bg-accent/10 p-5 text-sm leading-relaxed text-text">
        Check <span className="font-semibold">{email}</span> for a
        confirmation link to finish setting up your account.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="fullName" className="mb-1.5 block text-xs text-text-dim">
          Full name
        </label>
        <input
          id="fullName"
          type="text"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={inputClass}
          placeholder="Jane Trader"
        />
      </div>

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

      <div>
        <label htmlFor="password" className="mb-1.5 block text-xs text-text-dim">
          Password
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

      {status === "error" && (
        <p className="text-sm text-mid">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary mt-3 rounded-lg px-6 py-3.5 text-sm font-semibold tracking-wide text-white disabled:opacity-60"
      >
        {status === "loading" ? "Creating account…" : "Request access"}
      </button>
    </form>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Spinner from "./Spinner";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-ink px-4 py-3.5 text-sm text-text placeholder:text-text-faint outline-none transition focus:border-accent-2/60 focus:ring-1 focus:ring-accent-2/60";

export default function SignUpForm() {
  const router = useRouter();
  const supabase = createClient();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | verify | verifying | error | resent
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
      setStatus("verify");
    }
  }

  async function handleVerify(e) {
    e.preventDefault();
    setStatus("verifying");
    setErrorMessage("");

    const { error } = await supabase.auth.verifyOtp({
      email,
      token: code,
      type: "signup",
    });

    if (error) {
      setStatus("verify");
      setErrorMessage(error.message);
      return;
    }

    router.push("/welcome");
    router.refresh();
  }

  async function handleResend() {
    setErrorMessage("");
    const { error } = await supabase.auth.resend({ type: "signup", email });
    setErrorMessage(error ? error.message : "New code sent.");
  }

  if (status === "verify" || status === "verifying") {
    return (
      <form onSubmit={handleVerify} className="flex flex-col gap-4">
        <div className="rounded-lg border border-accent-2/30 bg-accent/10 p-4 text-sm leading-relaxed text-text">
          We sent a code to <span className="font-semibold">{email}</span>.
          Enter it below to finish setting up your account.
        </div>

        <p className="text-xs text-text-dim">
          Don&rsquo;t see it? Check your junk or spam folder — it can sometimes land there.
        </p>

        <div>
          <label htmlFor="code" className="mb-1.5 block text-xs text-text-dim">
            Verification code
          </label>
          <input
            id="code"
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            required
            maxLength={8}
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
            className={`${inputClass} text-center text-xl tracking-[0.3em]`}
            placeholder="00000000"
          />
        </div>

        {errorMessage && <p className="text-sm text-mid">{errorMessage}</p>}

        <button
          type="submit"
          disabled={status === "verifying" || code.length !== 8}
          className="btn-primary mt-1 flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold tracking-wide text-white disabled:opacity-60"
        >
          {status === "verifying" && <Spinner />}
          {status === "verifying" ? "Verifying…" : "Verify and continue"}
        </button>

        <button
          type="button"
          onClick={handleResend}
          className="text-sm text-text-dim hover:text-accent-2"
        >
          Resend code
        </button>
      </form>
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
        className="btn-primary mt-3 flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold tracking-wide text-white disabled:opacity-60"
      >
        {status === "loading" && <Spinner />}
        {status === "loading" ? "Creating account…" : "Sign up"}
      </button>
    </form>
  );
}

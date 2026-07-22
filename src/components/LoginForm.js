"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import Spinner from "./Spinner";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-ink px-4 py-3.5 text-sm text-text placeholder:text-text-faint outline-none transition focus:border-accent-2/60 focus:ring-1 focus:ring-accent-2/60";

export default function LoginForm() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setLoading(false);
      setErrorMessage(error.message);
      return;
    }

    router.push("/welcome");
    router.refresh();
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

      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label htmlFor="password" className="block text-xs text-text-dim">
            Password
          </label>
          <Link href="/forgot-password" className="text-xs text-accent-2 hover:underline">
            Forgot password?
          </Link>
        </div>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClass}
          placeholder="••••••••"
        />
      </div>

      {errorMessage && <p className="text-sm text-mid">{errorMessage}</p>}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary mt-3 flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold tracking-wide text-white disabled:opacity-60"
      >
        {loading && <Spinner />}
        {loading ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}

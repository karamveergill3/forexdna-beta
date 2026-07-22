"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-ink px-4 py-3.5 text-sm text-text placeholder:text-text-faint outline-none transition focus:border-accent-2/60 focus:ring-1 focus:ring-accent-2/60";

export default function AccountSettingsForm({ initialName, email, memberSince }) {
  const supabase = createClient();

  const [fullName, setFullName] = useState(initialName || "");
  const [nameStatus, setNameStatus] = useState("idle");
  const [nameError, setNameError] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStatus, setPasswordStatus] = useState("idle");
  const [passwordError, setPasswordError] = useState("");

  async function handleNameSubmit(e) {
    e.preventDefault();
    setNameStatus("loading");
    setNameError("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase
      .from("profiles")
      .update({ full_name: fullName })
      .eq("id", user.id);

    if (error) {
      setNameStatus("error");
      setNameError(error.message);
      return;
    }
    setNameStatus("saved");
    setTimeout(() => setNameStatus("idle"), 2000);
  }

  async function handlePasswordSubmit(e) {
    e.preventDefault();
    setPasswordError("");

    if (password !== confirmPassword) {
      setPasswordError("New passwords don't match.");
      return;
    }

    setPasswordStatus("loading");

    // Re-prove identity with the current password before changing anything —
    // a valid session alone isn't enough for a sensitive action like this.
    const { error: verifyError } = await supabase.auth.signInWithPassword({
      email,
      password: currentPassword,
    });

    if (verifyError) {
      setPasswordStatus("error");
      setPasswordError("Current password is incorrect.");
      return;
    }

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setPasswordStatus("error");
      setPasswordError(error.message);
      return;
    }

    // Log out any other devices/browsers that were signed in, since the
    // password just changed. Keeps this current session active.
    await supabase.auth.signOut({ scope: "others" });

    setCurrentPassword("");
    setPassword("");
    setConfirmPassword("");
    setPasswordStatus("saved");
    setTimeout(() => setPasswordStatus("idle"), 2000);
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="surface rounded-xl p-6">
        <div className="mb-4 text-sm font-semibold">Profile</div>
        <form onSubmit={handleNameSubmit} className="flex flex-col gap-4">
          <div>
            <label className="mb-1.5 block text-xs text-text-dim">Email</label>
            <input
              disabled
              value={email}
              className={`${inputClass} cursor-not-allowed opacity-60`}
            />
          </div>
          {memberSince && (
            <p className="-mt-2 text-xs text-text-faint">
              Member since {memberSince}
            </p>
          )}
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
            />
          </div>
          {nameStatus === "error" && <p className="text-sm text-mid">{nameError}</p>}
          <button
            type="submit"
            disabled={nameStatus === "loading"}
            className="btn-primary self-start rounded-lg px-6 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
          >
            {nameStatus === "loading" ? "Saving…" : nameStatus === "saved" ? "Saved" : "Save name"}
          </button>
        </form>
      </div>

      <div className="surface rounded-xl p-6">
        <div className="mb-4 text-sm font-semibold">Password</div>
        <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="currentPassword" className="mb-1.5 block text-xs text-text-dim">
              Current password
            </label>
            <input
              id="currentPassword"
              type="password"
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className={inputClass}
              placeholder="Enter your current password"
            />
          </div>
          <div>
            <label htmlFor="newPassword" className="mb-1.5 block text-xs text-text-dim">
              New password
            </label>
            <input
              id="newPassword"
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
            <label htmlFor="confirmNewPassword" className="mb-1.5 block text-xs text-text-dim">
              Confirm new password
            </label>
            <input
              id="confirmNewPassword"
              type="password"
              required
              minLength={8}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={inputClass}
              placeholder="Re-enter your new password"
            />
          </div>
          {passwordStatus === "error" && (
            <p className="text-sm text-mid">{passwordError}</p>
          )}
          <button
            type="submit"
            disabled={passwordStatus === "loading"}
            className="btn-primary self-start rounded-lg px-6 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
          >
            {passwordStatus === "loading"
              ? "Updating…"
              : passwordStatus === "saved"
              ? "Updated"
              : "Update password"}
          </button>
        </form>
      </div>
    </div>
  );
}

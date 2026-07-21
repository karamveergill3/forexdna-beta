"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function DangerZone() {
  const router = useRouter();
  const supabase = createClient();

  const [signOutStatus, setSignOutStatus] = useState("idle");

  const [confirmText, setConfirmText] = useState("");
  const [deleteStatus, setDeleteStatus] = useState("idle");
  const [deleteError, setDeleteError] = useState("");

  async function handleSignOutAll() {
    setSignOutStatus("loading");
    await supabase.auth.signOut({ scope: "global" });
    router.push("/");
    router.refresh();
  }

  async function handleDelete() {
    setDeleteStatus("loading");
    setDeleteError("");

    const res = await fetch("/api/delete-account", { method: "POST" });
    const data = await res.json();

    if (!res.ok) {
      setDeleteStatus("error");
      setDeleteError(data.error || "Something went wrong.");
      return;
    }

    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="surface rounded-xl p-6">
        <div className="mb-2 text-sm font-semibold">Sessions</div>
        <p className="mb-4 text-sm text-text-dim">
          Sign out everywhere this account is currently logged in — useful if
          you think someone else has access.
        </p>
        <button
          onClick={handleSignOutAll}
          disabled={signOutStatus === "loading"}
          className="rounded-lg border border-white/10 px-5 py-2.5 text-sm text-text-dim transition hover:border-white/20 hover:text-text disabled:opacity-60"
        >
          {signOutStatus === "loading" ? "Signing out…" : "Sign out of all devices"}
        </button>
      </div>

      <div className="rounded-xl border border-mid/30 bg-mid/5 p-6">
        <div className="mb-2 text-sm font-semibold text-mid">Danger zone</div>
        <p className="mb-4 text-sm text-text-dim">
          Permanently deletes your account and profile data. This
          can&rsquo;t be undone.
        </p>
        <label className="mb-2 block text-xs text-text-dim">
          Type <span className="font-mono-tight text-text">DELETE</span> to confirm
        </label>
        <input
          value={confirmText}
          onChange={(e) => setConfirmText(e.target.value)}
          className="mb-3 w-full max-w-xs rounded-lg border border-white/10 bg-ink px-4 py-2.5 text-sm text-text outline-none focus:border-mid/60 focus:ring-1 focus:ring-mid/60"
          placeholder="DELETE"
        />
        {deleteStatus === "error" && (
          <p className="mb-3 text-sm text-mid">{deleteError}</p>
        )}
        <button
          onClick={handleDelete}
          disabled={confirmText !== "DELETE" || deleteStatus === "loading"}
          className="rounded-lg bg-mid px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {deleteStatus === "loading" ? "Deleting…" : "Delete my account"}
        </button>
      </div>
    </div>
  );
}

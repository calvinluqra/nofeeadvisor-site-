"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import Turnstile from "react-turnstile";

export default function UploadForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!turnstileToken) {
      setStatus("Please complete the security check");
      return;
    }

    setLoading(true);
    setStatus("Sending…");

    const formData = new FormData(e.currentTarget);
    formData.append("cf-turnstile-response", turnstileToken);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setStatus("✅ Sent! Check your email.");
      (e.target as HTMLFormElement).reset();
      setTurnstileToken(null);
    } else {
      setStatus("❌ Error — try again.");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y g-6">
      <input name="name" placeholder="Full Name *" required className="w-full px-4 py-3 border rounded-lg" />
      <input name="email" type="email" placeholder="Email *" required className="w-full px-4 py-3 border rounded-lg" />
      <input name="phone" placeholder="Phone (optional)" className="w-full px-4 py-3 border rounded-lg" />
      <textarea name="message" rows={4} placeholder="Message (optional)" className="w-full px-4 py-3 border rounded-lg" />

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center">
        <input
          type="file"
          name="files"
          multiple
          accept=".pdf,.jpg,.jpeg,.png"
          className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
        />
        <p className="mt-2 text-xs text-gray-500">PDF, JPG, PNG — up to 25 MB total</p>
      </div>

      {/* TURNSITLE — INVISIBLE */}
      <div className="flex justify-center my-6">
        <Turnstile
          sitekey="0x4AAAAAACFJ9Ypa9e5m-Qii"   // ← replace with your real key
          onVerify={(token) => setTurnstileToken(token)}
          onError={() => setStatus("Security check failed — try again")}
          onExpire={() => setTurnstileToken(null)}
        />
      </div>

      <button
        disabled={loading || !turnstileToken}
        className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {loading && <Loader2 className="animate-spin" />}
        Send Statement
      </button>

      {status && <p className="text-center font-medium">{status}</p>}
    </form>
  );
}

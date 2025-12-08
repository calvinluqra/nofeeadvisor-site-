"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function UploadForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending…");

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setStatus("Sent! Redirecting…");
      (e.target as HTMLFormElement).reset();
      window.location.href = "/thanks";
    } else {
      setStatus("Error — try again.");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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

      {/* TRUST DISCLAIMERS */}
      <div className="text-center space-y-2">
        <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
          </svg>
          Your statements are encrypted and automatically deleted after 30 days
        </p>
        <p className="text-sm text-gray-500">
          Zero spam • We only email you your custom bids • Unsubscribe any time
        </p>
      </div>

      <button
        disabled={loading}
        className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {loading && <Loader2 className="animate-spin" />}
        Send Statement
      </button>

      {status && <p className="text-center font-medium">{status}</p>}
    </form>
  );
}

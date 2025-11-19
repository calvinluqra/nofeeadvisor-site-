"use client";

import { useState } from "react";
import { put } from "@vercel/blob";
import { Loader2 } from "lucide-react";

export default function UploadForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Uploading files…");

    const formData = new FormData(e.currentTarget);
    const files = formData.getAll("files") as File[];

    const uploadedUrls = [];
    for (const file of files) {
      if (file.size === 0) continue;
      const { url } = await put(`uploads/${file.name}`, file, { access: "public" });
      uploadedUrls.push(url);
    }

    // Send email via Resend
    const res = await fetch("/api/contact", { method: "POST", body: formData });
    if (res.ok) {
      setStatus("Sent! You’ll receive an email shortly.");
      (e.target as HTMLFormElement).reset();
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
      
      <input type="file" name="files" multiple accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" className="block w-full text-sm" />
      
      <button disabled={loading} className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2">
        {loading && <Loader2 className="animate-spin" />}
        Send Message & Files
      </button>
      {status && <p className="text-center font-medium">{status}</p>}
    </form>
  );
}

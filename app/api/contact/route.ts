import { NextRequest } from "next/server";
import { put } from "@vercel/blob";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();

    // TURNSTILE VERIFICATION
    const token = formData.get("cf-turnstile-response") as string;
    if (!token) {
      return new Response("Missing security check", { status: 400 });
    }

    const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
      headers: { "Content-Type": "application/json" },
    });

    const result = await verify.json();
    if (!result.success) {
      return new Response("Security check failed", { status: 400 });
    }

    // Your existing code (unchanged)
    const name = formData.get("name")?.toString() || "Anonymous";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    const files = formData.getAll("files") as File[];

    const uploaded: string[] = [];
    for (const file of files) {
      if (file.size === 0) continue;
      const { url } = await put(`leads/${Date.now()}-${file.name}`, file, { access: "public" });
      uploaded.push(url);
    }

    await resend.emails.send({
      from: "No Fee Advisor <onboarding@resend.dev>",
      to: ["calvin@partnerwithluqra.com"],
      subject: `New Lead – ${name}`,
      html: `<h2>New Lead – ${name}</h2><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone || "—"}</p><p><strong>Message:</strong> ${message || "—"}</p>${uploaded.length ? `<p>Files: ${uploaded.map(u => `<a href="${u}">${u.split("/").pop()}</a>`).join("<br>")}</p>` : ""}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return new Response("Server error", { status: 500 });
  }
};

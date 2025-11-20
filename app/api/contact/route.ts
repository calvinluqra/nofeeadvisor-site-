import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();

    const name = formData.get("name")?.toString() || "Anonymous";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    const files = formData.getAll("files") as File[];

    // Upload files to Vercel Blob
    const uploaded: string[] = [];
    for (const file of files) {
      if (file.size === 0) continue;
      const { url } = await put(`leads/${Date.now()}-${file.name}`, file, { access: "public" });
      uploaded.push(url);
    }

    // Send email with ALL fields
    await resend.emails.send({
      from: "No Fee Advisor <onboarding@resend.dev>",
      to: ["calvin@partnerwithluqra.com"], // ← change back to process.env.NOTIFICATION_EMAIL later if you want
      subject: `New Lead – ${name}`,
      html: `
        <h2>New Lead – ${name}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "— (not provided)"}</p>
        <p><strong>Message:</strong><br>${message ? message.replace(/\n/g, "<br>") : "— (no message)"}</p>
        ${
          uploaded.length > 0
            ? `<p><strong>Files attached (${uploaded.length}):</strong></p>
               <ul>${uploaded.map(u => `<li><a href="${u}">Download ${u.split("/").pop()}</a></li>`).join("")}</ul>`
            : "<p><strong>No files attached</strong></p>"
        }
        <hr><small>Sent: ${new Date().toLocaleString()}</small>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("API route error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
};

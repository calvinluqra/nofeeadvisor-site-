import { NextRequest } from "next/server";
import { put } from "@vercel/blob";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const name = formData.get("name")?.toString() || "No name";
    const email = formData.get("email")?.toString() || "No email";
    const phone = formData.get("phone")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    const files = formData.getAll("files") as File[];

    // Upload files to Vercel Blob
    const uploaded: string[] = [];
    for (const file of files) {
      if (file.size === 0) continue;
      const { url } = await put(`leads/${Date.now()}-${file.name}`, file, {
        access: "public",
      });
      uploaded.push(url);
    }

    // Send email with download links
    await resend.emails.send({
      from: "No Fee Advisor <<anything>@tiecoreofg.resend.app>",
      to: [process.env.NOTIFICATION_EMAIL!],
      subject: `New Lead – ${name}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "—"}</p>
        <p><strong>Message:</strong> ${message || "—"}</p>
        ${uploaded.length > 0 ? `<p><strong>Files (${uploaded.length}):</strong></p><ul>${uploaded.map(u => `<li><a href="${u}">Download ${u.split("/").pop()}</a></li>`).join("")}</ul>` : "<p>No files uploaded</p>"}
        <hr><small>Sent ${new Date().toLocaleString()}</small>
      `,
    });

    return Response.json({ success: true });
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
};

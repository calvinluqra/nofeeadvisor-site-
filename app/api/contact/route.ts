import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req: NextRequest) => {
  console.log("API route hit – starting processing");
  console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);
  console.log("NOTIFICATION_EMAIL:", process.env.NOTIFICATION_EMAIL);

  try {
    const formData = await req.formData();
    const name = formData.get("name")?.toString() || "Anonymous";
    const email = formData.get("email")?.toString() || "";
    const files = formData.getAll("files") as File[];

    // Upload files
    const uploaded: string[] = [];
    for (const file of files) {
      if (file.size === 0) continue;
      const { url } = await put(`leads/${Date.now()}-${file.name}`, file, { access: "public" });
      uploaded.push(url);
    }

    // Send email
    const result = await resend.emails.send({
      from: "No Fee Advisor <onboarding@resend.dev>",
      to: [process.env.NOTIFICATION_EMAIL || "calvin@partnerwithluqra.com"],
      subject: `New Lead – ${name}`,
      html: `
        <h2>New submission!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Files:</strong> ${uploaded.length}</p>
        <ul>${uploaded.map(u => `<li><a href="${u}">Download ${u.split("/").pop()}</a></li>`).join("")}</ul>
      `,
    });

    console.log("Resend success:", result);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("FULL ERROR IN API ROUTE:", error);
    return NextResponse.json({ error: error.message || "Failed" }, { status: 500 });
  }
};

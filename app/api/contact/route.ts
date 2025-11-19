import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const name = form.get("name")?.toString() || "";
  const email = form.get("email")?.toString() || "";
  const phone = form.get("phone")?.toString() || "";
  const message = form.get("message")?.toString() || "";

  await resend.emails.send({
    from: "No Fee Advisor <no-reply@nofeeadvisor.site>",
    to: [process.env.NOTIFICATION_EMAIL || "calvin@partnerwithluqra.com"],
    subject: `New Lead – ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  });

  return Response.json({ success: true });
}

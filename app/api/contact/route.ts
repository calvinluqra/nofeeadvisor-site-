export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();

    // VERIFY TURNSTILE
    const turnstileToken = formData.get("cf-turnstile-response") as string;
    if (turnstileToken) {
      const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      });
      const verifyData = await verifyRes.json();
      if (!verifyData.success) {
        return new Response("Security check failed — try again", { status: 400 });
      }
    } else {
      return new Response("Security check required", { status: 400 });
    }

    // Your existing code (name, email, phone, message, files)
    const name = formData.get("name")?.toString() || "Anonymous";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    const files = formData.getAll("files") as File[];

    // Upload files
    const uploaded: string[] = [];
    for (const file of files) {
      if (file.size === 0) continue;
      const { url } = await put(`leads/${Date.now()}-${file.name}`, file, { access: "public" });
      uploaded.push(url);
    }

    // Send email
    await resend.emails.send({
      from: "No Fee Advisor <onboarding@resend.dev>",
      to: ["calvin@partnerwithluqra.com"],
      subject: `New Lead – ${name}`,
      html: `
        <h2>New Lead – ${name}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "—"}</p>
        <p><strong>Message:</strong><br>${message || "—"}</p>
        ${uploaded.length > 0 ? `<p><strong>Files (${uploaded.length}):</strong></p><ul>${uploaded.map(u => `<li><a href="${u}">Download ${u.split("/").pop()}</a></li>`).join("")}</ul>` : "<p>No files</p>"}
      `,
    });

    return Response.json({ success: true });
  } catch (error: any) {
    console.error("API route error:", error);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
};

import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const contentType = req.headers.get("content-type") || "";

    let fields = {};
    let attachments = [];

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();

      const rawFields = formData.get("fields");
      fields = rawFields ? JSON.parse(rawFields) : {};

      const files = formData.getAll("attachments");

      attachments = await Promise.all(
        files
          .filter((file) => file && file.size > 0)
          .map(async (file) => {
            const buffer = Buffer.from(await file.arrayBuffer());

            return {
              filename: file.name,
              content: buffer,
              contentType: file.type,
            };
          })
      );
    } else {
      fields = await req.json();
    }

    const htmlFields = Object.entries(fields)
      .map(
        ([key, value]) => `
          <p>
            <strong>${key}:</strong> ${
          Array.isArray(value) ? value.join(", ") : value || "-"
        }
          </p>
        `
      )
      .join("");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Spareon Website Enquiry" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: fields.Subject || fields.subject || "Spareon Website Query",
      html: `
        <h2>New Enquiry Received</h2>
        ${htmlFields}
      `,
      attachments,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email Error:", error);

    return Response.json(
      { success: false, message: "Email failed" },
      { status: 500 }
    );
  }
}
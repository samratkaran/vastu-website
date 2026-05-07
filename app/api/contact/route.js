import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, phone, email, service, message } = body;

    // Gmail Transport
    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: "karan@ebaseinfra.com",
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send Mail
    await transporter.sendMail({
      from: "karan@ebaseinfra.com",

      to: "info@ebaseinfra.com",

      subject: service,

      html: `
        <div style="
          max-width:600px;
          margin:auto;
          font-family:Arial,sans-serif;
          border:1px solid #e5e5e5;
          border-radius:10px;
          overflow:hidden;
        ">

          <div style="
            background:#111827;
            padding:20px;
            text-align:center;
            color:white;
          ">
            <h2 style="margin:0;">
              New Website Inquiry
            </h2>
          </div>

          <div style="padding:25px;">

            <table style="
              width:100%;
              border-collapse:collapse;
            ">

              <tr>
                <td style="
                  padding:12px;
                  border:1px solid #ddd;
                  font-weight:bold;
                  width:30%;
                ">
                  Name
                </td>

                <td style="
                  padding:12px;
                  border:1px solid #ddd;
                ">
                  ${name}
                </td>
              </tr>

              <tr>
                <td style="
                  padding:12px;
                  border:1px solid #ddd;
                  font-weight:bold;
                ">
                  Phone
                </td>

                <td style="
                  padding:12px;
                  border:1px solid #ddd;
                ">
                  ${phone}
                </td>
              </tr>

              <tr>
                <td style="
                  padding:12px;
                  border:1px solid #ddd;
                  font-weight:bold;
                ">
                  Email
                </td>

                <td style="
                  padding:12px;
                  border:1px solid #ddd;
                ">
                  ${email}
                </td>
              </tr>

              <tr>
                <td style="
                  padding:12px;
                  border:1px solid #ddd;
                  font-weight:bold;
                ">
                  Service
                </td>

                <td style="
                  padding:12px;
                  border:1px solid #ddd;
                ">
                  ${service}
                </td>
              </tr>

              <tr>
                <td style="
                  padding:12px;
                  border:1px solid #ddd;
                  font-weight:bold;
                ">
                  Message
                </td>

                <td style="
                  padding:12px;
                  border:1px solid #ddd;
                ">
                  ${message}
                </td>
              </tr>

            </table>

          </div>
        </div>
      `,
    });

    return Response.json({
      success: true,
    });

  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
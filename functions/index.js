/* eslint-env node */
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

// Ensure these environments are set up in Firebase or use default string fallback for testing.
// Since you successfully hardcoded your app password, we will use it!
const gmailEmail = "brifusolutions@gmail.com";
const gmailPassword = "mbow dtsw sqtz bopl";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.sendEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // Only accept POST requests
    if (req.method !== "POST") {
      return res.status(405).send({ success: false, error: "Method Not Allowed" });
    }

    const { name, email, phone, subject, message } = req.body;

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "brifusolutions@gmail.com",
      subject: `New Contact Form Submission: ${subject || "No Subject"}`,
      text: `Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}

Message:
${message}`,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).send({ success: false, error: error.toString() });
      }
      return res.status(200).send({ success: true, message: "Email sent successfully" });
    });
  });
});

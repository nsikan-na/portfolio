const sgMail = require("@sendgrid/mail");
import type { NextApiRequest, NextApiResponse } from "next";

sgMail.setApiKey(process.env.EMAIL_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //handles the contact form submission
  if (req.method === "POST") {
    try {
      const data = req.body;
      const {
        name,
        email,
        message,
      }: { name: string; email: string; message: string } = JSON.parse(
        JSON.stringify(data)
      );
      if (!name || !email || !message) {
        return res.json({
          success: false,
          message: "Please complete all fields!",
        });
      }
      const msg = {
        to: "nsikan.na@gmail.com",
        from: "nsikan.na@gmail.com",
        subject: "Message from Portfolio Site",
        html: `
        <h1>From ${name},</h1>
        <h3>${email}</h3>
        <h4>${message}</h4>`,
      };
      await sgMail.send(msg);
      return res.json({ success: true });
    } catch (err: any) {
      console.log(err);
    }
  }
}

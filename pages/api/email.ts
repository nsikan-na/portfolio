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
        to: process.env.SEND_TO_EMAIL,
        from: process.env.SEND_FROM_EMAIL,
        subject: "Message from Nsikan's Portfolio Site",
        html: `
        <h1>From ${name},</h1>    
        <h2>Message</h2>
        <p>${message}</p>
        <div style='display:flex;'>
        <h4>Email: </h4>
        <h5 style='margin-left:1rem'>${email}<h5>
        </div>
    `,
      };
      await sgMail.send(msg);
      return res.json({ success: true });
    } catch (err: any) {
      console.log(err);
    }
  }
}

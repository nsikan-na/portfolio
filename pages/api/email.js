const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.EMAIL_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      const { name, email, message } = JSON.parse(data);

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
      sgMail.send(msg);
      return res.json({ success: true });
    } catch (error) {
      console.log(error.message);
    }
  }
}

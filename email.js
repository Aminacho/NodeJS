const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "sntp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "gmcws2023@gmail.com",
    pass: "aolx krft mowt ehsw",
  },
});

const mailOptions = {
  from: "gmcws2023@gmail.com",
  to: "aminachorfi@gmail.com",
  subject: "Exemple of NodeMailer",
  Text: "This is a test email",
};
transporter.sendMail(mailOptions, (err, info) => {
  if (error) {
    console.error("error sending email: ", error);
  } else {
    console.log("Email sent: ", info.response);
  }
});

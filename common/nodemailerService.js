const transporter = require("../config/nodemailer");

const sendEmail = async (email, subject, text) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject,
      text,
    });
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = sendEmail;

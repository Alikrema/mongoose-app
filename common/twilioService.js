const twilio = require("twilio");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

const sendSMS = async (message, to) => {
  try {
    await client.messages.create({
      body: message,
      to: to,
      from: process.env.TWILIO_PHONE_NUMBER,
    });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = sendSMS;

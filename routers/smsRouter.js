const router = require("express").Router();
const jsend = require("jsend");

const sendSMS = require("../common/twilioService");

router.post("/send", async (req, res, next) => {
  try {
    const { message, to } = req.body;
    await sendSMS(message, to);
    res.json(jsend.success({ message: "SMS sent successfully" }));
  } catch (err) {
    next(err);
  }
});

module.exports = router;

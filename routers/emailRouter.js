const router = require("express").Router();
const jsend = require("jsend");
const sendEmail = require("../common/nodemailerService");

router.post("/send", async (req, res, next) => {
  try {
    const { email, subject, text } = req.body;
    await sendEmail(email, subject, text);
    res.json(jsend.success({ message: "Email sent successfully" }));
  } catch (err) {
    next(err);
  }
});

module.exports = router;

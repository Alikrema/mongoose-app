const { body } = require("express-validator");

const signupValidator = [
  body("username").isString().withMessage("AAAAAAAAAAAAAAA"),
  body("email").isEmail(),
  body("password").isLength({ min: 8 }),
];

const loginValidator = [
  body("email").isEmail(),
  body("password").isLength({ min: 8 }),
];

module.exports = {
  signupValidator,
  loginValidator,
};

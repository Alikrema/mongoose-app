const { body } = require("express-validator");

const createUserValidationRules = () => {
  return [
    body("username")
      .isLength({ min: 5 })
      .withMessage("Username must be at least 5 characters long")
      .trim()
      .escape(),
    body("email").isEmail().withMessage("Enter a valid email").normalizeEmail(),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
      .trim()
      .escape(),
  ];
};

const updateUserValidationRules = () => {
  return [
    body("username")
      .optional()
      .isLength({ min: 5 })
      .withMessage("Username must be at least 5 characters long")
      .trim()
      .escape(),
    body("email")
      .optional()
      .isEmail()
      .withMessage("Enter a valid email")
      .normalizeEmail(),
    body("password")
      .optional()
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
      .trim()
      .escape(),
  ];
};

module.exports = {
  createUserValidationRules,
  updateUserValidationRules,
};

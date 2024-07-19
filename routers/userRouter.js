const router = require("express").Router();
const userController = require("../controllers/userController");
const {
  createUserValidationRules,
  updateUserValidationRules,
} = require("../validations/userValidators");
const auth = require("../middleware/auth");

router.get("/", auth, userController.getUsers);

router.get("/:id", auth, userController.getUserById);

router.delete("/:id", auth, userController.deleteUser);

router.put(
  "/:id",
  auth,
  updateUserValidationRules(),
  userController.updateUser
);

router.post("/login", userController.login);

router.post("/signup", createUserValidationRules(), userController.signup);

module.exports = router;

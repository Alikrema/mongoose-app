const router = require("express").Router();
const userController = require("../controllers/userController");
const auth = require("../middleware/auth");
const {
  loginValidator,
  signupValidator,
} = require("../validations/userValidators");

router.get("/", auth, userController.getUsers);

router.get("/:id", userController.getUserById);

router.delete("/:id", userController.deleteUser);

router.put("/:id", userController.updateUser);

router.post("/login", loginValidator, userController.login);

router.post("/signup", signupValidator, userController.signup);

module.exports = router;

const router = require("express").Router();
const userController = require("../controllers/userController");
const {
  createUserValidationRules,
  updateUserValidationRules,
} = require("../validations/userValidators");

router.get("/", userController.getUsers);

router.get("/:id", userController.getUserById);

router.post("/", createUserValidationRules(), userController.createUser);

router.delete("/:id", userController.deleteUser);

router.put("/:id", updateUserValidationRules(), userController.updateUser);

router.post("/login", userController.login);

module.exports = router;

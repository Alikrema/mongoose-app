const router = require("express").Router();
const userController = require("../controllers/userController");

router.get("/", userController.getUsers);

router.get("/:id", userController.getUserById);

router.delete("/:id", userController.deleteUser);

router.put("/:id", userController.updateUser);

router.post("/login", userController.login);

router.post("/signup", userController.signup);

module.exports = router;

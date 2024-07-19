const router = require("express").Router();
const userController = require("../controllers/userController");

router.get("/", userController.getUsers);

router.get("/:id", userController.getUserById);

router.post("/", userController.createUser);

router.delete("/:id", userController.deleteUser);

router.put("/:id", userController.updateUser);

module.exports = router;

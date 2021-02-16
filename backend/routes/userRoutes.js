const { Router } = require("express");
const userController = require("../controllers/userController");

const router = Router();

router.put("/user", userController.updateUser);
router.delete("/user", userController.deleteUser);
router.get("/user", userController.getUser);

module.exports = router;

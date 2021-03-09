const { Router } = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = Router();

router.put("/user", authMiddleware, userController.updateUser);
router.delete("/user", authMiddleware, userController.deleteUser);
router.get("/user", authMiddleware, userController.getUser);

module.exports = router;

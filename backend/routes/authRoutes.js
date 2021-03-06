const { Router } = require("express");

const router = Router();

const authController = require("../controllers/authController");

router.post("/auth/login", authController.login);
router.post("/auth/signup", authController.signup);

module.exports = router;

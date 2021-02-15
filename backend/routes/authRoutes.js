const { Router } = require("express");

const router = Router();

const authController = require("../controllers/authController");

router.post("/user/login", authController.login);
router.post("/user/signup", authController.signup);

module.exports = router;

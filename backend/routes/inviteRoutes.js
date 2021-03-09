const { Router } = require("express");

const router = Router();
const inviteController = require("../controllers/inviteController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/invite", authMiddleware, inviteController.sentInvite);

module.exports = router;

const { Router } = require("express");

const router = Router();
const inviteController = require("../controllers/inviteController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/invite", authMiddleware, inviteController.sentInvite);
router.get("/invite", authMiddleware, inviteController.getAllInvites);
router.delete("/invite", authMiddleware, inviteController.deleteInvite);

module.exports = router;

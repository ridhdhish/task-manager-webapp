const { Router } = require("express");

const router = Router();
const inviteController = require("../controllers/inviteController");

router.post("/invite", inviteController.sentInvite);

module.exports = router;

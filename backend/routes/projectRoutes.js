const { Router } = require("express");
const router = Router();

const projectController = require("../controllers/projectController");

router.post("/project/create", projectController.createProject);
router.post("/project/addMember", projectController.addMember);
router.delete("/project/deleteProject", projectController.deleteProject);
router.delete("/project/deleteAllProject", projectController.deleteAllProject);

module.exports = router;

const { Router } = require("express");
const router = Router();

const projectController = require("../controllers/projectController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/project/create", authMiddleware, projectController.createProject);
router.post("/project/addMember", authMiddleware, projectController.addMember);
router.delete(
  "/project/deleteProject/:id",
  authMiddleware,
  projectController.deleteProject
);
router.delete(
  "/project/deleteAllProject",
  authMiddleware,
  projectController.deleteAllProject
);
router.get(
  "/project/getAllProject",
  authMiddleware,
  projectController.getAllProject
);
router.get(
  "/project/latest",
  authMiddleware,
  projectController.getLatestProject
);

module.exports = router;

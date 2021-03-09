const { Router } = require("express");
const taskController = require("../controllers/taskController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = Router();

router.post("/task/create", authMiddleware, taskController.createTask);
router.get("/task", authMiddleware, taskController.getAllTask);
router.get("/task/:id", authMiddleware, taskController.getTask);
router.put("/task/:id", authMiddleware, taskController.updateTask);
router.delete("/task", authMiddleware, taskController.deleteAllTask);
router.delete("/task/:id", authMiddleware, taskController.deleteTask);

module.exports = router;

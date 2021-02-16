const { Router } = require("express");
const taskController = require("../controllers/taskController");

const router = Router();

router.post("/task/create", taskController.createTask);
router.get("/task", taskController.getAllTask);
router.get("/task/:id", taskController.getTask);
router.put("/task/:id", taskController.updateTask);
router.delete("/task", taskController.deleteAllTask);
router.delete("/task/:id", taskController.deleteTask);

module.exports = router;

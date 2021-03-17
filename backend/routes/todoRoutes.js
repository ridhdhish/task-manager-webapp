const { Router } = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const todoController = require("../controllers/todoController");

const router = Router();

router.post("/todo", authMiddleware, todoController.createTodo);
router.delete("/todo", authMiddleware, todoController.deleteTodo);
router.get("/todo", authMiddleware, todoController.getTodo);

module.exports = router;

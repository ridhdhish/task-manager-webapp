const { Router } = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const todoController = require("../controllers/todoController");

const router = Router();

router.post("/todo", authMiddleware, todoController.createtodo);
router.delete("/todo", authMiddleware, todoController.deletetodo);
router.get("/todo", authMiddleware, todoController.getTodo);

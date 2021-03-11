const Todo = require("../models/Todo");

/* 
    Route: POST /todo
    Description: Create new todo
*/
module.exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);

    if (!todo) {
      return res.status(401).json({ message: "Cannot create new todo" });
    }

    res.status(200).json({ todo });
  } catch (err) {
    console.log(err);
  }
};

/* 
    Route: DELETE /todo
    Description: Create new todo
*/
module.exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.body._id);
    if (!todo) {
      return res.status(401).json({ message: "Cannot delete todo" });
    }

    await Todo.findByIdAndDelete(req.body._id);
    res.status(200).json({ message: "Todo deleted" });
  } catch (err) {
    console.log(err);
  }
};

/* 
    Route: GET /todo
    Description: Create new todo
*/
module.exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({ email: req.user.email });
    if (!todos) {
      return res.status(401).json({ message: "No todoes are available" });
    }

    res.status(200).json({ todos });
  } catch (err) {
    console.log(err);
  }
};

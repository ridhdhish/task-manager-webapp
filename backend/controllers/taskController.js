const Task = require("../models/Task");
const jwt = require("jsonwebtoken");
const { getToken } = require("../utils/getAuthorizationToken");

/*
    route: POST /task/create
    description: Create new task
*/
module.exports.createTask = async (req, res) => {
  const { title, description, dueDate } = req.body;

  try {
    const authHeader = req.get("Authorization");
    const token = authHeader.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.SECRETE_KEY);

    const userId = decodedToken.id;
    const task = await Task.create({ title, description, dueDate, userId });
    res.status(200).json({ task });
  } catch (err) {
    console.log(err);
  }
};

/*
    route: GET /task
    description: Fetch all tasks
*/
module.exports.getAllTask = async (req, res) => {
  try {
    const decodedToken = getToken(req);
    const userId = decodedToken.id;

    const tasks = await Task.find({ userId });

    res.status(200).json({ tasks });
  } catch (err) {
    console.log(err);
  }
};

/*
    route: GET /task/:id
    description: Fetch single tasks
*/
module.exports.getTask = async (req, res) => {
  try {
    const decodedToken = getToken(req);
    const userId = decodedToken.id;

    const task = await Task.findOne({ userId, _id: req.params.id });

    res.status(200).json({ task });
  } catch (err) {
    console.log(err);
  }
};

/*
    route: PUT /task/:id
    description: Update a task
*/
module.exports.updateTask = async (req, res) => {
  try {
    const decodedToken = getToken(req);
    const userId = decodedToken.id;
    const task = await Task.findOne({ userId, _id: req.params.id });

    if (!task) {
      return res.status(404).json({ err: "Unable to find task" });
    }

    const { title, description, dueDate } = req.body;

    if (title) task.title = title;
    if (description) task.description = description;
    if (dueDate) task.dueDate = dueDate;

    await task.save();

    res.status(200).json({ task });
  } catch (err) {
    console.log(err);
  }
};

/*
    route: DELETE /task
    description: Delete all tasks
*/
module.exports.deleteAllTask = async (req, res) => {
  try {
    const decodedToken = getToken(req);
    const userId = decodedToken.id;

    const tasks = await Task.find({ userId });
    if (!tasks) {
      return res.status(404).json({ err: "Unable to delete all tasks" });
    }

    await Task.deleteMany({ userId });

    res.status(200).json({ tasks: "All tasks are deleted" });
  } catch (err) {
    console.log(err);
  }
};

/*
    route: DELETE /task/:id
    description: Fetch all tasks
*/
module.exports.deleteTask = async (req, res) => {
  try {
    const decodedToken = getToken(req);
    const userId = decodedToken.id;

    const tasks = await Task.find({ userId, _id: req.params.id });
    if (!tasks) {
      return res.status(404).json({ err: "Unable to delete a task" });
    }

    await Task.deleteOne({ userId, _id: req.params.id });

    res.status(200).json({ task: "Selected task is deleted" });
  } catch (err) {
    console.log(err);
  }
};

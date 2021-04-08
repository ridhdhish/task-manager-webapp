const Task = require("../models/Task");
const { sendResponse } = require("../utils/sendResponse");

/*
    route: POST /task/create
    description: Create new task
*/
module.exports.createTask = async (req, res) => {
  const { dueDate } = req.body;
  const newDueDate = new Date(dueDate);
  try {
    const task = await Task.create({ ...req.body, dueDate: newDueDate });
    res.status(200).json({ task });
  } catch (err) {
    console.log(err);
    return sendResponse(res, "Internal server error");
  }
};

/*
    route: GET /task
    description: Fetch all tasks
*/
module.exports.getAllTask = async (req, res) => {
  console.log(req.query);
  try {
    const email = req.user.email;
    let tasks;

    if (req.query.creator) {
      tasks = await Task.find({ projectId: req.query.projectId });
    } else {
      tasks = await Task.find({ email, projectId: req.query.projectId });
    }

    res.status(200).json({ tasks });
  } catch (err) {
    console.log(err);
    return sendResponse(res, "Internal server error");
  }
};

/*
    route: GET /task/:id
    description: Fetch single tasks
*/
module.exports.getTask = async (req, res) => {
  try {
    const email = req.user.email;

    const task = await Task.findOne({ email, _id: req.params.id });

    res.status(200).json({ task });
  } catch (err) {
    console.log(err);
    return sendResponse(res, "Internal server error");
  }
};

/*
    route: GET /task/getAllTask
    description: Fetches all task for project creator
*/
module.exports.getCreatorAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({ projectId: req.body.id });

    res.status(200).json({ tasks });
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
    const email = req.user.email;

    const task = await Task.findOne({ email, _id: req.params.id });

    if (!task) {
      return sendResponse(res, "Unable to update task", 404);
    }

    const { title, description, dueDate } = req.body;

    if (title) task.title = title;
    if (description) task.description = description;
    if (dueDate) task.dueDate = dueDate;

    await task.save();

    res.status(200).json({ task });
  } catch (err) {
    console.log(err);
    return sendResponse(res, "Internal server error");
  }
};

/*
    route: DELETE /task
    description: Delete all tasks
*/
module.exports.deleteAllTask = async (req, res) => {
  try {
    const email = req.user.email;

    const tasks = await Task.find({ email });
    if (!tasks) {
      return sendResponse(res, "Unable to delete all tasks", 404);
    }

    await Task.deleteMany({ email });

    res.status(200).json({ tasks: "All tasks are deleted" });
  } catch (err) {
    console.log(err);
    return sendResponse(res, "Internal server error");
  }
};

/*
    route: DELETE /task/:id
    description: Fetch all tasks
*/
module.exports.deleteTask = async (req, res) => {
  try {
    //const email = req.user.email;

    const tasks = await Task.find({ _id: req.params.id });
    if (!tasks) {
      return sendResponse(res, "Unable to delete a task", 404);
    }

    await Task.deleteOne({ _id: req.params.id });

    res.status(200).json({ task: "Selected task is deleted" });
  } catch (err) {
    console.log(err);
    return sendResponse(res, "Internal server error");
  }
};

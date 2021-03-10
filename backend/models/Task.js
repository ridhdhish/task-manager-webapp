const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    maxLength: [100, "Title can be of maximum 100 characters"],
  },
  description: {
    type: String,
  },
  dueDate: {
    type: Date,
  },
  email: {
    type: String,
    required: true,
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;

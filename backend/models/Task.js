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
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;

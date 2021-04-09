const mongoose = require("mongoose");
const User = require("./User");
const Task = require("./Task");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  creator: {
    type: String,
    required: true,
  },
  members: {
    type: [],
    default: [],
  },
  tasks: {
    type: Number,
    default: 0,
  },
  dueDate: {
    type: Date,
  },
  priority: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;

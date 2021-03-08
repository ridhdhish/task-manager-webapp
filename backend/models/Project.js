const mongoose = require("mongoose");
const User = require("./User");
const Task = require("./Task");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  members: {
    type: [],
    default: [],
  },
  tasks: {
    type: [],
    default: [],
  },
  dueDate: {
    type: Date,
  },
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;

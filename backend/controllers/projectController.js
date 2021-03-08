const Project = require("../models/Project");
const Invite = require("../models/Invite");
const { findOne } = require("../models/Invite");

/*
    route: POST /project/create
    description: Create new project
*/
module.exports.createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(200).json({ project });
  } catch (err) {
    console.log(err);
  }
};

/*
    route: POST /project/addMember
    description: Add members to the project
*/
module.exports.addMember = async (req, res) => {
  const { id, username, email } = req.body;
  try {
    const project = await Project.findOne({ _id: id });
    project.members.push({ username, email });
    project.save();
    res.status(200).json({ project });
  } catch (err) {
    console.log(err);
  }
};

/*
    route: DELETE /project/:id
    description: Delete single project
*/
module.exports.deleteProject = async (req, res) => {};

/*
    route: DELETE /project
    description: Delete all projects
*/
module.exports.deleteAllProject = async (req, res) => {};

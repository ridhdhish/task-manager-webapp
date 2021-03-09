const Project = require("../models/Project");
const Invite = require("../models/Invite");
const User = require("../models/User");
const { findOne } = require("../models/Invite");

/*
    route: POST /project/create
    description: Create new project
*/
module.exports.createProject = async (req, res) => {
  const { title, description, dueDate } = req.body;
  try {
    const project = await Project.create({
      title,
      description,
      dueDate,
      creator: req.user._id,
    });
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
  const { id, username, email, userId } = req.body;
  try {
    const project = await Project.findById(id);
    project.members.push({ username, email });
    project.save();

    const user = await User.findById(userId);
    user.projects.push(id);
    user.save();

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

/*
    Route: GET /project/getAllProject
    Description: Fetch all projects in which user is involved
*/
module.exports.getAllProject = async (req, res) => {
  const { projects } = req.body;
  const allProjects = [];
  try {
    await Promise.all(
      projects.map(async (id) => {
        const project = await Project.findById(id);
        console.log(project);
        allProjects.push(project);
      })
    );
    console.log("hello");
    res.status(200).json({ allProjects });
  } catch (err) {
    console.log(err);
  }
};

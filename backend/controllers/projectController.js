const Project = require("../models/Project");
const Invite = require("../models/Invite");
const User = require("../models/User");
const Task = require("../models/Task");
const { findOne } = require("../models/Invite");

/*
    route: POST /project/create
    description: Create new project
*/
module.exports.createProject = async (req, res) => {
  const { title, description, dueDate, priority } = req.body;
  const date = new Date(dueDate);
  console.log(date);

  try {
    const project = await Project.create({
      title,
      description,
      dueDate: date,
      priority,
      creator: req.user.email,
    });

    if (!project) {
      return res.status(401).json({ message: "something went wrong!" });
    }

    // Add creator as member too
    project.members.push(req.user.email);
    project.save();

    // Add project to User schema
    const user = await User.findById(req.user._id);

    user.projects.push(project._id);
    user.save();

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
  const { id, inviteId } = req.body;
  const { email, username } = req.user;

  try {
    const project = await Project.findById(id);
    console.log(project.members.includes({ username, email }));

    if (project.members.includes({ username, email })) {
      project.members.push({ username, email });
      project.save();

      const user = await User.findOne({ email });
      user.projects.push(id);
      user.save();

      await Invite.findByIdAndDelete(inviteId);

      return res.status(200).json({ project, user });
    }

    res.status(401).json({ message: "User already exists!" });
  } catch (err) {
    console.log(err);
  }
};

/*
    route: DELETE /project/deleteProject/:id
    description: Delete single project
*/
module.exports.deleteProject = async (req, res) => {
  const id = req.params.id;

  try {
    const project = await Project.findById(id);
    console.log(project);

    if (!project) {
      return res
        .status(401)
        .json({ message: "Cannot delete project, something went wrong" });
    }

    // delete tasks of project first
    await Task.deleteMany({ projectId: id });

    // delete project ref from user
    project.members.forEach(async (member) => {
      const user = await User.findOne({ email: member.email });
      const newProjects = user.projects.filter((project) => {
        return project !== id;
      });
      user.projects = newProjects;
      await user.save();
    });

    await Project.findByIdAndDelete(id);

    res.json({ message: "Project has been deleted" });
  } catch (err) {
    console.log(err);
  }
};

/*
    route: DELETE /project
    description: Delete all projects
*/
module.exports.deleteAllProject = async (req, res) => {};

/*
    Route: GET /project/getAllProject?limit=3&priority=urgent
    Description: Fetch all projects in which user is involved
*/
module.exports.getAllProject = async (req, res) => {
  try {
    const { projects } = await User.findById(req.user._id);
    const allProjects = [];

    if (req.query.limit) {
      const projects = await Project.find({
        members: { $in: [req.user.email] },
        priority: req.query.priority,
      }).limit(3);

      return res.status(200).json({ projects });
    }

    // await Promise.all(
    //   projects.map(async (id) => {
    //     const project = await Project.findById(id);
    //     allProjects.push(project);
    //   })
    // );
    res.status(200).json({ allProjects });
  } catch (err) {
    console.log(err);
  }
};

// Make API to fetch first 3 priority projects
/*
    Route: GET /project/limit
    Description: Fetch first 3 priority projects
*/
module.exports.getLimitedProject = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

/*
    Route: GET /project/latest
    Description: Fetch latest 3 projects
*/
module.exports.getLatestProject = async (req, res) => {
  try {
    const projects = await Project.find({
      members: { $in: [req.user.email] },
    })
      .sort({ _id: -1 })
      .limit(4);

    return res.status(200).json({ projects });
  } catch (err) {
    console.log(err);
  }
};

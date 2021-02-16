const { findById } = require("../models/User");
const User = require("../models/User");
const { getToken } = require("../utils/getAuthorizationToken");

/*
    route: PUT /user
    description: Update current user
*/
module.exports.updateUser = async (req, res) => {
  try {
    const decodedToken = getToken(req);
    const userId = decodedToken.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(500).json({ message: "Unable to update user" });
    }

    const { email, username } = req.body;

    if (email) user.email = email;
    if (username) user.username = username;

    await user.save();

    res.status(200).json({ user });
  } catch (err) {
    console.log(err);
  }
};

/*
    route: DELETE /user
    description: Delete current user
*/
module.exports.deleteUser = async (req, res) => {
  try {
    const decodedToken = getToken(req);
    const userId = decodedToken.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(500).json({ message: "Unable to update user" });
    }

    await User.findByIdAndDelete(userId);

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.log(err);
  }
};

/*
    route: GET /user
    description: Fetch current user
*/
module.exports.getUser = async (req, res) => {
  try {
    const decodedToken = getToken(req);
    const userId = decodedToken.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(500).json({ message: "No user found" });
    }

    res.status(200).json({ user });
  } catch (err) {
    console.log(err);
  }
};

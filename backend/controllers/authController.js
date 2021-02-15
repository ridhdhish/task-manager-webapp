const User = require("../models/User");

// Signup api
module.exports.signup = async (req, res) => {
  const { email, password, username } = req.body;
  console.log(req.body);

  try {
    const user = await User.create({ email, password, username });
    console.log(user);
    res.status(200).json({ user });
  } catch (err) {
    console.log(err);
  }
};

// Login api
module.exports.login = (req, res) => {};

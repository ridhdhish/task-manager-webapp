const User = require("../models/User");
const bcrypt = require("bcrypt");

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
module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user) {
      const isValid = await bcrypt.compare(password, user.password);

      if (!isValid) {
        res.status(404).json({ err: "Invalid credentials" });
      }

      res.status(200).json({ user });
    } else {
      res.status(404).json({ err: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
};

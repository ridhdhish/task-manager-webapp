const User = require("../models/User");
const bcrypt = require("bcrypt");

const { generateToken } = require("../utils/createToken");

// Signup api
module.exports.signup = async (req, res) => {
  const { email, password, username } = req.body;
  console.log(req.body);

  try {
    const user = await User.create({ email, password, username });
    const token = generateToken(user);
    res.status(200).json({ user, token });
  } catch (err) {
    console.log(err);
    return sendResponse(res, "Internal server error");
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
        return sendResponse(res, "Invalid Credentials", 404);
      }

      const token = generateToken(user);
      res.status(200).json({ user, token });
    } else {
      return sendResponse(res, "Invalid Credentials", 404);
    }
  } catch (err) {
    console.log(err);
    return sendResponse(res, "Internal server error");
  }
};

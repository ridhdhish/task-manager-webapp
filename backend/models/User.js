const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email field is required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter valid email"],
  },
  password: {
    type: String,
    required: [true, "Password field is required"],
    minlength: [6, "Minimum length of password must be of 6 characters"],
  },
  username: {
    type: String,
  },
  projects: {
    type: [],
    default: [],
  },
});

// Encrypt password before creating new user
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("users", userSchema);

module.exports = User;

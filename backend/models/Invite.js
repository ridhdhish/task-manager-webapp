const mongoose = require("mongoose");

const inviteSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const Invite = mongoose.model("Invite", inviteSchema);
module.exports = Invite;

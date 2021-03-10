const Invite = require("../models/Invite");

/* 
    Route: POST /invite
    Description: Sent invite to perticular user to join project
*/
module.exports.sentInvite = async (req, res) => {
  try {
    const invite = await Invite.create(req.body);
    res.status(200).json({ invite });
  } catch (err) {
    console.log(err);
  }
};

/* 
  Route: GET /invite
  Description: Fetch all invites for perticular user
*/
module.exports.getAllInvites = async (req, res) => {
  try {
    const invites = await Invite.find({ email: req.user.email });
    console.log(invites);
    res.status(200).json({ invites });
  } catch (err) {
    console.log(err);
  }
};

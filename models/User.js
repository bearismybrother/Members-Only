// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const User = new Schema({
  username: {
    type: String,
    min: [1, "Too short"],
    max: [20, "Too long"],
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post", required: true }],
  membershipStatus: {
    type: String,
    required: true,
    enum: ["Basic", "Premium", "Private"],
    default: "Basic",
  },
});

module.exports(User);

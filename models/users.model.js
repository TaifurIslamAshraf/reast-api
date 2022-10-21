const mongoose = require("mongoose");

const userShcema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  createOn: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("users", userShcema);

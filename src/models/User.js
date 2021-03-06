const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  participation: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("users", UserSchema);

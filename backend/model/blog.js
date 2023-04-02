const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please enter blog title"],
  },
  description: {
    type: String,
    required: [true, "please enter blog description"],
    minLength: [10, "description min length should be 10"],
  },
  image: String,
  created: {
    type: String,
    default: Date.now(),
  },
});
module.exports = new mongoose.model("Blog", blogSchema);

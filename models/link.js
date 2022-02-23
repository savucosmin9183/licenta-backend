const mongoose = require("mongoose");

const linkSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
  image: {
    type: String,
  },
  perf: {
    type: Number,
  },
  access: {
    type: Number,
  },
  seo: {
    type: Number,
  },
  bestP: {
    type: Number,
  },
  projectId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Link", linkSchema);

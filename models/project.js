const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  avgPerf: {
    type: Number,
  },
  avgAccess: {
    type: Number,
  },
  avgSeo: {
    type: Number,
  },
  avgBestP: {
    type: Number,
  },
});

module.exports = mongoose.model("Project", projectSchema);

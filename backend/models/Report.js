const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  reporterName: String,
  reporterType: String,
  location: String,
  threatType: String,
  description: String,
  priority: String,
  coordinates: String,
  photos: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Report", reportSchema);
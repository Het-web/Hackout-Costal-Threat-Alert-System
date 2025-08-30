const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema({
  type: String,
  severity: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Alert", alertSchema);
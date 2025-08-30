const express = require("express");
const Alert = require("../models/Alert");

const router = express.Router();

router.get("/", async (req, res) => {
  const alerts = await Alert.find().sort({ createdAt: -1 });
  res.json(alerts);
});

router.post("/", async (req, res) => {
  try {
    const alert = new Alert(req.body);
    await alert.save();
    res.json({ message: "Alert issued!", alert });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
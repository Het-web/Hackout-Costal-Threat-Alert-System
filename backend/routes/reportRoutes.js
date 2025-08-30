const express = require("express");
const Report = require("C:\Users\hetbp\Desktop\react\backend\models\Report.js");

const router = express.Router();

router.get("/", async (req, res) => {
  const reports = await Report.find().sort({ createdAt: -1 });
  res.json(reports);
});

router.post("/", async (req, res) => {
  try {
    const report = new Report(req.body);
    await report.save();
    res.json({ message: "Report saved!", report });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
const express = require("express");
const Shelter = require("C:\Users\hetbp\Desktop\react\backend\models\Shelter.js");

const router = express.Router();

router.get("/", async (req, res) => {
  const shelters = await Shelter.find();
  res.json(shelters);
});

router.post("/", async (req, res) => {
  try {
    const shelter = new Shelter(req.body);
    await shelter.save();
    res.json({ message: "Shelter added!", shelter });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
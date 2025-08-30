const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import route files
const reportRoutes = require("./routes/reportRoutes");
const shelterRoutes = require("./routes/shelterRoutes");
const alertRoutes = require("./routes/alertRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/coastal_alert", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// API routes
app.use("/api/reports", reportRoutes);
app.use("/api/shelters", shelterRoutes);
app.use("/api/alerts", alertRoutes);

// Default route (for testing)
app.get("/", (req, res) => {
  res.send("🌊 Coastal Alert API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Import the connectDB function
const connectDB = require("./config/db");

// Import routes
const authRoutes = require("./routes/authRoutes");
const moodRoutes = require("./routes/moodRoutes");
const communityRoutes = require("./routes/communityRoutes");
const resourceRoutes = require("./routes/resourceRoutes");
const professionalRoutes = require("./routes/professionalRoutes");

// Import error handler
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000", // Explicitly allow frontend origin
    credentials: true, // If using cookies/auth headers
  })
);
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Mental Health Support Backend is running!");
});

// ===== Fix: Reorder routes =====
// Auth Routes should come before more generic "/api" routes
app.use("/api/auth", authRoutes);
app.use("/api/mood", moodRoutes);
app.use("/api/community", communityRoutes);
app.use("/api/resources", resourceRoutes);
app.use("/api/professionals", professionalRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
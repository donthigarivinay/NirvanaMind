const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const moodRoutes = require('./routes/moodRoutes');
const communityRoutes = require('./routes/communityRoutes');
const resourceRoutes = require('./routes/resourceRoutes');
const professionalRoutes = require('./routes/professionalRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Configure CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Allow requests from frontend
    credentials: true, // Allow cookies/auth headers
  })
);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/mood', moodRoutes);
app.use('/api/community', communityRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/professionals', professionalRoutes);

// Error Handler
app.use(errorHandler);

module.exports = app;
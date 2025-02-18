const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema({
  mood: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Mood', moodSchema);
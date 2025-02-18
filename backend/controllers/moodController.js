const Mood = require('../models/Mood');

const addMood = async (req, res) => {
  const { mood } = req.body;
  const userId = req.user._id;

  try {
    const newMood = await Mood.create({ mood, user: userId });
    res.status(201).json(newMood);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getMoods = async (req, res) => {
  const userId = req.user._id;

  try {
    const moods = await Mood.find({ user: userId });
    res.json(moods);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { addMood, getMoods };
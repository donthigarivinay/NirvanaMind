const Mood = require('../models/Mood');

const addMoodEntry = async (mood, userId) => {
  const newMood = await Mood.create({ mood, user: userId });
  return newMood;
};

const getMoodEntries = async (userId) => {
  const moods = await Mood.find({ user: userId });
  return moods;
};

module.exports = { addMoodEntry, getMoodEntries };
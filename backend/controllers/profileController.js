const User = require('../models/User');

exports.updateProfile = async (req, res) => {
  const { name, email, stressLevel, mood, bio } = req.body;
  const userId = req.user._id;

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { name, email, stressLevel, mood, bio },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
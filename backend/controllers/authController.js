const { generateToken } = require('../config/auth');
const User = require('../models/User');

const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });
    const token = generateToken(user._id);
    res.status(201).json({ user, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      throw new Error('Invalid credentials');
    }
    const token = generateToken(user._id);
    res.json({ user, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { register, login };
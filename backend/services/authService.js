const User = require('../models/User');
const { generateToken } = require('../config/auth');

const registerUser = async (name, email, password) => {
  const user = await User.create({ name, email, password });
  const token = generateToken(user._id);
  return { user, token };
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    throw new Error('Invalid credentials');
  }
  const token = generateToken(user._id);
  return { user, token };
};

module.exports = { registerUser, loginUser };
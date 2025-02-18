const Post = require('../models/Post');

const createPost = async (req, res) => {
  const { content } = req.body;
  const userId = req.user._id;

  try {
    const post = await Post.create({ content, user: userId });
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('user', 'name');
    res.json(posts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createPost, getPosts };
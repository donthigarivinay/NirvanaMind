const Post = require('../models/Post');

const createCommunityPost = async (content, userId) => {
  const post = await Post.create({ content, user: userId });
  return post;
};

const getCommunityPosts = async () => {
  const posts = await Post.find().populate('user', 'name');
  return posts;
};

module.exports = { createCommunityPost, getCommunityPosts };
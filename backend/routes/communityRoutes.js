const express = require('express');
const { createPost, getPosts } = require('../controllers/communityController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware);
router.post('/', createPost);
router.get('/', getPosts);

module.exports = router;
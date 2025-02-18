const express = require('express');
const { addMood, getMoods } = require('../controllers/moodController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware);
router.post('/', addMood);
router.get('/', getMoods);

module.exports = router;
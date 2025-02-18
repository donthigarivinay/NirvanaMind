const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/User');

const router = express.Router();

// Get user profile
router.get('/', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update profile
router.put('/', authMiddleware, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: req.body },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Add todo
router.post('/todos', authMiddleware, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $push: { todos: req.body } },
      { new: true }
    ).select('-password');
    res.json(user.todos);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update todo
router.put('/todos/:id', authMiddleware, async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { 
        _id: req.user.id,
        'todos._id': req.params.id 
      },
      { 
        $set: { 
          'todos.$.text': req.body.text,
          'todos.$.completed': req.body.completed
        } 
      },
      { new: true }
    ).select('-password');
    
    res.json(user.todos);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
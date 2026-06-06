// routes/users.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Protected route #1 — user profile
router.get('/profile', auth, (req, res) => {
  res.json({
    message: 'Authenticated user profile',
    user: req.user
  });
});

// Protected route #2 — example protected data
router.get('/my-recipes', auth, (req, res) => {
  res.json({
    message: `Here are the recipes for user ${req.user.email}`,
    userId: req.user.userId
  });
});

module.exports = router;


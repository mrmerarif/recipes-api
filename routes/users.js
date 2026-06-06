// routes/users.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User profile and protected routes
 */

/**
 * @swagger
 * /users/profile:
 *   get:
 *     summary: Get the authenticated user's profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Authenticated user profile
 *       401:
 *         description: Authorization token missing or invalid
 *       403:
 *         description: Invalid or expired token
 */
router.get('/profile', auth, (req, res) => {
  res.json({
    message: 'Authenticated user profile',
    user: req.user
  });
});

/**
 * @swagger
 * /users/my-recipes:
 *   get:
 *     summary: Get recipes for the authenticated user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User-specific recipes
 *       401:
 *         description: Authorization token missing or invalid
 *       403:
 *         description: Invalid or expired token
 */
router.get('/my-recipes', auth, (req, res) => {
  res.json({
    message: `Here are the recipes for user ${req.user.email}`,
    userId: req.user.userId
  });
});

module.exports = router;

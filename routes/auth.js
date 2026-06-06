// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

// Redirect to Google OAuth
router.get('/login', authController.login);

// Google OAuth callback URL
router.get('/google/callback', authController.googleCallback);

// Logout (client deletes token)
router.get('/logout', authController.logout);

module.exports = router;

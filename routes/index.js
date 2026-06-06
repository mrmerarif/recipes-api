// routes/index.js
const express = require('express');
const router = express.Router();

// Root route — confirms API is running
router.get('/', (req, res) => {
  res.json({
    message: 'Recipes API (Application Programming Interface) is running',
    docs: 'Visit /api-docs for Swagger documentation',
    endpoints: [
      '/recipes',
      '/ingredients',
      '/auth/login',
      '/auth/logout',
      '/users/profile'
    ]
  });
});

module.exports = router;

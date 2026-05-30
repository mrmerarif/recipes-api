// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Recipes API (Application Programming Interface) is running' });
});

module.exports = router;

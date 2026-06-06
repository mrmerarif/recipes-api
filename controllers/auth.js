// controllers/auth.js
const jwt = require('jsonwebtoken');
const axios = require('axios');
const User = require('../models/user');

const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GOOGLE_USERINFO_URL = 'https://www.googleapis.com/oauth2/v3/userinfo';

// STEP 1: Redirect user to Google OAuth
exports.login = (req, res) => {
  const redirectUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&response_type=code&scope=openid%20email%20profile&access_type=offline&prompt=consent`;

  res.redirect(redirectUrl);
};

// STEP 2: Google redirects back with a "code"
exports.googleCallback = async (req, res) => {
  const code = req.query.code;

  try {
    // Exchange code for tokens
    const tokenResponse = await axios.post(GOOGLE_TOKEN_URL, {
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI,
      grant_type: 'authorization_code'
    });

    const { id_token, access_token } = tokenResponse.data;

    // Fetch user info from Google
    const userInfo = await axios.get(GOOGLE_USERINFO_URL, {
      headers: { Authorization: `Bearer ${access_token}` }
    });

    const { sub, email, name, picture } = userInfo.data;

    // Check if user exists
    let user = await User.findOne({ googleId: sub });

    if (!user) {
      user = await User.create({
        googleId: sub,
        email,
        name,
        picture
      });
    }

    // Create JWT
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Return token to user
    res.json({
      message: 'Login successful',
      token,
      user
    });

  } catch (error) {
    console.error('OAuth error:', error.response?.data || error.message);
    res.status(500).json({ message: 'Authentication failed' });
  }
};

// STEP 3: Logout (client deletes token)
exports.logout = (req, res) => {
  res.json({ message: 'Logged out successfully. Delete your token on the client side.' });
};

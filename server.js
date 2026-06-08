// server.js
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const connectDB = require('./db/connect');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// 🔐 AUTH ROUTES (must come before protected routes)
app.use('/auth', require('./routes/auth'));

// Main API routes
app.use('/', require('./routes/index'));
app.use('/recipes', require('./routes/recipes'));
app.use('/ingredients', require('./routes/ingredients'));
app.use('/users', require('./routes/users'));

// Swagger documentation
const {
  swaggerSpec,
  swaggerUiOptions
} = require('./swagger');

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, swaggerUiOptions)
);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    message: 'Something went wrong!'
  });
});

// Start server after DB connection
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to start server:', err);
  });
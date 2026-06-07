const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Recipes + Ingredients API',
      version: '1.0.0',
      description: 'API documentation for Recipes, Ingredients, and Authentication'
    },
    servers: [
      {
        url: 'https://recipes-api-infv.onrender.com',
        description: 'Production server (Render)'
      },
      {
        url: 'http://localhost:3000',
        description: 'Local development server'
      }
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }

      
    }
  },

  // Swagger will scan all route files for JSDoc comments
  apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec
};

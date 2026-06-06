const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Recipes + Ingredients API',
      version: '1.0.0',
      description: 'API documentation for Recipes and Ingredients'
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

    // 🔐 SECURITY SCHEMES ADDED HERE
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },

      schemas: {
        Recipe: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            title: { type: 'string' },
            description: { type: 'string' },
            ingredients: {
              type: 'array',
              items: { type: 'string' }
            },
            instructions: { type: 'string' },
            prepTime: { type: 'number' },
            cookTime: { type: 'number' },
            servings: { type: 'number' },
            category: { type: 'string' },
            imageUrl: { type: 'string' },
            createdAt: { type: 'string' },
            updatedAt: { type: 'string' }
          },
          required: [
            'title',
            'description',
            'ingredients',
            'instructions',
            'prepTime',
            'cookTime',
            'servings',
            'category'
          ]
        },

        Ingredient: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            type: { type: 'string' },
            calories: { type: 'number' },
            unit: { type: 'string' },
            price: { type: 'number' },
            brand: { type: 'string' },
            allergens: { type: 'string' },
            createdAt: { type: 'string' },
            updatedAt: { type: 'string' }
          },
          required: ['name', 'type', 'calories', 'unit', 'price']
        }
      }
    }
  },

  apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec
};

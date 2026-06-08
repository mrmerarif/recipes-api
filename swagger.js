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
      },

      
      schemas: {
        Recipe: {
          type: 'object',
          properties: {
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
            imageUrl: { type: 'string' }
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
            name: { type: 'string' },
            type: { type: 'string' },
            calories: { type: 'number' },
            unit: { type: 'string' },
            price: { type: 'number' },
            brand: { type: 'string' },
            allergens: { type: 'string' }
          },
          required: ['name', 'type', 'calories', 'unit', 'price']
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

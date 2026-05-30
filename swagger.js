

const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Recipes API (Application Programming Interface)',
      version: '1.0.0',
      description:
        'A REST (Representational State Transfer) API that performs CRUD (Create Read Update Delete) operations for Recipes and Ingredients using MongoDB (Mongo Database) and Mongoose (MongoDB Object Modeling for Node.js).'
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local development server'
      }
    ]
  },
  apis: ['./routes/*.js'] // tells Swagger where to find route comments
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;

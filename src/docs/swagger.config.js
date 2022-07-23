require('dotenv').config();

const swaggerConfig = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Swagger desafio back-end XP Inc',
      description: 'Api de mercado financeiro utilizando express documentada pelo swagger',
      version: '1.0',
    },
    servers: [{
      url: `http://localhost:${process.env.PORT}`,
      description: 'servidor local',
    }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/routes.js'],
};

module.exports = swaggerConfig;

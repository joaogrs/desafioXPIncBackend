const swaggerConfig = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Swagger desafio back-end XP Inc',
      description: 'Api de mercado financeiro utilizando express documentada pelo swagger',
      version: '1.0',
    },
    servers: [{
      url: 'http://localhost:3000',
      description: 'servidor local',
    }],
  },
  apis: ['./src/routes.js'],
};

module.exports = swaggerConfig;

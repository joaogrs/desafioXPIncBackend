const express = require('express');
const comprasController = require('./controllers/compras.controller');
const vendasController = require('./controllers/vendas.controller');
const investimentosController = require('./controllers/investimentos.controller');
const ativosDisponiveisController = require('./controllers/ativosDisponiveis.controller');
const depositoController = require('./controllers/deposito.controller');
const saqueController = require('./controllers/saque.controller');
const clientesController = require('./controllers/clientes.controller');
const authController = require('./controllers/auth.controller');
const authMiddleware = require('./middlewares/auth.middleware');

const routes = express.Router();

/**
 * @swagger
 * tags:
 *     name: Investimentos
 *     description: Endpoints de investimentos
 */

/**
 * @swagger
 * tags:
 *     name: Conta
 *     description: Endpoints de conta
 */

/**
 * @swagger
 * tags:
 *     name: Autorização
 *     description: Endpoint para realizar o login
 */

/**
 * @swagger
 * components:
 *     schemas:
 *      Compras:
 *             type: object
 *             required:
 *                 - codCliente
 *                 - codAtivo
 *                 - qtdeAtivo
 *             properties:
 *                  codCliente:
 *                            type: integer
 *                  codAtivo:
 *                          type: integer
 *                  qtdeAtivo:
 *                           type: integer
 *             example:
 *                  codCliente: 1
 *                  codAtivo: 1
 *                  qtdeAtivo: 2
 */

/**
 * @swagger
 * components:
 *     schemas:
 *      Histórico de Saque:
 *             type: object
 *             required:
 *                 - id
 *                 - CodCliente
 *                 - Valor
 *             properties:
 *                  id:
 *                    type: integer
 *                  Codcliente:
 *                            type: integer
 *                  Valor:
 *                       type: number
 *             example:
 *                  id: 1
 *                  CodCliente: 1
 *                  Valor: 30.45
 */

/**
 * @swagger
 * components:
 *     schemas:
 *      Histórico de Venda:
 *             type: object
 *             required:
 *                 - id
 *                 - CodCliente
 *                 - Valor
 *             properties:
 *                  id:
 *                    type: integer
 *                  Codcliente:
 *                            type: integer
 *                  Valor:
 *                       type: number
 *             example:
 *                  id: 1
 *                  CodCliente: 1
 *                  Valor: 30.45
 */

/**
 * @swagger
 * components:
 *     schemas:
 *      Ativos:
 *             type: object
 *             required:
 *                 - id
 *                 - nome
 *                 - qtdeAtivo
 *                 - valor
 *             properties:
 *                  id:
 *                    type: integer
 *                  nome:
 *                      type: string
 *                  qtdeAtivo:
 *                           type: integer
 *                  valor:
 *                       type: number
 *             example:
 *                  id: 1
 *                  nome: XPIN
 *                  qtdeAtivo: 145241
 *                  valor: 16.94
 */

/**
 * @swagger
 * components:
 *     schemas:
 *      Conta:
 *             type: object
 *             required:
 *                 - codCliente
 *                 - saldo
 *                 - username
 *                 - password
 *             properties:
 *                  codCliente:
 *                            type: integer
 *                  saldo:
 *                          type: number
 *                  username:
 *                           type: string
 *                  password:
 *                          type: string
 *             example:
 *                  codCliente: 1
 *                  saldo: 150.7
 *                  username: João
 *                  password: senha123
 */

/**
 * @swagger
 * components:
 *     schemas:
 *      Vendas:
 *             type: object
 *             required:
 *                 - codCliente
 *                 - codAtivo
 *                 - qtdeAtivo
 *             properties:
 *                  codCliente:
 *                            type: integer
 *                  codAtivo:
 *                          type: integer
 *                  qtdeAtivo:
 *                           type: integer
 *             example:
 *                  codCliente: 1
 *                  codAtivo: 1
 *                  qtdeAtivo: 2
 */

/**
 * @swagger
 * components:
 *     schemas:
 *      Investimentos:
 *             type: object
 *             required:
 *                 - CodCliente
 *                 - CodAtivo
 *                 - QtdeAtivo
 *                 - Valor
 *             properties:
 *                  CodCliente:
 *                            type: integer
 *                  CodAtivo:
 *                          type: integer
 *                  QtdeAtivo:
 *                           type: integer
 *                  Valor:
 *                       type: number
 *             example:
 *                  CodCliente: 1
 *                  CodAtivo: 1
 *                  QtdeAtivo: 2
 *                  Valor: 30.50
 */

/**
 * @swagger
 *  /investimentos/comprar:
 *    post:
 *      tags: [Investimentos]
 *      description: Endpoint faz o post na tabela de compras
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#components/schemas/Compras'
 *      responses:
 *        201:
 *          content:
 *            aplication/json:
 *              schema:
 *                type: object
 *                properties:
 *                  codAtivo:
 *                    type: integer
 *                  codCliente:
 *                    type: integer
 *                  qtdeAtivo:
 *                    type: integer
 *                  valor:
 *                    type: number
 *                example:
 *                  codCliente: 1
 *                  codAtivo: 1
 *                  qtdeAtivo: 2
 *                  valor: 20.50
 */
routes.use('/investimentos/comprar', authMiddleware, comprasController);
/**
 * @swagger
 *  /investimentos/vender:
 *    post:
 *      tags: [Investimentos]
 *      description: Endpoint faz o post na tabela de vendas
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#components/schemas/Vendas'
 *      responses:
 *        201:
 *          content:
 *            aplication/json:
 *              schema:
 *                type: object
 *                properties:
 *                  codAtivo:
 *                    type: integer
 *                  codCliente:
 *                    type: integer
 *                  qtdeAtivo:
 *                    type: integer
 *                  valor:
 *                    type: number
 *                example:
 *                - codCliente: 1
 *                  codAtivo: 1
 *                  qtdeAtivo: 2
 *                  valor: 20.50
 */
routes.use('/investimentos/vender', authMiddleware, vendasController);
/**
 * @swagger
 *  /ativos/cliente/{cod}:
 *    get:
 *      tags: [Investimentos]
 *      description: Endpoint faz o get de todos ativos de determinado cliente
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - in: path
 *        name: cod
 *        type: integer
 *        required: true
 *      responses:
 *        200:
 *          content:
 *            aplication/json:
 *              schema:
 *                type: array
 *                items:
 *                  CodAtivo:
 *                    type: integer
 *                  CodCliente:
 *                    type: integer
 *                  QtdeAtivo:
 *                    type: integer
 *                  Valor:
 *                    type: number
 *                example:
 *                - CodCliente: 1
 *                  CodAtivo: 1
 *                  QtdeAtivo: 2
 *                  Valor: 20.50
 *                - CodCliente: 2
 *                  CodAtivo: 2
 *                  QtdeAtivo: 2
 *                  Valor: 35.70
 */
routes.use('/ativos/cliente', authMiddleware, investimentosController);
/**
 * @swagger
 *  /ativos/{cod}:
 *    get:
 *      tags: [Investimentos]
 *      description: Endpoint faz o get de determinado ativo pelo código
 *      parameters:
 *      - in: path
 *        name: cod
 *        type: integer
 *        required: true
 *      responses:
 *        200:
 *          content:
 *            aplication/json:
 *              schema:
 *                type: object
 *                properties:
 *                  CodAtivo:
 *                    type: integer
 *                  QtdeAtivo:
 *                    type: integer
 *                  Valor:
 *                    type: number
 *                example:
 *                  CodAtivo: 1
 *                  QtdeAtivo: 2
 *                  Valor: 20.50
 */

/**
 * @swagger
 *  /ativos:
 *    get:
 *      tags: [Investimentos]
 *      description: Endpoint faz o get de todos os ativos da corretora
 *      responses:
 *        200:
 *          content:
 *            aplication/json:
 *              schema:
 *                type: array
 *                items:
 *                  nome:
 *                    type: string
 *                  qtdeAtivo:
 *                    type: integer
 *                  valor:
 *                    type: number
 *                example:
 *                  - nome: XPIN
 *                    qtdeAtivo: 12342
 *                    valor: 20.50
 *                  - nome: XPED
 *                    qtdeAtivo: 193424
 *                    valor: 6.89
 */
routes.use('/ativos', ativosDisponiveisController);
/**
 * @swagger
 *  /conta/deposito:
 *    post:
 *      tags: [Conta]
 *      description: Endpoint faz o deposito na conta de determinado cliente
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                CodCliente:
 *                  type: integer
 *                Valor:
 *                  type: number
 *      responses:
 *        201:
 *          content:
 *            aplication/json:
 *              schema:
 *                type: object
 *                properties:
 *                  codCliente:
 *                    type: integer
 *                  valor:
 *                    type: number
 *                example:
 *                  codCliente: 1
 *                  valor: 20.50
 */
routes.use('/conta/deposito', authMiddleware, depositoController);
/**
 * @swagger
 *  /conta/saque:
 *    post:
 *      tags: [Conta]
 *      description: Endpoint faz o saque na conta de determinado cliente
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                CodCliente:
 *                  type: integer
 *                Valor:
 *                  type: number
 *      responses:
 *        201:
 *          content:
 *            aplication/json:
 *              schema:
 *                type: object
 *                properties:
 *                  codCliente:
 *                    type: integer
 *                  valor:
 *                    type: number
 *                example:
 *                  codCliente: 1
 *                  valor: 20.50
 */
routes.use('/conta/saque', authMiddleware, saqueController);
/**
 * @swagger
 *  /conta/{cod}:
 *    get:
 *      tags: [Conta]
 *      description: Endpoint faz o get de determinado cliente
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - in: path
 *        name: cod
 *        type: integer
 *        required: true
 *      responses:
 *        200:
 *          content:
 *            aplication/json:
 *              schema:
 *                type: object
 *                properties:
 *                  CodCliente:
 *                    type: integer
 *                  Saldo:
 *                    type: number
 *                example:
 *                  CodCliente: 1
 *                  Saldo: 120.50
 */

/**
 * @swagger
 *  /conta/registro:
 *    post:
 *      tags: [Conta]
 *      description: Endpoint faz o post de um novo cliente
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                username:
 *                  type: string
 *                password:
 *                  type: string
 *      responses:
 *        201:
 *          content:
 *            aplication/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                example:
 *                  message: "Cliente cadastrado com sucesso"
 */

routes.use('/conta', clientesController);
/**
 * @swagger
 *  /auth:
 *    post:
 *      tags: [Autorização]
 *      description: Endpoint de login
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                username:
 *                  type: string
 *                password:
 *                  type: string
 *      responses:
 *        201:
 *          content:
 *            aplication/json:
 *              schema:
 *                type: object
 *                properties:
 *                  token:
 *                    type: string
 *                example:
 *                  token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJyZXR0QGVtYWlsLmNvbSIs
 */
routes.use('/auth', authController);

module.exports = routes;

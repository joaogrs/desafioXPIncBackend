const express = require('express');
const depositoService = require('../services/deposito.service');

const depositoController = express.Router();

depositoController.post('/', async (req, res) => {
  const response = await depositoService.addDeposito(req.body);
  res.status(201).json(response);
});

module.exports = depositoController;

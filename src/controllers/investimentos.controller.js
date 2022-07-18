const express = require('express');
const investimentosService = require('../services/investimentos.service');

const investimentosController = express.Router();

investimentosController.get('/:cod', async (req, res) => {
  const { cod } = req.params;
  const response = await investimentosService.getByCodCliente(cod);
  res.status(200).json(response);
});

module.exports = investimentosController;

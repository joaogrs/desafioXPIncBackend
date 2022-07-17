const express = require('express');
const clientesService = require('../services/clientes.services');

const clientesController = express.Router();

clientesController.get('/:cod', async (req, res) => {
  const { cod } = req.params;
  const response = await clientesService.getClienteByCod(cod);
  res.status(200).json(response);
});

module.exports = clientesController;

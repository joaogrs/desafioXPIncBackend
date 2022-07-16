const express = require('express');
const comprasService = require('../services/compras.service');
const { validateAtivosDisponiveis } = require('../middlewares/compras.middleware');

const comprasController = express.Router();

comprasController.post('/', validateAtivosDisponiveis, async (req, res) => {
  const response = await comprasService.addCompra(req.body);
  res.status(201).json(response);
});

module.exports = comprasController;

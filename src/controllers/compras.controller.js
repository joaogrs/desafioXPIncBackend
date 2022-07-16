const express = require('express');
const comprasService = require('../services/compras.service');

const comprasController = express.Router();

comprasController.post('/', async (req, res) => {
  const response = await comprasService.addCompra(req.body);
  res.status(201).json(response);
});

module.exports = comprasController;

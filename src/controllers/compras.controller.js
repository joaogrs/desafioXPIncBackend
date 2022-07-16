// const { Router } = require('express');
const comprasService = require('../services/compras.service');

// const comprasController = Router();

/* comprasController.post(async (req, res) => {
  const response = await comprasService.addCompra(req.body);
  res.status(201).json(response);
}); */

const comprasController2 = async (req, res) => {
  const response = await comprasService.addCompra(req.body);
  res.status(201).json(response);
};

module.exports = comprasController2;

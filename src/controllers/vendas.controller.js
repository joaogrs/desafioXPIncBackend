const express = require('express');
const vendasService = require('../services/vendas.service');
const { validateAtivosCarteira, validateCamposVenda } = require('../middlewares/vendas.middleware');

const vendasController = express.Router();

vendasController.post('/', validateAtivosCarteira, validateCamposVenda, async (req, res) => {
  const response = await vendasService.addVenda(req.body);
  res.status(201).json(response);
});

module.exports = vendasController;

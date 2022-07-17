const express = require('express');
const saqueService = require('../services/saque.service');

const saqueController = express.Router();

saqueController.post('/', async (req, res) => {
  const response = await saqueService.addSaque(req.body);
  res.status(201).json(response);
});

module.exports = saqueController;

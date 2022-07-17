const express = require('express');
const ativosDisponiveisService = require('../services/ativosDisponiveis.services');

const ativosDisponiveisController = express.Router();

ativosDisponiveisController.get('/:cod', async (req, res) => {
  const { cod } = req.params;
  const response = await ativosDisponiveisService.getByCodAtivo(cod);
  res.status(200).json(response);
});

module.exports = ativosDisponiveisController;

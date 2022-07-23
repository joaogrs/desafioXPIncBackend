const express = require('express');
const clientesService = require('../services/clientes.services');
const authMiddleware = require('../middlewares/auth.middleware');

const clientesController = express.Router();

clientesController.get('/:cod', authMiddleware, async (req, res) => {
  const { cod } = req.params;
  const response = await clientesService.getClienteByCod(cod);
  res.status(200).json(response);
});

clientesController.post('/registro', async (req, res) => {
  const test = await clientesService.addCliente(req.body);
  if (!test) return res.status(400).json({ message: 'Campos faltantes' });
  return res.status(201).json({ message: 'Cliente registrado com sucesso' });
});

module.exports = clientesController;

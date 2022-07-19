const express = require('express');
const authService = require('../services/auth.service');

const authController = express.Router();

authController.post('/', async (req, res) => {
  const { status, message } = await authService.authenticate(req.body);
  res.status(status).json(message);
});

module.exports = authController;

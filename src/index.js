const express = require('express');
// const routes = require('./routes');
const comprasController = require('./controllers/compras.controller');

const app = express();

app.use(express.json());
app.post('/investimentos/comprar', comprasController);

const PORT = 3000;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

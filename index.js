const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos do frontend
//app.use(express.static(path.join('public')));

// Middleware para parsear JSON
app.use(express.json());

// Importar e usar rotas do backend
const apiRoutes = require('./backend/routers/api');
app.use('/api', apiRoutes);

// Rota para servir o frontend (SPA - Single Page Application)
app.get('/', (req, res) => {
  res.sendFile(path.join('public', 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

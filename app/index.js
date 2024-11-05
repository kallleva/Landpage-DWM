// app.js
const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para parsear JSON
app.use(express.json());

// Importar e usar rotas do backend
const router = require('./backend/routers/api');
app.use('/api', router); // Todas as rotas que começam com "/api" vão para o roteador "apiRoutes"

// Rota para servir o frontend (SPA - Single Page Application)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

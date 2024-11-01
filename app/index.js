const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para parsear JSON
app.use(express.json());

// Importar e usar rotas do backend
const apiRoutes = require('./backend/routers/api');
app.use('/api', apiRoutes);

// Rota para servir o frontend (SPA - Single Page Application)
app.get('/', (req, res) => {
  // Usando o caminho absoluto para o arquivo index.html
  const indexPath = path.join(__dirname, 'public', 'index.html');
  console.log("Caminho do index.html:", indexPath); // Confirmar o caminho absoluto no console
  res.sendFile(indexPath);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

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

//Rota para servir o frontend (SPA - Single Page Application)
app.get('/', (req, res) => {
  // Usando caminho fixo
  const indexPath = path.join(__dirname, 'index.html'); // Caminho fixo relativo
  console.log('Tentando enviar arquivo:', indexPath); // Log para verificar o caminho
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('Erro ao enviar o arquivo:', err); // Log do erro
      res.status(err.status).end();
    }
  });
});




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

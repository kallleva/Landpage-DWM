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
  const filePath = path.join(__dirname, 'public', 'index.html');
  console.log('Tentando enviar arquivo:', filePath);
  try {
    res.sendFile(filePath);
  } catch (error) {
    console.error('Erro ao enviar o arquivo:', error);
    res.status(500).send('Erro ao enviar o arquivo');
  }
});

app.get('/test', (req, res) => {
  res.send('Servidor está funcionando!');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


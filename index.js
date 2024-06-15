// app.js
const express = require('express');
const path = require('path');
const app = express();

// Use a porta fornecida pelo ambiente, se não estiver disponível use a porta 3000
const PORT = process.env.PORT || 3000;

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'Public')));

// Rota padrão que serve o 'index.html'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

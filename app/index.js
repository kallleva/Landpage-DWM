// const express = require('express');
// const path = require('path');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware para servir arquivos estáticos do frontend
// app.use(express.static(path.join(__dirname, 'public')));

// // Middleware para parsear JSON
// app.use(express.json());

// // Importar e usar rotas do backend
// const apiRoutes = require('./backend/routers/api');
// app.use('/api', apiRoutes);

// // Rota para servir o frontend (SPA - Single Page Application)
// app.get('/', (req, res) => {
//   // Fornecendo o diretório raiz explicitamente
//   res.sendFile('index.html', { root: path.join(__dirname, 'public') });
// });

// // Iniciar o servidor
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });




// app.js
const express = require('express');
const path = require('path');
const app = express();
// Use a porta fornecida pelo ambiente, se não estiver disponível use a porta 3000
const PORT = process.env.PORT || 3000;
// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));
// Rota padrão que serve o 'index.html'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'app', 'public', 'index.html'));
});
// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
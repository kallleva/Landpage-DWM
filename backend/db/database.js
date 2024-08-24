// backend/database.js

const { Pool } = require('pg');

// Configurações da conexão com o banco de dados
const pool = new Pool({
  user: 'postgres',           // Substitua pelo seu usuário do banco de dados
  host: 'localhost',          // Host do banco de dados
  database: 'postgres',       // Nome do banco de dados
  password: 'laura2018',      // Senha do banco de dados
  port: 5432,                 // Porta padrão do PostgreSQL
});

// Função genérica para realizar queries no banco de dados
module.exports = {
  query: (text, params) => pool.query(text, params),
};

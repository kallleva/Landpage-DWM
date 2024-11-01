// backend/database.js

const { Pool } = require('pg');

// Configurações da conexão com o banco de dados
const pool = new Pool({
  connectionString: 'postgresql://postgres:pXSIapcXTToUegwhSPrGhPylakajbbJr@autorack.proxy.rlwy.net:31232/railway',
  ssl: {
    rejectUnauthorized: false, // Apenas se o servidor exigir SSL. Remova se não for necessário.
  }
});

// Função genérica para realizar queries no banco de dados
module.exports = {
  query: (text, params) => pool.query(text, params),
};

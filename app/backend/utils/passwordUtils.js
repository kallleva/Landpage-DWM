const crypto = require('crypto');

// Salt fixo (não recomendado para produção)
const FIXED_SALT = 'saltoFixoParaTodosUsuarios123';

// Função para gerar hash MD5 com salt fixo e normalização
function hashPassword(password) {
  // Normaliza a senha antes de gerar o hash
  password = password.trim().toLowerCase();
  
  const hash = crypto.createHash('md5')
    .update(password + FIXED_SALT)
    .digest('hex');

  return hash
}

// Função para verificar a senha com salt fixo e normalização
const verifyPassword = (password, passwordHash) => {
  // Normaliza a senha antes de gerar o hash
  password = password.trim().toLowerCase();
  
  const hash = crypto.createHash('md5')
    .update(password + FIXED_SALT)
    .digest('hex');

  console.log('Hash gerado para comparação:', hash);
  console.log('Hash esperado:', passwordHash);

  return hash === passwordHash;
};


module.exports = { hashPassword, verifyPassword };

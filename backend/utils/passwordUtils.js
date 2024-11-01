// backend/utils/passwordUtils.js

const crypto = require('crypto');

// Função para gerar um hash com salt
function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex'); // Gera um salt aleatório
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return { salt, hash };
}

// Função para verificar a senha fornecida com o hash armazenado
function verifyPassword(password, salt, hash) {
  const hashToVerify = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return hash === hashToVerify;
}

module.exports = { hashPassword, verifyPassword };

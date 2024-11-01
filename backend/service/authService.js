// backend/service/authService.js

const userRepository = require('../repository/userRepository');
const jwt = require('jsonwebtoken');
const { verifyPassword } = require('../utils/passwordUtils');

exports.login = async (username, password) => {
  if (!username || !password) {
    throw new Error('Username and password must be provided');
  }

  const user = await userRepository.findByUsername(username);
  if (user) {
    // Comparar a senha fornecida com o hash armazenado no banco de dados
    const isPasswordValid = verifyPassword(password, user.salt, user.passwordHash);
    if (isPasswordValid) {
      const payload = { id: user.id, username: user.username };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
      return { token };
    }
  }

  

  return null; // Retorna null se as credenciais forem inválidas
};

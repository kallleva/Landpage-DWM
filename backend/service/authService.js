// backend/service/authService.js

const userRepository = require('../repository/userRepository');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.login = async (username, password) => {
  if (!username || !password) {
    throw new Error('Username and password must be provided');
  }

  const user = await userRepository.findByUsername(username);
  if (user) {
    // Comparar a senha fornecida com a senha hashada no banco de dados
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      // Definir o payload do token
      const payload = {
        id: user.id,
        username: user.username,
        // Adicione outros campos se necessário
      };

      // Gerar o token JWT
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '1h', // O token expira em 1 hora
      });

      return { token };
    }
  }

  // Se as credenciais forem inválidas, retorne null
  return null;
};

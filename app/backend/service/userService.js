// backend/service/userService.js

const userRepository = require('../repository/userRepository');
const { hashPassword } = require('../utils/passwordUtils'); // Importa do módulo
const bcrypt = require('bcrypt');

exports.createUser = async (username, password) => {
  if (!username || !password) {
    throw new Error('Username and password must be provided');
  }

  // Hash da senha com bcrypt antes de salvar no banco de dados
  const passwordHash = await hashPassword(password);

  // Chamar o repositório para criar o usuário no banco de dados
  const newUser = await userRepository.createUser(username, passwordHash);

  return newUser;
};

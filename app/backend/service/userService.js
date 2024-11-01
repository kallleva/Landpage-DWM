// backend/service/userService.js

const userRepository = require('../repository/userRepository');
const bcrypt = require('bcrypt');

exports.createUser = async (username, password) => {
  // Verificar se o username e password foram fornecidos
  if (!username || !password) {
    throw new Error('Username and password must be provided');
  }

  // Hash a senha antes de salvar no banco de dados
  const hashedPassword = await bcrypt.hash(password, 10);

  // Chamar o repositório para criar o usuário no banco de dados
  const newUser = await userRepository.createUser(username, hashedPassword);

  // Retornar o novo usuário criado
  return newUser;
};

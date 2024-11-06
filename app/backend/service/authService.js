const userRepository = require('../repository/userRepository');
const jwt = require('jsonwebtoken');
const { verifyPassword } = require('../utils/passwordUtils');

const bcrypt = require('bcrypt');



exports.login = async (username, password) => {
    
  if (!username || !password) {
    throw new Error('usuario ou senha invalida');
  }

  console.log('caiu dentro do authservice');

  
  const user = await userRepository.findByUsername(username);
  console.log(user?.username);
  
  if (user) {
    console.log('achou o usuario');
    const isPasswordValid = verifyPassword(password, user.salt, user.passwordHash);
    if (isPasswordValid) {
      const payload = { id: user.id, username: user.username };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
      return { token };
    }
  }

  return null; // Retorna null se as credenciais forem inválidas
};

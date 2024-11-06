const userRepository = require('../repository/userRepository');
const jwt = require('jsonwebtoken');
const { verifyPassword } = require('../utils/passwordUtils'); // Certifique-se de que a função existe

exports.login = async (username, password) => {
  if (!username || !password) {
    throw new Error('Usuário ou senha inválida');
  }

  console.log('Caiu dentro do authservice');

  try {
    // Buscar o usuário pelo username
    const user = await userRepository.findByUsername(username);
    console.log(user?.username);

    // Verificar se o usuário foi encontrado
    if (user) {
      console.log('Achou o usuário');
      
      // Verificar a senha com o hash MD5 armazenado
      const isPasswordValid = verifyPassword(password, user.password);
      
      // Se a senha for válida
      if (isPasswordValid) {
        const payload = { id: user.id, username: user.username };
        
        try {
          // Gerar o token JWT
          const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
          console.log('Token gerado:', token);
          return { token }; // Retorna o token aqui
        } catch (err) {
          console.error('Erro ao gerar o token:', err);
          throw new Error('Erro ao gerar o token');
        }
      } else {
        console.log('Senha inválida');
      }
    } else {
      console.log('Usuário não encontrado');
    }

    // Retorna null se as credenciais forem inválidas
    return null;
  } catch (error) {
    console.error('Erro ao processar o login:', error);
    throw new Error('Erro ao processar o login');
  }
};

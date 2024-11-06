const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { hashPassword } = require('../utils/passwordUtils'); // Importa do módulo

exports.findByUsername = async (username) => {
  try {
    return await prisma.user.findFirst({
      where: {
        username: username,
      },
      select: {
        username: true,
        password: true,
      }
    });
  } catch (error) {
    console.error('Error finding user by username:', error);
    throw new Error('Could not find user by username');
  }
};

// Criação de usuário usando hash com salt fixo e normalização
exports.createUser = async (username, password) => {
  try {
    const passwordHash = hashPassword(password);
    console.log('Hash gerado para salvar no banco:', passwordHash); // Log do hash gerado
    
    return await prisma.user.create({
      data: {
        username: username,
        password: passwordHash,
      },
    });
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Could not create user');
  }
};

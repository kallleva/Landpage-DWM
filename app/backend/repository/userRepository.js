// backend/repository/userRepository.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { hashPassword } = require('../utils/passwordUtils');

exports.findByUsername = async (username) => {
  try {
    return await prisma.user.findUnique({
      where: {
        username: username,
      },
      select: {
        username: true,
        salt: true,
        passwordHash: true,
      }
    });
  } catch (error) {
    console.error('Error finding user by username:', error);
    throw new Error('Could not find user by username');
  }
};


exports.createUser = async (username, password) => {
  try {
    const { salt, hash } = hashPassword(password); // Gera o salt e o hash
    return await prisma.user.create({
      data: {
        username: username,
        salt: salt,
        passwordHash: hash,
      },
    });
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Could not create user');
  }
};


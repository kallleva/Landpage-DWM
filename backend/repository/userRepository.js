// backend/repository/userRepository.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.findByUsername = async (username) => {
  try {
    return await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
  } catch (error) {
    console.error('Error finding user by username:', error);
    throw new Error('Could not find user by username');
  }
};

exports.createUser = async (username, password) => {
  try {
    return await prisma.user.create({
      data: {
        username: username,
        password: password,
      },
    });
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Could not create user');
  }
};

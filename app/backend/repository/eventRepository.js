// backend/repository/userRepository.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.findByEventName = async (eventname) => {
  try {
    return await prisma.event.findUnique({
      where: {
        eventname: eventname,
      },
    });
  } catch (error) {
    console.error('Error finding user by eventname:', error);
    throw new Error('Could not find user by eventname');
  }
};


exports.findEventAll = async () => {
  try {
    return await prisma.event.findMany(); // findMany sem condições retorna todos os registros
  } catch (error) {
    console.error('Error finding all events:', error);
    throw new Error('Could not find events');
  }
};

exports.createEvent = async (eventname, dataevent, localevent) => {
  try {
    return await prisma.event.create({
      data: {
        eventname: eventname,
        dataevent: dataevent,
        localevent: localevent
      },
    });
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Could not create user');
  }
};



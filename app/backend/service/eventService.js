const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Função para criar um novo agendamento
async function createEvent(eventData) {
    return await prisma.event.create({
        data: {
            eventname: eventData.eventname,
            dataevent: new Date(eventData.dataevent),
            localevent: eventData.localevent,
        },
    });
}

async function findEventByName(eventname) {
    return await prisma.event.findUnique({
        where: {
            eventname: eventname,
        },
    });
}

module.exports = { createEvent, findEventByName };


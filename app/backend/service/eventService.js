// backend/service/userService.js

const eventRepository = require('../repository/eventRepository');

exports.createEvent = async (eventname, dataevent, localevent) => {
  // Verificar se o username e password foram fornecidos
  if (!eventname, !dataevent, !localevent) {
    throw new Error('eventname and dataevent and localevent must be provided');
  }
  // Chamar o repositório para criar o usuário no banco de dados
  const newEvent = await eventRepository.createEvent(eventname, dataevent, localevent);

  // Retornar o novo usuário criado
  return newEvent;
};


exports.ListAllEvent = async () => {
    try {
      // Chamar o repositório para buscar todos os eventos no banco de dados
      const events = await eventRepository.findEventAll();
      
      // Retornar a lista de eventos encontrada
      return events;
    } catch (error) {
      console.error('Error listing all events:', error);
      throw new Error('Could not list events');
    }
};

exports.ListBynameEvent = async (eventname) => {
    try {
      // Chamar o repositório para buscar todsomente os eventos  com mesmo nome no banco de dados
      const event = await eventRepository.findByEventName(eventname);
      
      // Retornar a lista de eventos encontrada
      return event;
    } catch (error) {
      console.error('Error listing all events:', error);
      throw new Error('Could not list events');
    }
};
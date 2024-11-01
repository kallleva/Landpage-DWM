

const eventService = require('../service/eventService');

exports.createEvent = async (req, res) => {
  const { eventname, dataevent, localevent } = req.body;

  try {
    const newEvent = await eventService.createEvent(eventname, dataevent, localevent);

    res.status(201).json({ message: 'Event created successfully', event: newEvent });
  } catch (error) {
    // Lidar com erros e retornar uma resposta adequada
    res.status(500).json({ message: 'Error creating Event', error: error.message });
  }
};

exports.ListByNameEvent = async (req, res) => {
    const { eventname } = req.body;
  
    try {
      const event = await eventService.ListBynameEvent(eventname);

      res.json(event.json);
    
    } catch (error) {
      res.status(500).json({ message: 'Error List Event', error: error.message });
    }
};

exports.ListAllEvent = async (req, res) => {

    try {
      const event = await eventService.ListAllEvent();

      res.json(event.json);
    
    } catch (error) {
      res.status(500).json({ message: 'Error List Event', error: error.message });
    }
};




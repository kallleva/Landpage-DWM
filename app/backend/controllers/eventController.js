const eventService = require('../service/eventService');

// Controlador para criar um novo agendamento
async function createEvent(req, res) {
    try {
        const { nome, email, telefone, dataevent, horario, fotografo } = req.body;

        // Log para o conteúdo do req.body
        console.log('req.body--> ', req.body);
    
        // Log para cada parâmetro
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Telefone:', telefone);
        console.log('Data do Evento:', dataevent);
        console.log('Horário:', horario);
        console.log('Fotógrafo:', fotografo);
    
        // Verifica se todos os campos estão preenchidos
        if (!nome || !email || !telefone || !dataevent || !horario || !fotografo) {
            return res.status(400).json({ error: 'Por favor, preencha todos os campos' });
        }
    
        // Preparando dados para o agendamento
        const eventData = {
            eventname: `${nome} - ${fotografo}`,
            dataevent: `${dataevent}T${horario}:00Z`, // Combina data e hora
            localevent: 'Estúdio Central', // Local fixo ou pode vir do formulário
        };

        console.log('eventData --> ', eventData);

        // Verificando se o evento já existe
        const existingEvent = await eventService.findEventByName(eventData.eventname);
        if (existingEvent) {
            return res.status(400).json({ error: 'Já existe um evento com este nome.' });
        }

        // Chamando o serviço para criar o agendamento
        const newEvent = await eventService.createEvent(eventData);
        
        // Verifica se o novo evento foi criado com sucesso
        if (newEvent) {
            res.status(201).json(newEvent);
        } else {
            res.status(400).json({ error: 'Erro ao criar o evento' });
        }
    } catch (error) {
        console.error('Erro:', error);
        res.status(500).json({ error: 'Erro ao criar o agendamento' });
    }
}

module.exports = { createEvent };

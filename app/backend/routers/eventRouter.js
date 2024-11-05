// routes/eventRouter.js
const express = require('express');
const eventController = require('../controllers/eventController');
const router = express.Router();

// Rota para criação de um novo agendamento
console.log('cau no agendar')
router.post('/agendar', eventController.createEvent);

module.exports = router;

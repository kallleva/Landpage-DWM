// routes/eventRouter.js
const express = require('express');
const orcamentoController = require('../controllers/orcamentoController');
const router = express.Router();

// Rota para criação de um novo agendamento
console.log('cau no agendar')
router.post('/agendar', orcamentoController.createOrcamento);

module.exports = router;

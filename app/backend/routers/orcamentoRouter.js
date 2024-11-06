// routes/eventRouter.js
const express = require('express');
const orcamentoController = require('../controllers/orcamentoController');
const router = express.Router();

// Rota para criação de um novo agendamento
console.log('cau no agendar')
router.post('/agendar', orcamentoController.createOrcamento);
// Rota para listar os orçamentos (alterado de POST para GET)
router.get('/list', orcamentoController.listOrcamentos);


module.exports = router;

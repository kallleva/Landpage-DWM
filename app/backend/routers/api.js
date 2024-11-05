// backend/routes/api.js

const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');
const authRoutes = require('./auth');
const userRoutes = require('./user');
const portfolioRoutes = require('./portfolio');
const eventRouter = require('./eventRouter');
const orcamentoRouter = require('./orcamentoRouter');


// Defino a rota auth para login
router.use('/auth', authRoutes);

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Rota de Agendamento
router.use('/orcamento', orcamentoRouter);
router.use('/event', eventRouter);


// // Defino a rota portfolio para coisas envolvidas ao portfólio
// router.use('/port', portfolioRoutes);

module.exports = router;

// backend/routes/api.js

const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');
const authRoutes = require('./auth');
const userRoutes = require('./user');
const portfolioRoutes = require('./portfolio');
const eventRouter = require('./event');

// Defino a rota auth para login
router.use('/auth', authRoutes);

// Defino a rota user para coisas envolvidas ao usuário
//router.use('/user', userRoutes);

router.use('/event', eventRouter);

// // Defino a rota portfolio para coisas envolvidas ao portfólio
// router.use('/port', portfolioRoutes);

// Rota para saber se está funcionando o backend
router.get('/example', exampleController.getExample);

module.exports = router;

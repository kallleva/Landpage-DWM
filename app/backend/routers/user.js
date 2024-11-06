// backend/routes/user.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

// // Rota para criar um novo usuário
router.post('/create', userController.createUser);

module.exports = router;

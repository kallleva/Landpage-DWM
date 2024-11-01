// backend/routes/auth.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Defina a rota de login
router.post('/login', authController.login);

module.exports = router;

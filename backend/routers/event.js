// backend/routes/user.js

const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Rota para criar um novo usuário
router.post('/create', eventController.createEvent);
router.post('/list', eventController.ListByNameEvent);
router.post('/listall', eventController.ListAllEvent);

module.exports = router;

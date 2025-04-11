const express = require('express');
const router = express.Router();
const { handleRegister } = require('../controllers/registerController');

console.log('handleRegister:', handleRegister); // should log: [Function: handleRegister]


router.post('/', handleRegister);

module.exports = router;

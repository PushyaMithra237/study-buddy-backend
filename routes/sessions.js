const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');

// Get all sessions for a user
router.get('/', sessionController.getUserSessions);

// Create a new session
router.post('/', sessionController.createSession);

// Update a session by ID
router.put('/:id', sessionController.updateSession);

// Delete a session by ID
router.delete('/:id', sessionController.deleteSession);

module.exports = router;

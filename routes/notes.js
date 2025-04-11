const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

// Get all notes (filter by user in body for now)
router.get('/', noteController.getAllNotes);

// Create a new note
router.post('/', noteController.createNote);

// Update a note by ID
router.put('/:id', noteController.updateNote);

// Delete a note by ID
router.delete('/:id', noteController.deleteNote);

module.exports = router;

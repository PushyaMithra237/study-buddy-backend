const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Get todos (filter by user or topic)
router.get('/', todoController.getTodos);

// Create a new todo
router.post('/', todoController.createTodo);

// Update a todo
router.put('/:id', todoController.updateTodo);

// Delete a todo
router.delete('/:id', todoController.deleteTodo);

module.exports = router;

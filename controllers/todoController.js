// controllers/todoController.js
const Todo = require('../models/Todo');

// Get all todos for a specific user or topic
const getTodos = async (req, res) => {
  const { user, topic } = req.query;

  const filter = {};
  if (user) filter.assignedTo = user;
  if (topic) filter.topic = topic;

  try {
    const todos = await Todo.find(filter).sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new todo item
const createTodo = async (req, res) => {
  const { title, topic, createdBy, assignedTo, sessionId } = req.body;

  if (!title || !topic || !createdBy || !assignedTo) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  try {
    const todo = new Todo({ title, topic, createdBy, assignedTo, sessionId });
    const saved = await todo.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a todo item (mark complete, edit title, etc.)
const updateTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const updated = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Todo not found.' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a todo item
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Todo.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Todo not found.' });
    res.json({ message: 'Todo deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
};

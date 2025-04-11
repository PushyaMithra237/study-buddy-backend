// controllers/noteController.js
const Note = require('../models/Note');

// Get all notes for a user
const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.body.user });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new note
const createNote = async (req, res) => {
  const { user, title, content, category, tags } = req.body;

  if (!user || !title || !content) {
    return res.status(400).json({ message: 'User, title, and content are required.' });
  }

  try {
    const newNote = new Note({ user, title, content, category, tags });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a note by ID
const updateNote = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedNote = await Note.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedNote) return res.status(404).json({ message: 'Note not found.' });
    res.json(updatedNote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a note by ID
const deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) return res.status(404).json({ message: 'Note not found.' });
    res.json({ message: 'Note deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote
};

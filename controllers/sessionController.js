// controllers/sessionController.js
const Session = require('../models/Session');

// Get all sessions for a user
const getUserSessions = async (req, res) => {
  const { user } = req.query;
  if (!user) return res.status(400).json({ message: 'Username is required.' });

  try {
    const sessions = await Session.find({ participants: user }).sort({ scheduledFor: 1 });
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new session
const createSession = async (req, res) => {
  const { title, participants, note, scheduledFor, createdBy } = req.body;

  if (!title || !participants || !scheduledFor || !createdBy) {
    return res.status(400).json({ message: 'Title, participants, scheduled date, and creator are required.' });
  }

  try {
    const session = new Session({ title, participants, note, scheduledFor, createdBy });
    const saved = await session.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a session
const updateSession = async (req, res) => {
  const { id } = req.params;

  try {
    const updated = await Session.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Session not found.' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a session
const deleteSession = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Session.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Session not found.' });
    res.json({ message: 'Session deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getUserSessions,
  createSession,
  updateSession,
  deleteSession
};

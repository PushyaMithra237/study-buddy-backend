// models/Todo.js
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  topic: {
    type: String,
    required: true
  },
  createdBy: {
    type: String,
    required: true
  },
  assignedTo: [{
    type: String, // usernames
    required: true
  }],
  sessionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Session'
  }
}, { timestamps: true });

module.exports = mongoose.model('Todo', todoSchema);

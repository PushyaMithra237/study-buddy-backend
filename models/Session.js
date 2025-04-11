// models/Session.js
const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  participants: [{
    type: String, // could later be ObjectId referencing User
    required: true
  }],
  note: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Note'
  },
  scheduledFor: {
    type: Date,
    required: true
  },
  createdBy: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['upcoming', 'completed', 'cancelled'],
    default: 'upcoming'
  }
}, { timestamps: true });

module.exports = mongoose.model('Session', sessionSchema);

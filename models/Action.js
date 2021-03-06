const mongoose = require('mongoose');

const ActionSchema = new mongoose.Schema({
  // id is automatically generated by mongoDB
  title: String,
  description: String,
  // Date posted
  date: {
    type: Date,
    default: Date.now
  },
  // User who posted the Action
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  // True if Action got enough votes
  approved: {
    type: Boolean,
    default: false
  },
  // location
  latitude: Number,
  longitude: Number,
  // if approved
  start_date: Date,
  end_date: Date,
  // Draft / published
  status: String,
  // Number of votes (only in favor)
  votes: Number
});

module.exports = mongoose.model('Action', ActionSchema);

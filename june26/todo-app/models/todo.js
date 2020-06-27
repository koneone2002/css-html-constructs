const mongoose = require('mongoose');

// create schema for todo
const TodoSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  action: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('todo', TodoSchema);

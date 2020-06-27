const mongoose = require('mongoose');

// create schema for todo
const TodoSchema = mongoose.Schema({
  action: {
    type: String,
    required: [true, 'The todo text field is required']
  }
});

module.exports = mongoose.model('todo', TodoSchema);

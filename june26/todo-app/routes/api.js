const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get the list of todos
router.get('/todos', (req, res) => {
  // Todo.find({}, 'action')
  //   .then(data => res.json(data))
  //   .catch(next);
  res.send('Get all todos');
});

// Add a todo to the list
router.post('/', async (req, res) => {
  res.send('Add a todo');
});

// Update a todo
router.put('/todos:id', (req, res) => {
  res.send('Update a todo');
});

// Delete a todo
router.delete('/todos:id', (req, res) => {
  // Todo.findOneAndDelete({ _id: req.params.id })
  //   .then(data => res.json(data))
  //   .catch(next);
  res.send('Delete a todo');
});

module.exports = router;

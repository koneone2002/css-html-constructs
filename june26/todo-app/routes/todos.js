const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get the list of todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find({
      // user: req.user.id
    });
    res.json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
  // res.send('Get all todos');
});

// Add a todo to the list
router.post('/', async (req, res) => {
  const { name, email, phone, action } = req.body;
  try {
    const newTodo = new Todo({
      name,
      email,
      phone,
      action
      // user: req.user.id
    });
    const todo = await newTodo.save();
    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
  // res.send(req.body);
});

// Update a todo
router.put('/:id', async (req, res) => {
  // res.send('Update a todo');
  const { name, email, phone, action } = req.body;
  const todoFields = {};
  if (name) todoFields.name = name;
  if (email) todoFields.email = email;
  if (phone) todoFields.phone = phone;
  if (action) todoFields.action = action;
  try {
    let todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }
    todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { $set: todoFields },
      { new: true }
    );
    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  try {
    let todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }
    await Todo.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Todo Removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

  //res.send('Delete a todo');
});

module.exports = router;

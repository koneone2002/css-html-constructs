const express = require('express');
const connectDB = require('./config/db');
const app = express();

//Connect to Database
connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.json({
    msg: 'Welcome to the Todo API...'
  })
);

// Define Routes
app.use('/api/todos', require('./routes/todos'));

const PORT = process.env.PORT || 5010;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const express = require('express');
const connectDB = require('./config/db');
// require('dotenv').config();

const app = express();
// Connect to Database
connectDB();

const port = process.env.PORT || 5010;

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

// app.use((req, res, next) => {
//   res.send('Welcome to Express');
// });
app.get('/', (req, res) =>
  res.json({
    msg: 'Welcome to the Todo API...'
  })
);

// Define Routes
app.use('/api/todos', require('./routes/todos'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
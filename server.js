require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;
const connectDB = require('./config/dbConn');
const mongoose = require('mongoose');

// MIDDLEWARE
app.use(express.json()); // ✅ JSON parsing
app.use(express.urlencoded({ extended: true })); // ✅ URL-encoded form parsing

// ROUTES
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));
app.use('/notes',require('./routes/notes'));
app.use('/match-buddies', require('./routes/match'));
app.use('/sessions', require('./routes/sessions'));
app.use('/todos', require('./routes/todos'));



//connect to MongoDB
connectDB();

mongoose.connection.once('open',() =>{
  console.log('connected to mongoDB');
  app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

})



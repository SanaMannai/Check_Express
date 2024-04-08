// app.js

const express = require('express');
const { checkWorkingHours } = require('./middleware');

const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to serve static files
app.use(express.static('public'));

// Custom middleware to check working hours for all routes except '/out-of-office'
app.use((req, res, next) => {
  if (req.path !== '/out-of-office') {
    checkWorkingHours(req, res, next);
  } else {
    next();
  }
});

// Routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/out-of-office', (req, res) => {
  res.render('out-of-office');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

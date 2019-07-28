const express = require('express');

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('My app home');
});

app.listen(5000);

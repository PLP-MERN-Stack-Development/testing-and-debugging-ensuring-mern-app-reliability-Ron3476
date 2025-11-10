const express = require('express');
const app = express();
const errorHandler = require('./middleware/errorHandler');
app.use(express.json());

// Simple in-memory "users" for demo (replace with real DB/models)
const users = [];

app.post('/api/users', (req, res, next) => {
  try {
    const { username } = req.body;
    if (!username) {
      const err = new Error('username required');
      err.status = 400;
      throw err;
    }
    const user = { id: String(users.length + 1), username };
    users.push(user);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

app.get('/api/ping', (req, res) => res.json({ ok: true }));

// global error handler
app.use(errorHandler);

module.exports = app;

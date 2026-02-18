const express = require('express');
const path = require('path');
const { jstMiddleware } = require('@luilautre/jst');

const app = express();

app.use(jstMiddleware({
  racine: path.resolve('./'),
  public: path.join(path.resolve('./'), 'public')
}));

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

module.exports = app;

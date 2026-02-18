const express = require('express');
const path = require('path');
const { jstMiddleware } = require('@luilautre/jst');

const app = express();

app.use(jstMiddleware({
  racine: path.resolve('./'),
  public: path.join(path.resolve('./'), 'public')
  page404: 'index.html'
}));

module.exports = app;

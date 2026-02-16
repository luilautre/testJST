const path = require('path');
const { creerApp } = require('@luilautre/jst');
const fs = require('fs');

const racine = path.resolve('./');

const app = creerApp({
  racine: racine,
  public: path.join(racine, 'public')
});

module.exports = app;

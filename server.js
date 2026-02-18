const express = require('express');
const path = require('path');
const { jstMiddleware } = require('@luilautre/jst');

const app = express();

const racine = path.resolve('./');
const dossierPublic = path.join(racine, 'public');

app.use(jstMiddleware({
  racine: racine,
  public: dossierPublic
}));

app.use((req, res) => {
  res.status(404).sendFile(path.join(dossierPublic, '404.html'));
});

module.exports = app;

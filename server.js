const path = require('path');
const { creerApp } = require('@luilautre/jst');
const fs = require('fs');

const racine = path.resolve('./');

const app = creerApp({
  racine: racine,
  public: path.join(racine, 'public')
});

module.exports = app;

app.use((req, res) => {
  const chemin404 = path.join(path.resolve('./'), 'public', 'index.html');
  if (fs.existsSync(chemin404)) {
    res.status(404).send(fs.readFileSync(chemin404, 'utf8'));
  } else {
    res.status(404).send('404 — Page introuvable');
  }
});

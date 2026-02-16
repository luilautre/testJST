const path = require('path');
const { creerApp } = require('@luilautre/jst');
const fs = require('fs');

const racine = path.resolve('./');
const dossierPublic = path.join(racine, 'public');

const app = creerApp({ racine, public: dossierPublic });

app.use((req, res) => {
  const chemin404 = path.join(dossierPublic, 'index.html');
  if (fs.existsSync(chemin404)) {
    res.status(404).send(fs.readFileSync(chemin404, 'utf8'));
  } else {
    res.status(404).send('404 — Page introuvable');
  }
});

module.exports = app;

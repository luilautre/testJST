const fs = require('fs');
const path = require('path');
const { creerApp, preprocesser, chargerVariables, chargerFonctions } = require('@luilautre/jst');

const racine = path.resolve('./');
const dossierPublic = path.join(racine, 'public');

const app = creerApp({ racine, public: dossierPublic });

app.use((req, res) => {
  const chemin404 = path.join(dossierPublic, 'index.html');
  if (fs.existsSync(chemin404)) {
    const variables = chargerVariables(racine);
    const fonctions = chargerFonctions(racine);
    const contexte  = { url: req.path, host: req.hostname, protocol: req.protocol };
    const brut      = fs.readFileSync(chemin404, 'utf8');
    const traite    = preprocesser(brut, variables, dossierPublic, contexte, fonctions);
    res.status(404).setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.send(traite);
  }
  res.status(404).send('404 — Page introuvable');
});

module.exports = app;

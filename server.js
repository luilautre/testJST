const path = require('path');
const { creerApp } = require('@luilautre/jst');
const fs = require('fs');

const racine = path.resolve('./');

const app = creerApp({ 
  racine: racine,
  public: path.join(racine, 'public')
});

// Route de debug temporaire
app.get('/_debug', (req, res) => {
  res.json({
    racine: racine,
    dirname: __dirname,
    fichiers_racine: fs.readdirSync(racine),
    fichiers_public: fs.existsSync(path.join(racine, 'public')) 
      ? fs.readdirSync(path.join(racine, 'public')) 
      : 'dossier public introuvable'
  });
});

module.exports = app;

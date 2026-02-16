const path = require('path');
const { creerApp } = require('@luilautre/jst');

const app = creerApp({ 
  racine: __dirname,        // variables.json ici
  public: path.join(__dirname, 'public')  // fichiers servis ici
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => console.log('Serveur sur http://localhost:3000'));
}

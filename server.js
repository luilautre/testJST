const path = require('path');
const { creerApp } = require('@luilautre/jst');

const app = creerApp({ 
  racine: path.resolve('./'),
  public: path.resolve('./public')
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => console.log('Serveur sur http://localhost:3000'));
}

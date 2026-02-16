const path = require('path');
const { creerApp } = require('@luilautre/jst');

const app = creerApp({ racine: path.join(__dirname, 'public') });

// Pour Vercel
module.exports = app;

// Pour local
if (require.main === module) {
  app.listen(3000, () => console.log('Serveur sur http://localhost:3000'));
}

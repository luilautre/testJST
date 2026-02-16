const path = require('path');
const { creerApp } = require('@luilautre/jst');

const app = creerApp({ racine: path.join(__dirname, 'public') });

module.exports = app;

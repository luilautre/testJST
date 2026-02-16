module.exports = {
  lien([href, texte]) {
    return `<a href="${href}">${texte || href}</a>`;
  },

  footer([annee], contexte, vars) {
    return `<footer><p>&copy; ${annee || vars._year_} ${vars.SiteAuteur || ''}</p></footer>`;
  },

  dateFormatee([locale]) {
    return new Date().toLocaleDateString(locale || 'fr-FR', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  }
};

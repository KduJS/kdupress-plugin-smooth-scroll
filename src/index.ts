const path = require('path')

module.exports = {
  name: 'kdupress-plugin-smooth-scroll',

  enhanceAppFiles: path.resolve(__dirname, 'enhanceApp.js'),

  clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js'),
}

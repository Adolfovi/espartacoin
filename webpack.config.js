const path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
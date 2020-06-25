const path = require('path');

module.exports = {
  entry: {
	  bind: [ './lib/index.js' ]
  },
  mode: 'production',
  output: {
	path: path.resolve(__dirname, "./docs/dist"),
    filename: '[name].min.js',
    library: '[name]',
    libraryTarget: 'var'
  }
};
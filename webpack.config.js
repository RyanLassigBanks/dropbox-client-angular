var webpack = require('webpack');

var config = {
  entry: './js/app.js',
  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
     loaders: [
        {
           test: /\.jsx?/,
           loader: 'babel'
        }
     ]
 }

};

module.exports = config;

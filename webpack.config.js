const path = require('path');

const ENTRY_DIR = path.join(__dirname, '/client');
const OUT_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${ENTRY_DIR}/App.jsx`,
  output: {
    path: OUT_DIR,
    filename: 'App.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'env']
        },
      },
    ],
  },
};

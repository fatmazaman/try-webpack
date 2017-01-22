const path = require('path');
const webpack = require('webpack');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'build'),
    filename: 'bundle.js'
  }
};
module.exports = config;

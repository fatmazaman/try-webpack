const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require ('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'build'),
    filename: 'bundle.js'
  },
  module:{
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        // use:['style-loader', 'css-loader'], loader and use are identical in webpack
        loader: ExtractTextPlugin.extract({
          loader:'css-loader'
        }),
        test:/\.css$/
      }

    ]
  },
  plugins:[
    new ExtractTextPlugin('style.css')
  ]
};
module.exports = config;

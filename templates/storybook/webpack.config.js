'use strict'

const path = require('path')

module.exports = {
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: path.resolve(__dirname, '..'),
      loader: 'eslint'
    }],

    loaders: [{
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader'],
      include: path.resolve(__dirname, '..', 'src')
    }]
  }
}

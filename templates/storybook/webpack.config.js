'use strict'

const { join } = require('path')

module.exports = {
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: join(__dirname, '..'),
      loader: 'eslint-loader'
    }],

    loaders: [{
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader'],
      include: join(__dirname, '..', 'src')
    }]
  }
}

var path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const entry = require('./package.json').main

module.exports = {
  entry,
  target: 'node',
  mode: 'none',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  },
  plugins: [
    new CopyPlugin([
      { from: 'manifest.konnector' },
      { from: 'package.json' },
      { from: 'README.md' },
      { from: 'assets' },
      { from: '.travis.yml' },
      { from: 'LICENSE' }
    ])
  ]
}

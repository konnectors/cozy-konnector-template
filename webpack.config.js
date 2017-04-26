var path = require('path');

module.exports = {
  entry: './index.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  }
}

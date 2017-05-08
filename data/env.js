const fs = require('fs')
const path = require('path')
const tokenPath = path.join(__dirname, 'token.json')

module.exports = {
  NODE_ENV: 'development',
  COZY_CREDENTIALS: fs.existsSync(tokenPath) ? fs.readFileSync(tokenPath, 'utf-8') : 'NO TOKEN',
  COZY_URL: 'http://cozy.tools:8080'
}

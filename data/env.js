const fs = require('fs')
const path = require('path')
module.exports = {
  COZY_CREDENTIALS: fs.existsSync(tokenPath) ? fs.readFileSync(tokenPath) : 'NO TOKEN',
  COZY_URL: 'http://cozy.tools:8080',
  COZY_FIELDS: '{"login": "login", "password": "password", "folderPath": "folderPath"}'
}

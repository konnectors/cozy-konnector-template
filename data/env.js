const fs = require('fs')
const path = require('path')
module.exports = {
  COZY_CREDENTIALS: fs.readFileSync(path.join(__dirname, 'token.json')),
  COZY_URL: 'http://cozy.tools:8080',
  COZY_FIELDS: '{"login": "login", "password": "password", "folderPath": "folderPath"}'
}

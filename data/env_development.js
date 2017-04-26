const fs = require('fs')
const path = require('path')
const tokenPath = path.join(__dirname, 'token.json')

// get the account id
const accountIdPath = path.join(__dirname, 'account.txt')
let accountId = null
if (fs.existsSync(accountIdPath)) {
  accountId = fs.readFileSync(accountIdPath, 'utf-8').trim()
} else {
  console.log(`No account id file found. Please first run yarn init:dev:account`)
}

module.exports = {
  COZY_CREDENTIALS: fs.existsSync(tokenPath) ? fs.readFileSync(tokenPath) : 'NO TOKEN',
  COZY_URL: 'http://cozy.tools:8080',
  NODE_ENV: 'development',
  COZY_FIELDS: `{"connector": "trainline", "account": "${accountId}", "folder_to_save": "trainline"}`,
  DEBUG: '*'
}

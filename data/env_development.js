const path = require('path')
const fs = require('fs')

// get the account id
const accountIdPath = path.join(__dirname, 'account.txt')
let accountId = null
if (fs.existsSync(accountIdPath)) {
  accountId = fs.readFileSync(accountIdPath, 'utf-8').trim()
} else {
  console.log(`No account id file found. Please first run yarn init:dev:account`)
  process.exit(0)
}

module.exports = Object.assign(require('./env.js'), {
  NODE_ENV: 'development',
  COZY_FIELDS: `{"connector": "mykonnector", "account": "${accountId}", "folder_to_save": "io.cozy.files.root-dir"}`,
  DEBUG: '*'
})

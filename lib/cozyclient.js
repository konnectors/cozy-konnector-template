const {Client, MemoryStorage} = require('cozy-client-js')

// COZY_CREDENTIALS
let credentials = null
try {
  credentials = JSON.parse(process.env.COZY_CREDENTIALS)
} catch (err) {
  console.log(`Please provide proper COZY_CREDENTIALS environment variable. ${process.env.COZY_CREDENTIALS} is not OK`)
  process.exit(1)
}

// COZY_URL
if (process.env.COZY_URL === undefined) {
  console.log(`Please provide COZY_URL environment variable.`)
  process.exit(1)
}

credentials.token.toAuthHeader = function () {
  return 'Bearer ' + credentials.client.registrationAccessToken
}

const cozy = new Client({
  cozyURL: process.env.COZY_URL,
  oauth: {storage: new MemoryStorage()}
})

cozy.saveCredentials(credentials.client, credentials.token)

module.exports = cozy

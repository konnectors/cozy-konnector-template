const http = require('http')
const path = require('path')
const fs = require('fs')
const log = require('debug')('gettoken')
const {Client, MemoryStorage} = require('cozy-client-js')
const manifest = require('./manifest')

// only genereate the token file if it does not already exist
const TOKEN_PATH = path.join(__dirname, '../data/token.json')
if (fs.existsSync(TOKEN_PATH)) {
  log(`${TOKEN_PATH} already present`)
  process.exit(0)
}

const cozyURL = process.argv[2] ? process.argv[2] : 'http://cozy.local:8080'
log(cozyURL, 'cozyURL')
const scopes = manifest.getScopes(path.join(__dirname, '../manifest.konnectors'))

function onRegistered (client, url) {
  let server
  return new Promise((resolve) => {
    server = http.createServer((request, response) => {
      if (request.url.indexOf('/do_access') === 0) {
        log(request.url, 'url received')
        resolve(request.url)
        response.end()
      }
    })
    server.listen(3333, () => {
      console.log('Please visit the following url to authorize the application: ', url)
    })
  })
  .then((url) => {
    server.close()
    return url
  }, (err) => {
    server.close()
    log(err, 'registration error')
    throw err
  })
}

const cozy = new Client({
  cozyURL,
  oauth: {
    storage: new MemoryStorage(),
    clientParams: {
      redirectURI: 'http://localhost:3333/do_access',
      softwareID: 'foobar',
      clientName: 'client',
      scopes: scopes
    },
    onRegistered: onRegistered
  }
})

cozy.authorize().then((creds) => {
  fs.writeFileSync(TOKEN_PATH, JSON.stringify(creds))
  log(TOKEN_PATH, 'file saved')
  process.exit()
})

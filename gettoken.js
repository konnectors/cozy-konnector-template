const http = require('http')
const path = require('path')
const {Client, MemoryStorage} = require('cozy-client-js')
const manifest = require('./lib/manifest')

const cozyURL = process.argv[2] ? process.argv[2] : 'http://cozy.local:8080'

const scopes = manifest.getScopes(path.join(__dirname, 'manifest.konnectors'))

function onRegistered (client, url) {
  let server
  return new Promise((resolve) => {
    server = http.createServer((request, response) => {
      if (request.url.indexOf('/do_access') === 0) {
        console.log('Received access from user with url', request.url)
        resolve(request.url)
        response.end()
      }
    })
    server.listen(3333, () => {
      console.log('Please visit the following url to authorize the application: ', url)
    })
  })
  .then(
      (url) => { server.close(); return url },
      (err) => { server.close(); throw err }
      )
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
  require('fs').writeFileSync(path.join(__dirname, '/token.json'), JSON.stringify(creds))
  console.log('File saved in ' + path.join(__dirname, '/token.json'))
  process.exit()
})

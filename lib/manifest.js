const fs = require('fs')
const log = require('debug')('manifest')

module.exports = {
  getScopes(manifestPath) {
    // get the permissions from the manifest.konnector file
    const permissions = JSON.parse(fs.readFileSync(manifestPath)).permissions

    // convert the permissions into scopes
    let scopes = []
    for (let key in permissions) {
      scopes.push(permissions[key].type)
    }
    log(scopes, 'scopes found in the manifest')

    return scopes
  }
}

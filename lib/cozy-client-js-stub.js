const fs = require('fs')
const path = require('path')
const log = require('debug')('cozy-client-js-stub')
let fixture = {}
const FIXTURE_PATH = path.resolve(__dirname, '../data/fixture.json')
if (fs.existsSync(FIXTURE_PATH)) {
  log(`Found ${FIXTURE_PATH} fixture file`)
  fixture = require(FIXTURE_PATH)
}

module.exports = {
  data: {
    create (doctype, item) {
      console.log(item, `creating ${doctype}`)
      return Promise.resolve(item)
    },
    updateAttributes (doctype, id, attrs) {
      console.log(attrs, `updating ${id} in ${doctype}`)
      return Promise.resolve({})
    },
    defineIndex (doctype) {
      return Promise.resolve({doctype})
    },
    query (index) {
      let result = null
      if (fixture[index.doctype]) {
        result = fixture[index.doctype]
      } else {
        result = []
      }
      return Promise.resolve(result)
    },
    delete () {
      return Promise.resolve({})
    }
  }
}

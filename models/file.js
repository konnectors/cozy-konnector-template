const request = require('request')
const log = require('printit')({prefix: 'konnectors'})
const cozy = require('../lib/cozyclient')

module.exports = {
  isPresent (fullPath, callback) {
    cozy.files.statByPath(fullPath)
    .then(file => {
      callback(null, true)
    })
    .catch(err => callback(null, false))
  },
  createNew (fileName, path, url, tags, callback, requestoptions) {
    cozy.files.statByPath(path)
    .then(folder => {
      let options = {}
      if (requestoptions) {
        options = requestoptions
        if (typeof options.form === 'function') {
          options.form = options.form(options.entry)
        }
        options.uri = url
      } else {
        options = {
          uri: url,
          method: 'GET',
          jar: true
        }
      }

      log.info(`Downloading file at ${url}...`)
      return cozy.files.create(request(options), {name: fileName, dirID: folder._id})
    })
    .then(thefile => {
      callback(null, thefile)
    })
    .catch(err => callback(err))
  }
}

// Required to save file fetched via a konnector.
// module.exports = (File = americano.getModel('File', {
//   path: String,
//   name: String,
//   creationDate: String,
//   lastModification: String,
//   class: String,
//   mime: String,
//   size: Number,
//   binary: Object,
//   modificationHistory: Object,
//   clearance: [Object],
//   tags: [String]
// }))
// File.byFullPath = (params, callback) => {
//   File.request('byFullPath', params, callback)
// }

// Tells if a file is already stored in the Cozy at the given path.

// Create a new File object that will be displayed inside the file application.
// The binary attached to the file is downloaded from a given url.
// Given tags are associated with the newly created file.

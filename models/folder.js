const async = require('async')
const cozy = require('../lib/cozyclient')

// Folder model is used to list the list of available folders in the user's
// Cozy. It's required for konnectors that download files like bill PDFs.
module.exports = {
  mkdirp (path, callback) {
    const cleanPath = path.charAt(0) === '/' ? path.substring(1) : path
    if (cleanPath.length === 0) { return callback(new Error('empty path')) }

    const folders = cleanPath.split('/')
    const createFolder = (folder, callback) => {
      const folderIndex = folders.indexOf(folder)
      return this.mkdir({
        name: folder,
        path: [''].concat(folders.slice(0, folderIndex)).join('/')
      }, callback)
    }

    return async.eachSeries(folders, createFolder, callback)
  },
  mkdir ({name, path}, callback) {
    if (name.length === 0) { return callback(null, {path}) }

    return this.isPresent({name, path}, (err, isPresent) => {
      if (err) return callback(err)
      if (isPresent) {
        return callback(null, {name, path})
      } else {
        return this.createNewFolder({name, path}, callback)
      }
    })
  },
  isPresent ({name, path}, callback) {
    cozy.files.statByPath(`${path}/${name}`)
    .then(folder => {
      callback(null, true)
    })
    .catch(err => callback(null, false))
  },
  createNewFolder (folder, callback) {
    const path = (folder.path !== '') ? folder.path : '/'
    cozy.files.statByPath(path)
    .then(file => {
      return cozy.files.createDirectory({name: folder.name, dirID: file._id})
    })
    .then(() => {
      callback(null, folder)
    })
    .catch(err => callback(err))
  }
}

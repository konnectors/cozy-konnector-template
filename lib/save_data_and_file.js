const async = require('async')
const naming = require('./naming')
const moment = require('moment')
const Folder = require('../models/folder')
const File = require('../models/file')

// Fetcher layer that creates an object in database for each entry. If a field
// named pdfurl is is set on the entry, it downloads the file and creates a Cozy
// File in the folder given in the options object.
//
// It expects to find the list of entries in the "filtered" field. If the
// filtered field is null, it checks for the  "fetched" field.
module.exports = (log, model, options, tags) => {
  return function (requiredFields, entries, body, next) {
    const entriesToSave = entries.filtered || entries.fetched
    const path = requiredFields.folderPath

    const normalizedPath = path.charAt(0) === '/'
      ? path : `/${path}`

    // For each entry...
    return async.eachSeries(entriesToSave, function (entry, callback) {
      if (!(entry.date instanceof moment)) {
        log.info('Bill creation aborted')
        return callback('Moment instance expected for date field')
      }

      const fileName = naming.getEntryFileName(entry, options)
      const entryLabel = entry.date.format('MMYYYY')

      function createFileAndSaveData (entry, entryLabel) {
        File.isPresent(`${normalizedPath}/${fileName}`, (err, result) => {
          if (err) return callback(err)
          if (result === false) {
            const { pdfurl } = entry

            return Folder.mkdirp(normalizedPath, function () {
              if (options.requestoptions) {
                options.requestoptions.entry = entry
              }
              return File.createNew(fileName, normalizedPath, pdfurl, tags,
                  onCreated, options.requestoptions)
            })
          } else {
            onCreated()
          }
        })
      }

      function onCreated (err) {
        if (err) {
          log.raw(err)
          log.info(`File for ${entryLabel} not created.`)
        }
        return callback(null)
      }

      log.info(`import for entry ${entryLabel} started.`)
      if (entry.pdfurl != null) {
        // It creates a file for the PDF.
        return createFileAndSaveData(entry, entryLabel)
      } else {
        // If there is no file link set, it saves only data.
        log.info(`No file to download for ${entryLabel}.`)
      }
    }, function (err) {
      if (err) {
        log.error(err)
        return next()
      }

      const opts = {
        entries: entries.fetched,
        folderPath: normalizedPath,
        nameOptions: options,
        tags,
        model,
        log
      }
      return checkForMissingFiles(opts, () => next())
    })
  }
}

// For each entry, ensure that the corresponding file exists in the Cozy Files
// application. If it doesn't exist, it creates the file by downloading it
// from its url.
var checkForMissingFiles = function (options, callback) {
  const {entries, folderPath, nameOptions, tags, log} = options

  return async.eachSeries(entries, function (entry, done) {
    const fileName = naming.getEntryFileName(entry, nameOptions)
    let path = `${folderPath}/${fileName}`

    // Check if the file is there.
    return File.isPresent(path, function (err, isPresent) {
      if (err) {
        log.error(err)
        return done()
      }
      // If it's there, it does nothing.
      if (isPresent || (entry.pdfurl == null)) { return done() }

      // If it's not there, it creates it.
      const url = entry.pdfurl
      path = folderPath

      return Folder.mkdirp(path, () =>
          File.createNew(fileName, path, url, tags, function (err, file) {
            if (err) {
              log.error('An error occured while creating file')
              return log.raw(err)
            } else {
              done()
            }
          })
      )
    })
  }, err => {
    if (err) {
      log.error(err)
    }
    return callback()
  })
}

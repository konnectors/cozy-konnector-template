// This is a default simple connector made to show you some common libs which can be used
// This connector fetches some cat images from the qwant api (which is more open than the google one)

'use strict'

const {baseKonnector, filterExisting, saveDataAndFile, models} = require('cozy-konnector-libs')
const Kitten = models.baseModel.createNew({
  name: 'io.cozy.kitten'
})

module.exports = baseKonnector.createNew({
  name: 'io.cozy.kitten',
  models: [],
  // fetchOperation is the list of function which will be called in sequence with the following
  // parameters :
  // requiredFields : the list of attributes of your connector that the user can choose (often login and password)
  // entries : it is an object which is passed accross the functions
  // data : another object passed accross function, not used
  // next : this is a callback you have to call when the task of the current function is finished
  fetchOperations: [
    fetchKittens,
    customFilterExisting,
    customSaveDataAndFile
  ]
})

function fetchKittens (requiredFields, entries, data, next) {
  let request = require('request')
  // request-debug is a module which can trace and display in the standard output all the internet
  // requests made by the konnector with the request module or request-promise also.
  // require('request-debug')(request)

  // Here we define the default parameters used in any http request made by the request modules so
  // that you do not have to fill it every time. Here we only do one request but it can be usefull
  // for a real connector.
  request = request.defaults({
    json: true,
    headers: {
      // a lot of web service do not want to be called by robots and then check the user agent to
      // be sure they are called by a browser. This user agent works most of the time.
      'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:36.0) ' +
                    'Gecko/20100101 Firefox/36.0'
    }
  })
  request({
    uri: 'https://api.qwant.com/api/search/images',
    qs: {
      q: 'chatons',
      count: 10
    }
  }, function (err, response, body) {
    // Error handling. If there was an error in the previous request, we directly call next filling
    // the first argument which is the error message. Then the connector is directly stopped.
    if (err) return next(err.message)

    if (body && body.data && body.data.result && body.data.result.items) {
      // entries.fetched is used by filterExisting to check if some of its items already exist
      entries.fetched = body.data.result.items.map(item => ({
        title: item.title,
        pdfurl: item.media,
        // uniqueId will be the final name of the saved file, it is also used to check if the file
        // is already there and not fetch a duplicate version of it
        uniqueId: getFileName(item.media) + '_' + item._id
      }))
      next()
    }
  })

  function getFileName (caturl) {
    // from http://tout-en-couleur.e-monsite.com/medias/images/holy.jpg to holy
    const path = require('path')
    const parsed = require('url').parse(caturl)
    return path.parse(path.basename(parsed.pathname)).name
  }
}

function customFilterExisting (requiredFields, entries, data, next) {
  // filterExisting will check if some items in entries.fetched already exist in database and pout
  // the not existing ones in entries.filtered
  filterExisting(null, Kitten)(requiredFields, entries, data, next)
}

function customSaveDataAndFile (requiredFields, entries, data, next) {
  // read items in entries.fetched or entries.filtered and put them in database. If there is a
  // pdfurl attribute in some items, it will download the corresponding file and put it in your
  // cozy
  const fnsave = saveDataAndFile(null, Kitten, {
    extension: 'jpg'
  })
  fnsave(requiredFields, entries, data, next)
}

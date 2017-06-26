'use strict'

// This is a default simple connector made to show you some common libs which can be used
// This connector fetches some cat images from the qwant api (which is more open than the google one)
let request = require('request-promise')
const {BaseKonnector, saveFiles} = require('cozy-konnector-libs')

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

// request-debug is a module which can trace and display in the standard output all the internet
// requests made by the konnector with the request module or request-promise also.
// require('request-debug')(request)

new BaseKonnector(requiredFields => {
  return request({
    uri: 'https://api.qwant.com/api/search/images',
    qs: {
      q: 'chatons',
      count: 10
    }
  })
  .then(body => {
    let result = []
    if (body && body.data && body.data.result && body.data.result.items) {
      // entries.fetched is used by filterExisting to check if some of its items already exist
      result = body.data.result.items.map(item => ({fileurl: item.media}))
    }
    return result
  })
  .then(entries => saveFiles(entries, requiredFields.folderPath))
  // .then(result => console.log(result, 'result'))
})

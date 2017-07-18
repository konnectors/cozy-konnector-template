'use strict'

// This is a default simple connector made to show you some common libs which can be used
// This connector fetches some cat images from the qwant api (which is more open than the google one)
const {BaseKonnector, saveFiles, request} = require('cozy-konnector-libs')

const rq = request()

module.exports = new BaseKonnector(requiredFields => {
  return rq({
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

const { BaseKonnector, requestFactory, saveFiles, addData, scrape } = require('cozy-konnector-libs')
const request = requestFactory({ cheerio: true })

const baseUrl = 'http://books.toscrape.com'

module.exports = new BaseKonnector(start)

// The start function is run by the BaseKonnector instance only when it got all the account
// information (fields). When you run this connector yourself in "standalone" mode or "dev" mode,
// the account information come from ./konnector-dev-config.json file
function start (fields) {
  // The BaseKonnector instance expects a Promise as return of the function
  return request(`${baseUrl}/index.html`)
  .then($ => {
    // cheerio (https://cheerio.js.org/) uses the same api as jQuery (http://jquery.com/)
    // here I do an Array.from to convert the cheerio fake array to a real js array.
    const entries = scrape($, {
      title: {
        sel: 'h3 a',
        attr: 'title'
      },
      price: {
        sel: '.price_color',
        fn: normalizePrice
      },
      url: {
        sel: 'h3 a',
        fn: $el => `${baseUrl}/${$el.attr('title')}`
      },
      fileurl: {
        sel: 'img',
        fn: $el => `${baseUrl}/${$el.attr('src')}`
      },
      filename: {
        sel: 'h3 a',
        fn: $el => `${$el.attr('title')}.jpg`
      }
    }, 'article')
    return addData(entries, 'com.toscrape.books')
    .then(() => saveFiles(entries, fields))
  })
}

// convert a price string to a float
function normalizePrice ($price) {
  return parseFloat($price.text().trim().replace('£', ''))
}

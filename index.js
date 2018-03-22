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
    const entries = scrape($, {
      title: {
        sel: 'h3 a',
        attr: 'title'
      },
      price: {
        sel: '.price_color',
        parse: price => parseFloat(price.trim().replace('£', ''))
      },
      url: {
        sel: 'h3 a',
        attr: 'title',
        parse: url => `${baseUrl}/${url}`
      },
      fileurl: {
        sel: 'img',
        attr: 'src',
        parse: src => `${baseUrl}/${src}`
      },
      filename: {
        sel: 'h3 a',
        attr: 'title',
        parse: title => `${title}.jpg`
      }
    }, 'article')
    return addData(entries, 'com.toscrape.books')
    .then(() => saveFiles(entries, fields))
  })
}

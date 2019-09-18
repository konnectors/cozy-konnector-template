const {
  BaseKonnector,
  scrape,
  saveBills,
  log,
  utils,
  errors
} = require('cozy-konnector-libs')

const Browser = require('cozy-konnector-libs/dist/libs/CozyBrowser')
const browser = new Browser()
const cheerio = require('cheerio')

const VENDOR = 'template'
const baseUrl = 'http://books.toscrape.com'

module.exports = new BaseKonnector(start)

// The start function is run by the BaseKonnector instance only when it got all the account
// information (fields). When you run this connector yourself in "standalone" mode or "dev" mode,
// the account information come from ./konnector-dev-config.json file
// cozyParameters are static parameters, independents from the account. Most often, it can be a
// secret api key.
async function start(fields, cozyParameters) {
  log('info', 'Authenticating ...')
  if (cozyParameters) log('debug', 'Found COZY_PARAMETERS')
  await authenticate(fields.login, fields.password)
  log('info', 'Successfully logged in')

  log('info', 'Fetching the list of documents')
  await browser.visit(`${baseUrl}/index.html`)

  const $ = cheerio.load(browser.html())
  log('info', 'Parsing list of documents')
  const documents = await parseDocuments($)

  // Here we use the saveBills function even if what we fetch are not bills,
  // but this is the most common case in connectors
  log('info', 'Saving data to Cozy')
  await saveBills(documents, fields, {
    // This is a bank identifier which will be used to link bills to bank operations. These
    // identifiers should be at least a word found in the title of a bank operation related to this
    // bill. It is not case sensitive.
    identifiers: ['books'],
    sourceAccount: this.accountId,
    sourceAccountIdentifier: fields.login
  })
}

// This shows authentication using the [signin function](https://github.com/konnectors/libs/blob/master/packages/cozy-konnector-libs/docs/api.md#module_signin)
// even if this in another domain here, but it works as an example
async function authenticate(username, password) {
  await browser.visit('http://quotes.toscrape.com/login')
  await browser.fill('#username', username)
  await browser.fill('#password', password)
  await browser.pressButton(`[type=submit]`)

  if (
    !browser.redirected ||
    browser.location._url !== 'http://quotes.toscrape.com/'
  ) {
    log('error', browser.query('.error').innerHTML)
    throw new Error(errors.LOGIN_FAILED)
  }
}

// The goal of this function is to parse a HTML page wrapped by a cheerio instance
// and return an array of JS objects which will be saved to the cozy by saveBills
// (https://github.com/konnectors/libs/blob/master/packages/cozy-konnector-libs/docs/api.md#savebills)
function parseDocuments($) {
  // You can find documentation about the scrape function here:
  // https://github.com/konnectors/libs/blob/master/packages/cozy-konnector-libs/docs/api.md#scrape
  const docs = scrape(
    $,
    {
      title: {
        sel: 'h3 a',
        attr: 'title'
      },
      amount: {
        sel: '.price_color',
        parse: normalizePrice
      },
      fileurl: {
        sel: 'img',
        attr: 'src',
        parse: src => `${baseUrl}/${src}`
      }
    },
    'article'
  )
  return docs.map(doc => ({
    ...doc,
    // The saveBills function needs a date field
    // even if it is a little artificial here (these are not real bills)
    date: new Date(),
    currency: 'EUR',
    filename: `${utils.formatDate(new Date())}_${VENDOR}_${doc.amount.toFixed(
      2
    )}EUR${doc.vendorRef ? '_' + doc.vendorRef : ''}.jpg`,
    vendor: VENDOR,
    metadata: {
      // It can be interesting to add the date of import. This is not mandatory but may be
      // useful for debugging or data migration
      importDate: new Date(),
      // Document version, useful for migration after change of document structure
      version: 1
    }
  }))
}

// Convert a price string to a float
function normalizePrice(price) {
  return parseFloat(price.replace('£', '').trim())
}

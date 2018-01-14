const { BaseKonnector, requestFactory, saveFiles, addData } = require('cozy-konnector-libs')
const request = requestFactory({ cheerio: true })

const baseUrl = 'http://books.toscrape.com'

module.exports = new BaseKonnector(start)

function start (fields) {
  return request(`${baseUrl}/index.html`)
  .then($ => {
    const entries = Array.from($('article')).map(article => parseArticle($, article))
    return addData(entries, 'com.toscrape.books')
    .then(() => saveFiles(entries, fields))
  })
}

function parseArticle ($, article) {
  const $article = $(article)
  const title = $article.find('h3 a').attr('title')
  return {
    title,
    price: normalizePrice($article.find('.price_color').text()),
    url: `${baseUrl}/${$article.find('h3 a').attr('href')}`,
    fileurl: `${baseUrl}/${$article.find('img').attr('src')}`,
    filename: `${title}.jpg`
  }
}

function normalizePrice (price) {
  return parseFloat(price.trim().replace('£', ''))
}

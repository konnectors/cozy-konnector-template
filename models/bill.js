const cozy = require('../lib/cozyclient')
const moment = require('moment')

module.exports = {
  displayName: 'Bill',
  all (callback) {
    cozy.data.defineIndex('io.cozy.bills', ['date'])
    .then((index) => {
      return cozy.data.query(index, {'selector': {date: {'$gt': 0}}})
    })
    .then(bills => {
      bills = bills.map(bill => {
        bill.date = moment(bill.date)
        return bill
      })
      callback(null, bills)
    })
    .catch(err => {
      callback(err)
    })
  },
  create (entry, callback) {
    cozy.data.create('io.cozy.bills', entry)
    .then(() => callback())
    .catch(err => callback(err))
  }
}

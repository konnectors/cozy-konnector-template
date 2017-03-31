const cozy = require('../lib/cozyclient')
const moment = require('moment')

module.exports = {
  displayName: "Bill",
  all(callback) {
    cozy.authorize()
    .then(() => {
      return cozy.data.defineIndex("io.cozy.bills", ["date"])
    })
    .then((index) => {
      return cozy.data.query(index, {"selector": {date: {"$gt": 0}}})
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
  create(entry, callback) {
    cozy.data.create("io.cozy.bills", entry)
    .then(() => callback())
    .catch(err => callback(err))
  }
}

// module.exports = Bill = cozydb.getModel('Bill', {
//   type: String,
//   subtype: String,
//   date: Date,
//   vendor: String,
//   amount: Number,
//   plan: String,
//   pdfurl: String,
//   binaryId: String,
//   fileId: String,
//   content: String,
//   isRefund: Boolean,
//   clientId: String, // Client number in vendor CRM
//   number: String, // Bill Id, in vendor CRM
//   docTypeVersion: String
// }) // Document traceability : appName_Konnector-version

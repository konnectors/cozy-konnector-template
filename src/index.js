const {
  BaseKonnector,
  log,
  hydrateAndFilter,
  addData
} = require('cozy-konnector-libs')
const fetchTricount_ = require('./fetchTricount.generated')

const gwtObjToPOJ = gwtObj => {
  const res = {}
  Object.entries(gwtObj.hashCodeMap.backingMap).forEach(([k, v]) => {
    res[k] = v[0].value_0
  })
  return res
}

const parseUser = user => ({
  id: user.id_0,
  email: user.email,
  name: user.name_0
})

const parseArray = gwtArr => {
  return gwtArr.array
}

const parseTransactionPart = part => ({
  amountOfPart: part.amountOfPart,
  amount: part.amount,
  user: parseUser(part.user)
})

const parseTricount = function(tricount) {
  const transactions = Object.values(gwtObjToPOJ(tricount.transactions))
  return transactions.map(transaction => ({
    amount: transaction.amount,
    amountOfParts: transaction.amountOfParts,
    currency: transaction.currency,
    name: transaction.name_0,
    payedBy: parseUser(transaction.payedBy),
    addedBy: parseUser(transaction.addedBy),
    id: transaction.id_0,
    tricountId: transaction.tricountID,
    repartition: parseArray(transaction.repartition).map(parseTransactionPart)
  }))
}

const fetchTricount = tricountKey =>
  new Promise((resolve, reject) => {
    fetchTricount_(
      tricountKey,
      gwtTricount => resolve(parseTricount(gwtTricount)),
      err => reject(err)
    )
  })

const getTricountKeyFromUrl = url => {
  return url.split('/').slice(-1)[0]
}

module.exports = new BaseKonnector(start)

const TRICOUNT_EXPENSE_DOCTYPE = 'com.tricount.expenses'

async function start(fields) {
  try {
    log('info', `Fetching Tricount ${fields.tricountUrl}...`)
    const tricountKey = getTricountKeyFromUrl(fields.tricountUrl)
    const expenses = await fetchTricount(tricountKey)
    const options = {
      keys: ['id']
    }

    const newExpenses = await hydrateAndFilter(expenses, TRICOUNT_EXPENSE_DOCTYPE, options)
    await addData(newExpenses, TRICOUNT_EXPENSE_DOCTYPE, options)
  } catch (e) {
    if (e.detailMessage.includes('500 Internal Server Error')) {
      throw new Error('LOGIN_FAILED')
    }
    throw new Error('UNKNOWN_ERROR')
  }
}

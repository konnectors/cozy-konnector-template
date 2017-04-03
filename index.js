const konnector = require('./konnector')

const cozyFields = JSON.parse(process.env.COZY_FIELDS)

konnector.fetch(cozyFields, err => {
  console.log('The konnector has been run')
  if (err) console.log(err, 'There was an error')
})

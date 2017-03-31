const konnector = require('./konnector')
const phoneNumber = process.argv[2]
const password = process.argv[3]
const folderPath = process.argv[4]

konnector.fetch({login, password, folderPath}, err => {
  console.log('The konnector has been run')
  if (err) console.log(err, 'There was an error')
})

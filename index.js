const konnector = require('./konnector')

const cozyFields = JSON.parse(process.env.COZY_FIELDS)

konnector.fetch({account: cozyFields.account, folderPath: cozyFields.folder_to_save}, err => {
  console.log('The konnector has been run')
  if (err) {
    console.error(err, 'There was an error')
    process.exit(1)
  }
})

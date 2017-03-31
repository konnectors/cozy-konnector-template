let CozyInstance
const americano = require('cozydb')

// Required to get locale and domain data.
module.exports = CozyInstance = americano.getModel('CozyInstance', {
  id: String,
  domain: String,
  locale: String,
  connectedOnce: Boolean,
  background: String
}
)

// Retrieve cozy instance object.
CozyInstance.first = callback => {
  CozyInstance.request('all', function (err, instances) {
    if (err) {
      return callback(err)
    } else if (!instances || (instances.length === 0)) {
      return callback(null, null)
    } else {
      return callback(null, instances[0])
    }
  })
}

// Extract locale parameter from instance object.
CozyInstance.getLocale = callback =>
CozyInstance.request('all', function (err, instances) {
  if (err) { console.log(err) }
  return callback(null, __guard__(instances != null ? instances[0] : undefined, x => x.locale) || 'en')
})

// Extract URL parameter from instance object.
CozyInstance.getURL = callback =>
CozyInstance.first(function (err, instance) {
  if (err) {
    return callback(err)
  } else if ((instance != null ? instance.domain : undefined)) {
    const url = instance.domain
      .replace('http://', '')
      .replace('https://', '')
    return callback(null, `https://${url}/`)
  } else {
    return callback(new Error('No instance domain set'))
  }
})

function __guard__ (value, transform) {
  return (typeof value !== 'undefined' && value !== null) ? transform(value) : undefined
}

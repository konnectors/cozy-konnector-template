// Simple library to build right names depending on parameters
module.exports = {
  // Return a file name for a given and a given set of parameters (options).
  // Use mainly for bill naming.
  //
  //
  // Exemple of expected parameters and output:
  //
  // entry =
  //     date: today
  //     orderId: '123456'
  //     travel: 'paris_lyon'
  //
  // options =
  //     vendor: 'telecom'
  //     dateFormat: 'YYYYMMDD'
  //     extension: 'txt'
  //     others: ['orderId', 'travel']
  //
  // naming.getEntryFileName  will return:
  //
  //     "YYYYMMDD_telecom_123456_paris_lyon.txt"
  //
  getEntryFileName (entry, options) {
    let name = ''
    const { date } = entry

    if (date && (typeof (options) === 'string')) {
      name = `${date.format('YYYYMM')}_${options}.pdf`
    } else {
      // Build date prefix.
      if (date) {
        if (options.dateFormat != null) {
          name = date.format(options.dateFormat)
        } else {
          name = date.format('YYYYMM')
        }
      }

      // Add vendor name.
      name += `_${options.vendor}`

      // Add optional information.
      if (options.others != null) {
        for (let parameter of Array.from(options.others)) {
          if (entry[parameter] != null) { name += `_${entry[parameter]}` }
        }
      }

      // Add extension.
      const extension = options.extension || 'pdf'
      name = `${name}.${extension}`
    }

    return name
  }
}

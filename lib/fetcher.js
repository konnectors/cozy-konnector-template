const ware = require('ware')

// Class to handle the layer of the fetching operation. Basically it runs a set
// of function and make sure they all share the same parameters.
//
// Example that runs to functions logIn and parsePage.
//
// fetcher.new()
//   .use(logIn)
//   .use(parsePage)
//   .args(requiredFields, {}, {})
//   .fetch (err, fields, entries) ->
//       log.info "Import finished"
class Fetcher {
  constructor () {
    this.ware = ware()
  }

  // Set arguments to give to all layers.
  args () {
    this.args = arguments
    return this
  }

  // Add a layer to use. A layer is a function to execute while fetching.
  use (operation) {
    this.ware.use(operation)
    return this
  }

  // Run fetching by running layers one by one.
  fetch (callback) {
    let args = [].slice.call(this.args)
    args.push(callback)

    return this.ware.run.apply(this.ware, args)
  }

  // Return all set layers.
  getLayers () {
    return this.ware.fns
  }
}

module.exports = {
  new: () => new Fetcher()
}

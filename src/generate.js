/* Used to fetch the JS from Tricount and add our own hooks */

/* eslint-disable no-console */
const fs = require('fs')
const j = require('jscodeshift')

const prologue = fs.readFileSync('./prologue.js').toString()
const request = require('request')

const fetchApplicationSource = () =>
  new Promise(resolve => {
    const url =
      'https://api.tricount.com/com.tribab.tricount.Application/34F0AEDC550E2A5D086804F4E309FE5B.cache.js'
    console.log('Fetching application script from', url, ' ...')
    request.get(url, (err, response) => {
      resolve(response.body)
    })
  })

const getStatements = src =>
  j(src)
    .find(j.Program)
    .nodes()[0].body

const wrapAsFunction = (fnName, paramNames, statements) => {
  return j.variableDeclaration('var', [
    j.variableDeclarator(
      j.identifier(fnName),
      j.functionExpression(
        null,
        paramNames.map(x => j.identifier(x)),
        j.blockStatement(statements)
      )
    )
  ])
}

const transformer = function(file, api) {
  const j = api.jscodeshift

  const root = j(file.source)
  const program = root.find(j.Program)
  const body = program.nodes()[0].body

  // Replaces the onSuccess/onFailure of the Tricount controller with our methods
  const onSuccessIdentifier = 'onSuccess'
  const onFailureIdentifier = 'onFailure'
  const tricountControllerCallbacks = getStatements(`
    TricountCommController$1.prototype.onSuccess = function (iResult) {
        ${onSuccessIdentifier}(iResult)
    }

    TricountCommController$1.prototype.onFailure = function (iResult) {
        ${onFailureIdentifier}(iResult)
    }
  `)

  // Adds the meta tag to control which Tricount is fetched
  const tricountKeyIdentifier = 'tricountKey'
  const insertMetaTagTricountKeyStatements = getStatements(`
    const document = dom.window.document
    const meta = document.createElement('meta')
    meta.setAttribute('name', 'gwt:property')
    meta.setAttribute('id', 'tricount:key')
    meta.setAttribute('content', ${tricountKeyIdentifier})
    document.querySelector('head').appendChild(meta)
  `)

  // Wrap the onLoad part of the GWT application inside a function, so that
  // we can export it.
  // Also adds code to replace TricountController callbacks and to insert
  // the meta tag that identifies the Tricount
  const toExportFnName = 'toExport'
  const onloadQuery = { expression: { callee: { name: 'gwtOnLoad' } } }
  root.find(j.ExpressionStatement, onloadQuery).replaceWith(function(path) {
    return wrapAsFunction(
      toExportFnName,
      [tricountKeyIdentifier, onSuccessIdentifier, onFailureIdentifier],
      [
        ...tricountControllerCallbacks,
        ...insertMetaTagTricountKeyStatements,
        path.node
      ]
    )
  })

  // Do not issue warning about user agents
  root
    .find(j.FunctionDeclaration, { id: { name: 'assertCompileTimeUserAgent' } })
    .replaceWith(function() {
      return 'function assertCompileTimeUserAgent() {}'
    })

  body.splice(0, 0, prologue)
  body.splice(
    0,
    0,
    `// THIS FILE IS GENERATED AUTOMATICALLY BY generate.js

    /* eslint-disable */`
  )
  body.push(`module.exports = ${toExportFnName}`)

  return root.toSource()
}

const main = async () => {
  const tricountAppSource = await fetchApplicationSource()
  fs.writeFileSync('/tmp/tricount.js', tricountAppSource)
  console.log('Transforming..')
  const transformed = transformer(
    {
      source: fs.readFileSync('/tmp/tricount.js').toString()
    },
    {
      jscodeshift: j
    }
  )
  fs.writeFileSync('./fetchTricount.generated.js', transformed)
}

main()

var path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const fs = require('fs')
const SvgoInstance = require('svgo')

const entry = require('./package.json').main

const readManifest = () =>
  JSON.parse(fs.readFileSync(path.join(__dirname, './manifest.konnector')))

const svgo = new SvgoInstance({
  plugins: [
    {
      inlineStyles: { onlyMatchedOnce: false }
    }
  ]
})

let iconName
try {
  iconName = JSON.parse(fs.readFileSync('manifest.konnector', 'utf8')).icon
  // we run optimize only on SVG
  if (!iconName.match(/\.svg$/)) iconName = null
} catch (e) {
  // console.error(`Unable to read the icon path from manifest: ${e}`)
}
const appIconRX = iconName && new RegExp(`[^/]*/${iconName}`)

module.exports = {
  entry,
  target: 'node',
  mode: 'none',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'manifest.konnector' },
        { from: 'package.json' },
        { from: 'README.md' },
        { from: 'assets', transform: optimizeSVGIcon },
        { from: '.travis.yml' },
        { from: 'LICENSE' }
      ]
    }),
    new webpack.DefinePlugin({
      __WEBPACK_PROVIDED_MANIFEST__: JSON.stringify(readManifest())
    })
  ],
  module: {
    // to ignore the warnings like :
    // WARNING in ../libs/node_modules/bindings/bindings.js 76:22-40
    // Critical dependency: the request of a dependency is an expression
    // Since we cannot change this dependency. I think it won't hide more important messages
    exprContextCritical: false
  }
}

function optimizeSVGIcon(buffer, path) {
  if (appIconRX && path.match(appIconRX)) {
    return svgo.optimize(buffer).then(resp => resp.data)
  } else {
    return buffer
  }
}

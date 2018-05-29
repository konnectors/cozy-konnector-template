/**
 * This file will be inserted before the Tricount script, it builds a JSDom home
 * for the script.
 */
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const dom = new JSDOM(
  `<!DOCTYPE html><head>
</head>
<body>
  <table>
    <tbody>
      <td id='slot1'></td> <!-- The controller needs this node -->
    </tbody>
  </table>
</body>
`,
  {
    url: 'https://api.tricount.com', // Necessary for cross-site
    referrer: 'https://api.tricount.com', // Necessary for cross-site
    contentType: 'text/html',
    userAgent: 'safari',
    includeNodeLocations: true
  }
)

var $wnd = dom.window

$wnd.com_tribab_tricount_Application = {
  __sendStats: function() {},
  __moduleBase: 'https://api.tricount.com/com.tribab.tricount.Application/',
  __moduleName: 'com.tribab.tricount.Application'
}

$wnd.encodeURI = function() {
  return ''
}

navigator = { // eslint-disable-line
  userAgent: 'safari'
}

const document = dom.window.document // eslint-disable-line

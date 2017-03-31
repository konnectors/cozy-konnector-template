# How to migrate your existing konnector easily?

## Intro

This doc describes how you can migrate a v2 konnector to a V3 konnector as easily as possible. At
the moment, it applies only to login/password konnectors (not OAuth ones especially).


## Convert Coffeescript to es2015 code (if needed)

There are still a lot of konnectors which are coded in coffeescript. We do not intent to support
coffeescript in this new version of cozy, and it would be good to do it for your konnector (but you
can still compile with coffeescript if you want and it is not supported by this document).

Just run :

```sh
npm install -g decaffeinate
decaffeinate --keep-commonjs konnector.coffee
```

Now you have a nice konnector.js file !

There may be some small problems though. Each time the ''.?'' was used, a _guardxx_ function will be generated. It works but a human
intervention will make it more easy to read.

## Remove code related to kresus

Kresus is not supported (yet?) in cozy v3, then it is not possible to link you bills to you bank
operations. Just remove code calling the linkBankOperation lib.

## You can test your konnector!

Most of the libs used by konnectors have been migrated to use cozy-client-js instead of v2 code and
are directly available in the lib directory of this template. Oh yes for that you need to execute a
tiny search and replace from '../lib' to './lib' in your konnector code and you will be done.

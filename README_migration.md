# How to migrate your existing konnector easily?

## Intro

This doc describes how you can migrate a v2 konnector to a V3 konnector as easily as possible. At
the moment, it applies only to login/password konnectors (not OAuth ones especially).

## Files

Clone this repository and then remove the ```.git``` directory. Then copy your konnector js file to the root as ```konnector.js``` (or konnector.coffee).

## Convert Coffeescript to es2015 code (if needed)

There are still a lot of konnectors which are coded in coffeescript. We do not intent to support
coffeescript in this new version of cozy, and it would be good to do it for your konnector (but you
can still compile with coffeescript if you want but it is not supported by this document).

Just run :

```sh
npm install -g decaffeinate
decaffeinate --keep-commonjs konnector.coffee
```

Now you have a nice konnector.js file !

There may be some small problems though. Each time the ''.?'' was used, a _guardxx_ function will be generated. It works but a human
intervention will make it more easy to read.

## Use the package "cozy-konnector-libs"

This package is already present in the package.json and contains all libs shared by the konnectors.
Most of the previous libs in the libs directory of the cozy/konnectors repository are ported.

Here is the list available at the moment with their equivalent in the old repository:

| Old way | New way |
| --- | --- |
| libs/base_konnector | baseKonnector |
| libs/fetcher | fetcher |
| libs/filter_existing | filterExisting |
| libs/link_bank_operation | linkBankOperation |
| libs/naming | naming |
| libs/save_data_and_file | saveDataAndFile |
| models/bill | models.bill |
| models/file | models.file |
| models/folder | models.folder |

How to use it ? We will take the example of baseKonnector and models.bill

```javascript
const {log, baseKonnector, filterExisting, saveDataAndFile, models} = require('cozy-konnector-libs')
const Bill = models.bill
```

Be carefull, the name baseKonnector and models must be exactly the same as expected by
cozy-konnector-libs. Another way to use it, which may be clearer :

```javascript
const konnectorLibs = require('cozy-konnector-libs')
konnectorLibs.models.file
```

You can also find a working example with the Bouygues Telecom konnector :
https://github.com/cozy/cozy-konnector-bouyguestelecom.git

## Update the template files

This template repository is delivered with sample package.json, manifest.konnectors and README.md files. You need to update them with information specific to your konnector like : name of the project, dependencies, needed permissions, description of the project.

## You can test your konnector following the procedure described in the [README.md](README)!

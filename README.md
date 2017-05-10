[Cozy][cozy] <YOUR SUPER NEW KONNECTOR NAME>
=======================================

What's Cozy?
------------

![Cozy Logo](https://cdn.rawgit.com/cozy/cozy-guidelines/master/templates/cozy_logo_small.svg)

[Cozy] is a platform that brings all your web services in the same private space. With it, your webapps and your devices can share data easily, providing you with a new experience. You can install Cozy on your own hardware where no one's tracking you.

What's this new konnector?
--------------------------

<YOUR DESCRIPTION HERE>

### Open a Pull-Request

If you want to work on this konnector and submit code modifications, feel free to open pull-requests! See the [contributing guide][contribute] for more information about how to properly open pull-requests.

### Test the connector without an accessible cozy-stack

If you just want to test this connector without any cozy available.

You first need an installed [nodejs] (LTS version is fine).

We also suggest you tu use [yarn] instead of npm for node packages.

```sh
npm install --global yarn
```

Then just run :

```sh
yarn
yarn standalone
```

The requests to the cozy-stack will be stubbed using the [./data/fixture.json] file as source of data
and when cozy-client is asked to create or update data, the data will be output to the console.
The bills (or any file) will be saved in the ./data directory.

### Run the connector linked to a cozy-stack

If you do not want to have to install the konnector on a cozy v3 to test it, you can register the
konnector as an OAuth application with the following commands :

```sh
yarn
yarn dev
```

This command will register your konnector as an OAuth application to the cozy-stack. By default,
the cozy-stack is supposed to be located in http://cozy.tools:8080. If this is not your case, just
update the COZY_URL field in [./data/env.js].

After that, your konnector is running but should not work since you did not specify any credentials to
the target service. You can do this in a [./data/env_fields.json] (you have
[./data/env_fields.json.template] available as a template)

Now run `yarn dev` one more time, it should be ok.

### How does the cozy-stack run the connector ?

The cozy-stack runs the connector in a rkt container to be sure it does not affect the environment.

The connector is run by calling npm start with the following envrionment variables :

 - COZY_CREDENTIALS needs to be the result of ```cozy-stack instances token-cli <instance name> <scope>```
 - COZY_URL is the full http or https url to your cozy
 - COZY_FIELDS is something like :
```javascript
{
  "data":{
    "attributes":{
      "arguments":{
        "account":"cf31eaef5d899404a7e8c3737c1c2d1f",
        "folder_to_save":"folderPath",
        "slug":"mykonnector"
      }
    }
  }
}
```

The "account" field is the id of the record with doctype "io.cozy.accounts" which will be used as
parameters for your konnector.

### Build

To be able to run the connector, the cozy stack needs a connector which is built into only one
file, without needing to npm install it, this will be a lot faster to install.

There is a command in package.json to help you to do that : ```yarn build```

This command uses [webpack] to bundle all the code needed by your connector into one file.

This will generate an index.js file in the build directory. The expected way to deploy this built
file is to create a 'build' branch (or with another name)

```sh
yarn build
git checkout -b build   # if the build branch does not exist yet
cp build/index.js ./
git add index.js
git ci -m "built"
git push origin build
```

And your konnector can now be installed using the following url :

git://github.com/cozy/cozy-konnector-<yourkonnector>.git#build

### Maintainer

The lead maintainers for this konnector is <YOUR NAME>


### Get in touch

You can reach the Cozy Community by:

- Chatting with us on IRC [#cozycloud on Freenode][freenode]
- Posting on our [Forum]
- Posting issues on the [Github repos][github]
- Say Hi! on [Twitter]


License
-------

<YOUR KONNECTOR NAME> is developed by <your name> and distributed under the [AGPL v3 license][agpl-3.0].

[cozy]: https://cozy.io "Cozy Cloud"
[agpl-3.0]: https://www.gnu.org/licenses/agpl-3.0.html
[freenode]: http://webchat.freenode.net/?randomnick=1&channels=%23cozycloud&uio=d4
[forum]: https://forum.cozy.io/
[github]: https://github.com/cozy/
[nodejs]: https://nodejs.org/
[twitter]: https://twitter.com/mycozycloud
[webpack]: https://webpack.js.org
[yarn]: https://yarnpkg.com

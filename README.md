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

### Cozy-konnector-libs

This connector uses [cozy-konnector-libs](https://github.com/cozy/cozy-konnector-libs). You can
find more documentation about it there.

### Test the connector without an accessible cozy-stack

If you just want to test this connector without any cozy available.

You first need an installed [nodejs] (LTS version is fine).

And the last version of yarn :

```sh
npm install --global yarn
```

Then just run :

```sh
yarn
yarn standalone
```

The requests to the cozy-stack will be stubbed using the [./fixture.json] file as source of data
and when cozy-client is asked to create or update data, the data will be output to the console.
The bills (or any file) will be saved in the . directory.

### Run the connector linked to a cozy-stack

If you do not want to have to install the konnector on a cozy v3 to test it, you can register the
konnector as an OAuth application with the following commands :

```sh
yarn
yarn dev
```

This command will register your konnector as an OAuth application to the cozy-stack. By default,
the cozy-stack is supposed to be located in http://cozy.tools:8080. If this is not your case, just
update the COZY_URL field in [./konnector-dev-config.json].

After that, your konnector is running but should not work since you did not specify any credentials to
the target service. You can do this also in [./konnector-dev-config.json] in the "fields"
attribute.

Now run `yarn dev` one more time, it should be ok.

The files are saved in the root directory of your cozy by default.

### How does the cozy-stack run the connector ?

The cozy-stack runs the connector in a nsjail container to be sure it does not affect the environment.

The connector is run by calling yarn start with the following envrionment variables :

 - COZY_CREDENTIALS needs to be the result of `cozy-stack instances token-cli <instance name> <scope>`
 - COZY_URL is the full http or https url to your cozy
 - COZY_FIELDS is something like :
```javascript
{
  "data":{
    "attributes":{
      "arguments":{
        "account":"cf31eaef5d899404a7e8c3737c1c2d1f",
        "folder_to_save":"folderPathId",
        "slug":"mykonnector"
      }
    }
  }
}
```

The "account" field is the id of the record with doctype "io.cozy.accounts" which will be used as
parameters for your konnector.

### Build (without Travis)

To be able to run the connector, the cozy stack needs a connector which is built into only one
file, without needing to install its dependencies, this will be a lot faster to install.

There is a command in package.json to help you to do that : `yarn build`

This command uses [webpack] to bundle all the code needed by your connector into one file.

This will generate an index.js file in the build directory and add all files the connector will need.

You can deploy this build by using the specific script : `yarn deploy`

This command will commit and push your build in the branch `build` fo your project.

And your konnector can now be installed using the following url :

git://github.com/konnectors/cozy-konnector-<yourkonnector>.git#build

### Build using Travis CI

This project contains a `.travis.yml` config file which allows you to build your connector
automatically using [Travis-CI][travis].

You can follow these steps to enable building using Travis:

* On your [travis-ci.org][travis] account, find your project name (should be the same than your Github repository) and enable Travis by using the related checkbox.
* Once enabled, go to this project on Travis by clicking on it and go to the "Settings" menu by using the "More options" menu at the top right.
* Enable these three options:
    * "Build only if .travis.yml is present"
    * "Build branch updates" (run Travis after each branch update)
    * "Build pull request updates" (run Travis after each Pull Request update)
* Then, you have to generate a Github token in [your Github account settings](https://github.com/settings/tokens). Here is the [Github blog post about API token](https://github.com/blog/1509-personal-api-tokens). Don't forget to authorize the access to the repo scope like following: ![repo scope](https://cloud.githubusercontent.com/assets/10224453/26671128/aa735ec2-46b4-11e7-9cd0-25310100e05e.png)
* Then, add an environment variable (still in your Travis project settings) named `GITHUB_TOKEN` and use your previous generated Github token as value (We highly recommand you to __keep the checkbox "Display value in build log" to OFF value__ in order to keep your token value hidden in the Travis logs.)

Now Travis is ready to build your project, it should build it each time your push a commit in your repository or create a pull request.

> __Note:__ Travis will push your build to your `build` branch ONLY for commits made on your master branch (included PR merge commits). You can see the related Travis statement [here](https://github.com/cozy/cozy-konnector-template/blob/master/.travis.yml#L27).

### Add your new connector to [Cozy Collect](https://github.com/cozy/cozy-collect)

The Cozy Collect application will soon use an application store as source of connectors. But for
now, if you want to add your new connector to Cozy Collect, you can submit a message in the forum
in the [collect section](https://forum.cozy.io/c/francais/collect-fr), and we will handle this for
you.

### Standard

We use [standard] to format the `index.js` file. You can run it with:

```sh
yarn lint
```

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
[standard]: https://standardjs.com
[twitter]: https://twitter.com/mycozycloud
[webpack]: https://webpack.js.org
[yarn]: https://yarnpkg.com
[travis]: https://travis-ci.org
[contribute]: CONTRIBUTING.md

[Cozy][cozy] <YOUR SUPER NEW KONNECTOR NAME>
=======================================

What's Cozy?
------------

![Cozy Logo](https://cdn.rawgit.com/cozy/cozy-guidelines/master/templates/cozy_logo_small.svg)

[Cozy] is a platform that brings all your web services in the same private space.  With it, your webapps and your devices can share data easily, providing you with a new experience. You can install Cozy on your own hardware where no one's tracking you.


What's this new konnector?
----------------------------------

<YOUR DESCRIPTION HERE>

### Open a Pull-Request

If you want to work on Bouygues Telecom Konnector and submit code modifications, feel free to open pull-requests! See the [contributing guide][contribute] for more information about how to properly open pull-requests.

### Hack

If you have a running accessible cozy-stack you can test your the konnector without installing
and/or updating the konnector in the cozy-stack :

You first need an installed nodejs (LTS version is fine)

Then run :

```sh
export COZY_URL=http://cozy.local:8080
node gettoken.js $COZY_URL
```

Replace http://cozy.local:8080 by your real cozy url if needed.

Follow the described procedure and you will get a token.json file.

Then just run :

```sh
export COZY_CREDENTIALS=$(<token.json)
```

You can now run our konnector like this :

```sh
node index.js $login $password $folderPath
```

Where $folderPath is the path where the pdf
bills will be saved

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

<YOUR KONNECTOR NAME> is developed by @doubleface and distributed under the [AGPL v3 license][agpl-3.0].

[cozy]: https://cozy.io "Cozy Cloud"
[agpl-3.0]: https://www.gnu.org/licenses/agpl-3.0.html
[freenode]: http://webchat.freenode.net/?randomnick=1&channels=%23cozycloud&uio=d4
[forum]: https://forum.cozy.io/
[github]: https://github.com/cozy/
[twitter]: https://twitter.com/mycozycloud

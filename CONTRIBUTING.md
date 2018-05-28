How to contribute to Cozy Connector?
====================================

Thank you for your interest in contributing to Cozy! There are many ways to contribute, and we appreciate all of them.


Security Issues
---------------

If you discover a security issue, please bring it to our attention right away! Please **DO NOT** file a public issue, instead send your report privately to security AT cozycloud DOT cc.

Security reports are greatly appreciated and we will publicly thank you for it. We currently do not offer a paid security bounty program, but are not ruling it out in the future.


Bug Reports
-----------

While bugs are unfortunate, they're a reality in software. We can't fix what we don't know about, so please report liberally. If you're not sure if something is a bug or not, feel free to file a bug anyway.

Opening an issue is as easy as following [this link][issues] and filling out the fields. Here are some things you can write about your bug:

- A short summary
- What did you try, step by step?
- What did you expect?
- What did happen instead?
- What is the version of the Cozy Connector?


Pull Requests
-------------

Please keep in mind that:

- Pull-Requests point to the `master` branch
- You need to cover your code and feature by tests
- You may add documentation in the `/docs` directory to explain your choices if needed
- We recommend to use [task lists][checkbox] to explain steps / features in your Pull-Request description
- You do __not__ need to build app to submit a PR

### Workflow

Pull requests are the primary mechanism we use to change Cozy. GitHub itself has some [great documentation][pr] on using the Pull Request feature. We use the _fork and pull_ model described there.

- [ ] clone the repository with `git clone`
- [ ] add a remote to your profile with `git remote add fork`
- [ ] create a new branch for the work with `git checkout --branch my-branch origin/master`
- [ ] add some changes with `git add --patch .`
- [ ] create at least one commit with `git commit --message '{fix,feat,chore,test,doc}: a 70 character long description of the changes'`
- [ ] check styleguide, formating, linting and tests
- [ ] push to your remote with `git push fork my-branch`
- [ ] create a Pull-Request with a detailed description


Writing documentation
---------------------

Documentation improvements are very welcome. We try to keep a good documentation in the `/docs` folder. But, you know, we are developers, we can forget to document important stuff that look obvious to us. And documentation can always be improved.


Community
---------

You can help us by making our community even more vibrant. For example, you can write a blog post, take some videos, answer the questions on [the forum][forum], organize new meetups, and speak about what you like in Cozy!



[issues]: ../../issues
[pr]: https://help.github.com/categories/collaborating-with-issues-and-pull-requests/
[forum]: https://forum.cozy.io/

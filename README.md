[![npm version](https://badge.fury.io/js/env-cli.svg)](https://badge.fury.io/js/env-cli)
[![GitHub stars](https://img.shields.io/github/stars/nathanagez/env-cli)](https://github.com/nathanagez/env-cli/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/nathanagez/env-cli)](https://github.com/nathanagez/env-cli/issues)
[![GitHub license](https://img.shields.io/github/license/nathanagez/env-cli)](https://github.com/nathanagez/env-cli/blob/master/LICENSE)


# Installation

By using [npm](http://npmjs.org) or [yarn](https://yarnpkg.com/):

```bash
$ npm install -g env-cli
```
```bash
$ yarn global add env-cli
```

# Usage

env-cli scan the directory where it is execute for all files starting with a dot (.sample.env for instance).

You will be prompted to select which sample file you would use.
The next step is to fill variables with your value and you will be ready to go.

```bash
$ env-cli
```

![](demo.gif)
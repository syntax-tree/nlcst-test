# nlcst-test [![Build Status](https://img.shields.io/travis/wooorm/nlcst-test.svg)](https://travis-ci.org/wooorm/nlcst-test) [![Coverage Status](https://img.shields.io/coveralls/wooorm/nlcst-test.svg)](https://coveralls.io/r/wooorm/nlcst-test?branch=master)

Validate an [NLCST](https://github.com/wooorm/nlcst) node.

## Installation

npm:
```sh
$ npm install nlcst-test
```

Component.js:
```sh
$ component install wooorm/nlcst-test
```

Bower:
```sh
$ bower install nlcst-test
```

## Usage

```js
var nlcstTest = require('nlcst-test');

nlcstTest({
  "type": "WordNode"
});
/**
 * Throws:
 * TypeError: Missing `children` attribute for parent `[object Object]`
 */
```

## License

MIT © Titus Wormer

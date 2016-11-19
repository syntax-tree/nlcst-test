# nlcst-test [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Assert [nlcst][] nodes.

## Installation

[npm][]:

```bash
npm install nlcst-test
```

## Usage

```javascript
var assert = require('nlcst-test');

assert({type: 'RootNode', children: []});
assert({type: 'SourceNode', value: 'fn()'});
assert({type: 'WordNode', children: [{type: 'TextNode', value: 'Hi'}]});
// All OK.

assert({children: []});
// AssertionError: node should have a type: `{ children: [] }`

assert({type: 'WordNode', value: 'foo'});
// AssertionError: parent should have children: `{ type: 'WordNode', value: 'foo' }`
```

## API

### `assert(node)`

Assert that `node` is a valid [nlcst][] node.  If `node` has `children`,
all children will be asserted as well.

The `assert.parent`, `assert.text`, `assert.void`, and `assert.wrap`
methods from [`unist-util-assert`][unist-util-assert] are also included.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/nlcst-test.svg

[travis]: https://travis-ci.org/wooorm/nlcst-test

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/nlcst-test.svg

[codecov]: https://codecov.io/github/wooorm/nlcst-test

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[nlcst]: https://github.com/wooorm/nlcst

[unist-util-assert]: https://github.com/wooorm/unist-util-assert

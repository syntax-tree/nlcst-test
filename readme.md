# nlcst-test

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

Assert [nlcst][] nodes.

## Installation

[npm][]:

```bash
npm install nlcst-test
```

## Usage

```javascript
var assert = require('nlcst-test')

assert({type: 'RootNode', children: []})
assert({type: 'SourceNode', value: 'fn()'})
assert({type: 'WordNode', children: [{type: 'TextNode', value: 'Hi'}]})
// All OK.

assert({children: []})
// AssertionError: node should have a type: `{ children: [] }`

assert({type: 'WordNode', value: 'foo'})
// AssertionError: parent should have children: `{ type: 'WordNode', value: 'foo' }`
```

## API

### `assert(node)`

Assert that `node` is a valid [nlcst][] node.  If `node` has `children`,
all children will be asserted as well.

The `assert.parent`, `assert.text`, `assert.void`, and `assert.wrap`
methods from [`unist-util-assert`][unist-util-assert] are also included.

## Contribute

See [`contributing.md` in `syntax-tree/nlcst`][contributing] for ways to get
started.

This organisation has a [Code of Conduct][coc].  By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/syntax-tree/nlcst-test.svg

[build]: https://travis-ci.org/syntax-tree/nlcst-test

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/nlcst-test.svg

[coverage]: https://codecov.io/github/syntax-tree/nlcst-test

[downloads-badge]: https://img.shields.io/npm/dm/nlcst-test.svg

[downloads]: https://www.npmjs.com/package/nlcst-test

[size-badge]: https://img.shields.io/bundlephobia/minzip/nlcst-test.svg

[size]: https://bundlephobia.com/result?p=nlcst-test

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/syntax-tree

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[nlcst]: https://github.com/syntax-tree/nlcst

[unist-util-assert]: https://github.com/syntax-tree/unist-util-assert

[contributing]: https://github.com/syntax-tree/nlcst/blob/master/contributing.md

[coc]: https://github.com/syntax-tree/nlcst/blob/master/code-of-conduct.md

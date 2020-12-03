# nlcst-test

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**nlcst**][nlcst] utility to assert trees.

## Install

[npm][]:

```sh
npm install nlcst-test
```

## Use

```js
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

### `assert(tree)`

Assert that [`tree`][tree] is a valid [nlcst][] [node][].
If `tree` is a [parent][], all [child][]ren will be asserted as well.

The `assert.parent`, `assert.text`, `assert.void`, and `assert.wrap`
methods from [`unist-util-assert`][unist-util-assert] are also included.

## Related

*   [`unist-util-assert`](https://github.com/syntax-tree/unist-util-assert)
    — assert unist trees
*   [`mdast-util-assert`](https://github.com/syntax-tree/mdast-util-assert)
    — Assert mdast trees
*   [`hast-util-assert`](https://github.com/syntax-tree/hast-util-assert)
    — assert hast trees

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/syntax-tree/nlcst-test/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/nlcst-test/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/nlcst-test.svg

[coverage]: https://codecov.io/github/syntax-tree/nlcst-test

[downloads-badge]: https://img.shields.io/npm/dm/nlcst-test.svg

[downloads]: https://www.npmjs.com/package/nlcst-test

[size-badge]: https://img.shields.io/bundlephobia/minzip/nlcst-test.svg

[size]: https://bundlephobia.com/result?p=nlcst-test

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/syntax-tree/.github/blob/HEAD/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/HEAD/support.md

[coc]: https://github.com/syntax-tree/.github/blob/HEAD/code-of-conduct.md

[nlcst]: https://github.com/syntax-tree/nlcst

[unist-util-assert]: https://github.com/syntax-tree/unist-util-assert

[tree]: https://github.com/syntax-tree/unist#tree

[child]: https://github.com/syntax-tree/unist#child

[node]: https://github.com/syntax-tree/nlcst#nodes

[parent]: https://github.com/syntax-tree/nlcst#parent

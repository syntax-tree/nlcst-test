# nlcst-test

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[nlcst][] utility to assert trees.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`assert(tree)`](#asserttree)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is a tiny utility that helps you deal with nodes.

## When should I use this?

This utility is typically useful when you expect certain nodes in your APIs
and want to make sure they’re valid and as expected.

A different utility, [`unist-util-assert`][unist-util-assert], does the same but
for any [unist][] node.

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install with [npm][]:

```sh
npm install nlcst-test
```

In Deno with [`esm.sh`][esmsh]:

```js
import {assert} from "https://esm.sh/nlcst-test@3"
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {assert} from "https://esm.sh/nlcst-test@3?bundle"
</script>
```

## Use

```js
import {assert} from 'nlcst-test'

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

This package exports the identifiers `assert`, `parent`, `literal`, `_void`,
and `wrap`.
There is no default export.

### `assert(tree)`

Assert that [`tree`][tree] is a valid [nlcst][] [node][].
If `tree` is a [parent][], all [child][]ren will be asserted as well.

The `parent`, `literal`, `_void`, and `wrap` methods from
[`unist-util-assert`][unist-util-assert] are also exported.

###### Throws

When `node`, or one of its children, is not a valid nlcst node.

###### Returns

Nothing.

## Types

This package is fully typed with [TypeScript][].
It does not export additional types.

## Compatibility

Projects maintained by the unified collective are compatible with all maintained
versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, 16.0+, and 18.0+.
Our projects sometimes work with older versions, but this is not guaranteed.

## Related

*   [`unist-util-assert`](https://github.com/syntax-tree/unist-util-assert)
    — assert unist trees
*   [`mdast-util-assert`](https://github.com/syntax-tree/mdast-util-assert)
    — assert mdast trees
*   [`hast-util-assert`](https://github.com/syntax-tree/hast-util-assert)
    — assert hast trees

## Contribute

See [`contributing.md`][contributing] in [`syntax-tree/.github`][health] for
ways to get started.
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

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[license]: license

[author]: https://wooorm.com

[health]: https://github.com/syntax-tree/.github

[contributing]: https://github.com/syntax-tree/.github/blob/main/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/main/support.md

[coc]: https://github.com/syntax-tree/.github/blob/main/code-of-conduct.md

[nlcst]: https://github.com/syntax-tree/nlcst

[unist-util-assert]: https://github.com/syntax-tree/unist-util-assert

[tree]: https://github.com/syntax-tree/unist#tree

[unist]: https://github.com/syntax-tree/unist

[child]: https://github.com/syntax-tree/unist#child

[node]: https://github.com/syntax-tree/nlcst#nodes

[parent]: https://github.com/syntax-tree/nlcst#parent

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
    *   [`assert(tree[, parent])`](#asserttree-parent)
    *   [`parent(tree[, parent])`](#parenttree-parent)
    *   [`literal(node[, parent])`](#literalnode-parent)
    *   [`_void(node[, parent])`](#_voidnode-parent)
    *   [`wrap(fn)`](#wrapfn)
    *   [`AssertionError`](#assertionerror)
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
In Node.js (version 16+), install with [npm][]:

```sh
npm install nlcst-test
```

In Deno with [`esm.sh`][esmsh]:

```js
import {assert} from 'https://esm.sh/nlcst-test@3'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {assert} from 'https://esm.sh/nlcst-test@3?bundle'
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

This package exports the identifiers [`_void`][api-void],
[`assert`][api-assert],
[`literal`][api-literal],
[`parent`][api-parent], and
[`wrap`][api-wrap].
There is no default export.

### `assert(tree[, parent])`

Assert that `tree` is a valid nlcst [`Node`][node].

If `tree` is a parent, all children will be asserted too.

Supports unknown nlcst nodes.

###### Parameters

*   `tree` (`unknown`)
    — thing to assert
*   `parent` ([`Parent`][parent-node], optional)
    — optional, valid parent

###### Returns

Nothing.

###### Throws

When `tree` (or its descendants) is not an nlcst node
([`AssertionError`][api-assertion-error]).

### `parent(tree[, parent])`

Assert that `tree` is a valid nlcst [`Parent`][parent-node].

All children will be asserted too.

Supports unknown nlcst nodes.

###### Parameters

*   `tree` (`unknown`)
    — thing to assert
*   `parent` ([`Parent`][parent-node], optional)
    — optional, valid parent

###### Returns

Nothing.

###### Throws

When `tree` is not a parent or its descendants are not nodes
([`AssertionError`][api-assertion-error])

### `literal(node[, parent])`

Assert that `node` is a valid nlcst [`Literal`][literal-node].

Supports unknown nlcst nodes.

###### Parameters

*   `node` (`unknown`)
    — thing to assert
*   `parent` ([`Parent`][parent-node], optional)
    — optional, valid parent

###### Returns

Nothing.

###### Throws

When `node` is not an nlcst literal ([`AssertionError`][api-assertion-error]).

### `_void(node[, parent])`

Re-exported from [`unist-util-assert`][unist-util-assert-void].

### `wrap(fn)`

Re-exported from [`unist-util-assert`][unist-util-assert-wrap].

### `AssertionError`

Re-exported from [`unist-util-assert`][unist-util-assert-assertion-error].

## Types

This package is fully typed with [TypeScript][].
It exports the additional type [`AssertionError`][api-assertion-error].

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line, `nlcst-test@^4`,
compatible with Node.js 16.

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

[size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=nlcst-test

[size]: https://bundlejs.com/?q=nlcst-test

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

[unist-util-assert]: https://github.com/syntax-tree/unist-util-assert

[unist]: https://github.com/syntax-tree/unist

[node]: https://github.com/syntax-tree/unist#nodes

[parent-node]: https://github.com/syntax-tree/unist#parent-1

[literal-node]: https://github.com/syntax-tree/unist#literal

[nlcst]: https://github.com/syntax-tree/nlcst

[api-assert]: #asserttree-parent

[api-literal]: #literalnode-parent

[api-parent]: #parenttree-parent

[api-void]: #_voidnode-parent

[api-wrap]: #wrapfn

[api-assertion-error]: #assertionerror

[unist-util-assert-void]: https://github.com/syntax-tree/unist-util-assert#_voidnode-parent

[unist-util-assert-wrap]: https://github.com/syntax-tree/unist-util-assert#wrapfn

[unist-util-assert-assertion-error]: https://github.com/syntax-tree/unist-util-assert#assertionerror

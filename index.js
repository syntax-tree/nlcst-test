/**
 * @typedef {import('unist').Parent} UnistParent
 * @typedef {import('nlcst').Root} Root
 * @typedef {import('nlcst').Content} Content
 * @typedef {Root|Content} Node
 * @typedef {Extract<Node, UnistParent>} Parent
 */

import nodeAssert from 'node:assert'
import {zwitch} from 'zwitch'
import {mapz} from 'mapz'
import {
  assert as unistAssert,
  parent as unistParent,
  literal,
  wrap
} from 'unist-util-assert'

/**
 * Assert that `node` is a valid nlcst node.
 * If `node` is a parent, all children will be asserted too.
 *
 * @param {unknown} [node]
 * @param {Parent} [parent]
 * @returns {asserts node is Node}
 */
export function assert(node, parent) {
  return wrap(nlcst)(node, parent)
}

/**
 * Assert that `node` is a valid nlcst parent.
 *
 * @param {unknown} [node]
 * @param {Parent} [parent]
 * @returns {asserts node is Parent}
 */
export function parent(node, parent) {
  return wrap(assertParent)(node, parent)
}

// @ts-expect-error: fine.
const all = mapz(assert, {key: 'children'})

const nlcst = zwitch('type', {
  // Core interface.
  // @ts-expect-error: fine.
  unknown,
  // @ts-expect-error: fine.
  invalid: unknown,
  // Per-type handling.
  handlers: {
    // @ts-expect-error: fine.
    RootNode: wrap(RootNode),
    // @ts-expect-error: fine.
    ParagraphNode: parent,
    // @ts-expect-error: fine.
    SentenceNode: parent,
    // @ts-expect-error: fine.
    WordNode: parent,
    // @ts-expect-error: fine.
    TextNode: literal,
    // @ts-expect-error: fine.
    SymbolNode: literal,
    // @ts-expect-error: fine.
    PunctuationNode: literal,
    // @ts-expect-error: fine.
    WhiteSpaceNode: literal,
    // @ts-expect-error: fine.
    SourceNode: literal
  }
})

/**
 * @param {unknown} node
 * @param {Parent} [ancestor]
 * @returns {asserts node is Node}
 */
function unknown(node, ancestor) {
  unistAssert(node, ancestor)
}

/**
 * @param {unknown} node
 * @returns {asserts node is Parent}
 */
function assertParent(node) {
  unistParent(node)
  all(node)
}

/**
 * @param {unknown} node
 * @param {Parent} [ancestor]
 * @returns {asserts node is Root}
 */
function RootNode(node, ancestor) {
  parent(node)
  nodeAssert.strictEqual(
    ancestor,
    undefined,
    '`RootNode` should not have a parent'
  )
}

export {_void, literal, wrap} from 'unist-util-assert'

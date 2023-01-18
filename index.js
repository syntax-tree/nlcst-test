/**
 * @typedef {import('unist').Parent} UnistParent
 *
 * @typedef {import('nlcst').Root} Root
 * @typedef {import('nlcst').Content} Content
 * @typedef {Root | Content} Node
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
 * @param {UnistParent | null | undefined} [parent]
 * @returns {asserts node is Parent}
 */
export function parent(node, parent) {
  return wrap(assertParent)(node, parent)
}

const nlcst = zwitch('type', {
  // Core interface.
  unknown,
  invalid: unknown,
  // Per-type handling.
  handlers: {
    // @ts-expect-error: fine.
    RootNode: wrap(RootNode),
    ParagraphNode: parent,
    SentenceNode: parent,
    WordNode: parent,
    TextNode: literal,
    SymbolNode: literal,
    PunctuationNode: literal,
    WhiteSpaceNode: literal,
    SourceNode: literal
  }
})

const all = mapz(nlcst, {key: 'children'})

/**
 * @param {unknown} node
 * @param {UnistParent | null | undefined} [ancestor]
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
 * @param {Parent | null | undefined} [ancestor]
 * @returns {asserts node is Root}
 */
function RootNode(node, ancestor) {
  assertParent(node)
  nodeAssert.strictEqual(
    ancestor,
    undefined,
    '`RootNode` should not have a parent'
  )
}

export {_void, literal, wrap} from 'unist-util-assert'

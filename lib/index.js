/**
 * @typedef {import('unist').Node} UnistNode
 * @typedef {import('unist').Parent} UnistParent
 * @typedef {import('unist-util-assert').AssertionError} AssertionError
 *
 * @typedef {import('nlcst').Root} Root
 * @typedef {import('nlcst').Content} Content
 */

/**
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
 * Assert that `tree` is a valid nlcst node.
 *
 * If `tree` is a parent, all children will be asserted too.
 *
 * Supports unknown nlcst nodes.
 *
 * @param {unknown} [tree]
 *   Thing to assert.
 * @param {UnistParent | null | undefined} [parent]
 *   Optional, valid parent.
 * @returns {asserts tree is Node}
 *   Nothing.
 * @throws {AssertionError}
 *   When `tree` (or its descendants) is not a nlcst node.
 */
export function assert(tree, parent) {
  return wrap(nlcst)(tree, parent)
}

/**
 * Assert that `tree` is a valid nlcst parent.
 *
 * All children will be asserted too.
 *
 * Supports unknown nlcst nodes.
 *
 * @param {unknown} [tree]
 *   Thing to assert.
 * @param {UnistParent | null | undefined} [parent]
 *   Optional, valid parent.
 * @returns {asserts tree is Parent}
 *   Nothing.
 * @throws {AssertionError}
 *   When `tree` is not a parent or its descendants are not nodes.
 */
export function parent(tree, parent) {
  return wrap(assertParent)(tree, parent)
}

const nlcst = zwitch('type', {
  // Core interface.
  unknown,
  invalid: unknown,
  // Per-type handling.
  handlers: {
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
 * Assert that `node` (which is not a known nlcst node) is a valid unist node.
 *
 * @param {unknown} [node]
 *   Thing to assert.
 * @param {UnistParent | null | undefined} [parent]
 *   Optional, valid parent.
 * @returns {asserts node is UnistNode}
 *   Nothing.
 * @throws {AssertionError}
 *   When `node` is not a unist node.
 */
function unknown(node, parent) {
  unistAssert(node, parent)
}

/**
 * Assert that `tree` is a valid nlcst parent, with valid children.
 *
 * All children will be asserted too.
 *
 * Supports unknown nlcst nodes.
 *
 * @param {unknown} [tree]
 *   Thing to assert.
 * @returns {asserts tree is Parent}
 *   Nothing.
 * @throws {AssertionError}
 *   When `tree` is not a parent or its descendants are not nodes.
 */
function assertParent(tree) {
  unistParent(tree)
  all(tree)
}

/**
 * Assert that `tree` is a nlcst root with valid children.
 *
 * Supports unknown nlcst descendants.
 *
 * @param {unknown} [tree]
 *   Thing to assert.
 * @param {UnistParent | null | undefined} [parent]
 *   Optional, valid parent.
 * @returns {asserts tree is Root}
 *   Nothing.
 * @throws {AssertionError}
 *   When `tree` is not a root or its descendants are not valid.
 */
function RootNode(tree, parent) {
  assertParent(tree)
  nodeAssert.strictEqual(
    parent,
    undefined,
    '`RootNode` should not have a parent'
  )
}

export {_void, literal, wrap} from 'unist-util-assert'

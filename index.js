/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 */

import nodeAssert from 'assert'
import {zwitch} from 'zwitch'
import {mapz} from 'mapz'
import {
  assert as unistAssert,
  parent as unistParent,
  literal,
  _void,
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

export {literal, _void, wrap}

var all = mapz(assert, {key: 'children'})

var nlcst = zwitch('type', {
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
 * @returns {asserts node is Parent}
 */
function RootNode(node, ancestor) {
  parent(node)
  nodeAssert.strictEqual(
    ancestor,
    undefined,
    '`RootNode` should not have a parent'
  )
}

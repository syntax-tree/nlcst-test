'use strict';

/* Dependencies. */
var assert = require('assert');
var zwitch = require('zwitch');
var mapz = require('mapz');
var unist = require('unist-util-assert');

/* Construct. */
var nlcst = zwitch('type');

/* Expose. */
exports = unist.wrap(nlcst);
module.exports = exports;

exports.parent = unist.wrap(parent);
exports.text = unist.text;
exports.void = unist.void;
exports.wrap = unist.wrap;
exports.all = mapz(exports, {key: 'children', indices: false});

/* Core interface. */
nlcst.unknown = unknown;
nlcst.invalid = unknown;

/* Per-type handling. */
nlcst.handlers = {
  RootNode: unist.wrap(RootNode),
  ParagraphNode: exports.parent,
  SentenceNode: exports.parent,
  WordNode: exports.parent,
  TextNode: exports.text,
  SymbolNode: exports.text,
  PunctuationNode: exports.text,
  WhiteSpaceNode: exports.text,
  SourceNode: exports.text
};

function unknown(node, ancestor) {
  unist(node, ancestor);
}

function parent(node) {
  unist.parent(node);
  exports.all(node);
}

function RootNode(node, ancestor) {
  parent(node);
  assert.equal(ancestor, undefined, '`RootNode` should not have a parent');
}

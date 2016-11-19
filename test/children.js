'use strict';

var test = require('tape');
var assert = require('..');

test('children', function (t) {
  t.throws(
    function () {
      assert({type: 'ParagraphNode', children: {alpha: 'bravo'}});
    },
    /^AssertionError: `children` should be an array: `{ type: 'ParagraphNode', children: { alpha: 'bravo' } }`$/,
    'should throw if given a non-node child in children'
  );

  t.throws(
    function () {
      assert({type: 'ParagraphNode', children: ['one']});
    },
    /^AssertionError: node should be an object: `'one'` in `{ type: 'ParagraphNode', children: \[ 'one' ] }`$/,
    'should throw if given a non-node child in children'
  );

  t.doesNotThrow(
    function () {
      assert({type: 'ParagraphNode', children: [{type: 'TextNode', value: 'alpha'}]});
    },
    'should not throw on vald children'
  );

  t.throws(
    function () {
      assert({type: 'ParagraphNode', children: [{
        type: 'bar',
        children: ['one']
      }]});
    },
    /^AssertionError: node should be an object: `'one'` in `{ type: 'bar', children: \[ 'one' ] }`$/,
    'should throw on invalid descendants'
  );

  t.end();
});

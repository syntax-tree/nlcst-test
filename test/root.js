'use strict'

var test = require('tape')
var assert = require('..')

test('assert(RootNode)', function(t) {
  t.throws(
    function() {
      assert({type: 'RootNode'})
    },
    /parent should have `children`: `{ type: 'RootNode' }`$/,
    'should throw if a `RootNode` is not a parent'
  )

  t.throws(
    function() {
      assert({
        type: 'ParagraphNode',
        children: [{type: 'RootNode', children: []}]
      })
    },
    /`RootNode` should not have a parent: `{ type: 'RootNode', children: \[] }` in `{ type: 'ParagraphNode',\n {2}children: \[ { type: 'RootNode', children: \[] } ] }`$/,
    'should throw if a `RootNode` has a parent'
  )

  t.end()
})

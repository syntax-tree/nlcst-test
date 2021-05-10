import test from 'tape'
import {assert} from '../index.js'

test('assert(RootNode)', function (t) {
  t.throws(
    function () {
      assert({type: 'RootNode'})
    },
    /parent should have `children`: `{ type: 'RootNode' }`$/,
    'should throw if a `RootNode` is not a parent'
  )

  t.throws(
    function () {
      assert({
        type: 'ParagraphNode',
        children: [{type: 'RootNode', children: []}]
      })
    },
    /`RootNode` should not have a parent: `{ type: 'RootNode', children: \[] }`/,
    'should throw if a `RootNode` has a parent'
  )

  t.end()
})

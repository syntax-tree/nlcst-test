import test from 'tape'
import {assert} from '../index.js'

test('assert(RootNode)', (t) => {
  t.throws(
    () => {
      assert({type: 'RootNode'})
    },
    /parent should have `children`: `{ type: 'RootNode' }`$/,
    'should throw if a `RootNode` is not a parent'
  )

  t.throws(
    () => {
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

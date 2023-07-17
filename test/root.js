import nodeAssert from 'node:assert/strict'
import test from 'node:test'
import {assert} from '../index.js'

test('assert(RootNode)', async function (t) {
  await t.test(
    'should throw if a `RootNode` is not a parent',
    async function () {
      nodeAssert.throws(function () {
        assert({type: 'RootNode'})
      }, /parent should have `children`: `{ type: 'RootNode' }`$/)
    }
  )

  await t.test('should throw if a `RootNode` has a parent', async function () {
    nodeAssert.throws(function () {
      assert({
        type: 'ParagraphNode',
        children: [{type: 'RootNode', children: []}]
      })
    }, /`RootNode` should not have a parent: `{ type: 'RootNode', children: \[] }`/)
  })
})

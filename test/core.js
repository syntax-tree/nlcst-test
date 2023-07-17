import nodeAssert from 'node:assert/strict'
import test from 'node:test'

test('core', async function () {
  nodeAssert.deepEqual(
    Object.keys(await import('../index.js')).sort(),
    ['_void', 'assert', 'literal', 'parent', 'wrap'],
    'should expose the public api'
  )
})

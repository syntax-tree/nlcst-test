import nodeAssert from 'node:assert/strict'
import test from 'node:test'

test('core', async function (t) {
  await t.test('should expose the public api', async function () {
    nodeAssert.deepEqual(Object.keys(await import('../index.js')).sort(), [
      '_void',
      'assert',
      'literal',
      'parent',
      'wrap'
    ])
  })
})

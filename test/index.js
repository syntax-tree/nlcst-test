/* eslint-disable import/no-unassigned-import */
import './node.js'
import './children.js'
import './root.js'
/* eslint-enable import/no-unassigned-import */

import nodeAssert from 'node:assert/strict'
import test from 'node:test'
import * as mod from '../index.js'

test('api', () => {
  nodeAssert.deepEqual(
    Object.keys(mod).sort(),
    ['_void', 'assert', 'literal', 'parent', 'wrap'],
    'should expose the public api'
  )
})

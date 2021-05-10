import test from 'tape'
import {assert} from '../index.js'

test('children', function (t) {
  t.throws(
    function () {
      assert({type: 'ParagraphNode', children: {alpha: 'bravo'}})
    },
    /`children` should be an array: `{ type: 'ParagraphNode', children: { alpha: 'bravo' } }`$/,
    'should throw if given a non-node child in children'
  )

  t.throws(
    function () {
      assert({type: 'ParagraphNode', children: ['one']})
    },
    /node should be an object: `'one'` in `{ type: 'ParagraphNode', children: \[ 'one' ] }`$/,
    'should throw if given a non-node child in children'
  )

  t.doesNotThrow(function () {
    assert({
      type: 'ParagraphNode',
      children: [{type: 'TextNode', value: 'alpha'}]
    })
  }, 'should not throw on vald children')

  t.throws(
    function () {
      assert({
        type: 'ParagraphNode',
        children: [
          {
            type: 'bar',
            children: ['one']
          }
        ]
      })
    },
    /node should be an object: `'one'` in `{ type: 'bar', children: \[ 'one' ] }`$/,
    'should throw on invalid descendants'
  )

  t.end()
})

'use strict';

/**
 * Dependencies.
 */

var nlcstTest,
    assert;

nlcstTest = require('./');
assert = require('assert');

describe('nlcstTest(value)', function () {
    it('should throw on omitted values', function () {
        assert.throws(function () {
            nlcstTest();
        }, /`undefined` is not-a-node/);
    });

    it('should throw on `null` values', function () {
        assert.throws(function () {
            nlcstTest(null);
        }, /`null` is not-a-node/);
    });

    it('should throw on `number` values', function () {
        assert.throws(function () {
            nlcstTest(1);
        }, /`1` is not-a-node/);
    });

    it('should throw on `string` values', function () {
        assert.throws(function () {
            nlcstTest('unicorn');
        }, /`unicorn` is not-a-node/);
    });

    it('should throw on `boolean` values', function () {
        assert.throws(function () {
            nlcstTest(true);
        }, /`true` is not-a-node/);
    });

    it('should throw on `Array` values', function () {
        assert.throws(function () {
            nlcstTest([{
                'type': 'node'
            }]);
        }, /`\[object Object\]` is not-a-node/);
    });

    it('should throw on unknown objects', function () {
        assert.throws(function () {
            nlcstTest(Math);
        }, /`\[object Math\]` is not-a-node/);
    });

    it('should throw on nodes without `type`', function () {
        assert.throws(function () {
            nlcstTest({});
        }, /`\[object Object\]` is missing a `type` property/);
    });

    it('should throw on nodes with a non-string `type`', function () {
        assert.throws(function () {
            nlcstTest({
                'type': Infinity
            });
        }, /`Infinity` is not a valid type/);
    });

    it('should throw on nodes without a known `type`', function () {
        assert.throws(function () {
            nlcstTest({
                'type': 'UnicornNode'
            });
        }, /`UnicornNode` is not a known or valid type/);
    });

    it('should throw on non-stringifyable data properties', function () {
        assert.throws(function () {
            var node;

            node = {
                'type': 'Node',
                'data': {}
            };

            node.data.cyclical = node;

            nlcstTest(node);
        }, /Converting circular structure to JSON/);
    });

    it('should NOT throw on stringifyable data properties', function () {
        assert.doesNotThrow(function () {
            nlcstTest({
                'type': 'Text',
                'value': 'nodes',
                'data': {
                    'partOfSpeach': 'NN',
                    'stem': 'node'
                }
            });
        });
    });

    it('should throw on nodes with both `value` and `children`', function () {
        assert.throws(function () {
            nlcstTest({
                'type': 'ParagraphNode',
                'value': 'Value',
                'children': []
            });
        }, /`\[object Object\]` has both a value and a children attribute/);
    });

    it('should throw on nodes with non-string `value`', function () {
        assert.throws(function () {
            nlcstTest({
                'type': 'Text',
                'value': Infinity
            });
        }, /`Infinity` is not a valid value/);
    });

    it('should throw on nodes with empty `value`', function () {
        assert.throws(function () {
            nlcstTest({
                'type': 'Text',
                'value': ''
            });
        }, /`` is not a valid value/);
    });

    it('should throw on nodes with non-Array `children`', function () {
        assert.throws(function () {
            nlcstTest({
                'type': 'Parent',
                'children': Infinity
            });
        }, /`Infinity` is not a valid children/);
    });

    it('should throw on nodes with empty `children`', function () {
        assert.throws(function () {
            nlcstTest({
                'type': 'Parent',
                'children': []
            });
        }, /`` is not a valid children/);
    });

    it('should throw on `Parent`s without `children`', function () {
        assert.throws(function () {
            nlcstTest({
                'type': 'Parent'
            });
        }, /Missing `children` attribute for parent `\[object Object\]`/);
    });

    it('should throw on `ParagraphNode`s without `children`', function () {
        assert.throws(function () {
            nlcstTest({
                'type': 'ParagraphNode'
            });
        }, /Missing `children` attribute for parent `\[object Object\]`/);
    });

    it('should throw on `SentenceNode`s without `children`', function () {
        assert.throws(function () {
            nlcstTest({
                'type': 'SentenceNode'
            });
        }, /Missing `children` attribute for parent `\[object Object\]`/);
    });

    it('should throw on `WordNode`s without `children`', function () {
        assert.throws(function () {
            nlcstTest({
                'type': 'WordNode'
            });
        }, /Missing `children` attribute for parent `\[object Object\]`/);
    });

    it('should throw on `Text`s without `value`', function () {
        assert.throws(function () {
            nlcstTest({
                'type': 'Text'
            });
        }, /Missing `value` attribute for text `\[object Object\]`/);
    });

    it('should throw on `TextNode`s without `value`', function () {
        assert.throws(function () {
            nlcstTest({
                'type': 'TextNode'
            });
        }, /Missing `value` attribute for text `\[object Object\]`/);
    });

    it('should throw on `SourceNode`s without `value`', function () {
        assert.throws(function () {
            nlcstTest({
                'type': 'TextNode'
            });
        }, /Missing `value` attribute for text `\[object Object\]`/);
    });

    it('should throw on `WhiteSpaceNode`s without `value`', function () {
        assert.throws(function () {
            nlcstTest({
                'type': 'WhiteSpaceNode'
            });
        }, /Missing `value` attribute for text `\[object Object\]`/);
    });

    it('should throw on `SymbolNode`s without `value`', function () {
        assert.throws(function () {
            nlcstTest({
                'type': 'SymbolNode'
            });
        }, /Missing `value` attribute for text `\[object Object\]`/);
    });

    it('should throw on `PunctuationNode`s without `value`', function () {
        assert.throws(function () {
            nlcstTest({
                'type': 'PunctuationNode'
            });
        }, /Missing `value` attribute for text `\[object Object\]`/);
    });

    it('should NOT throw on `Node`s with neither `children` not `value`',
        function () {
            assert.doesNotThrow(function () {
                nlcstTest({
                    'type': 'Node'
                });
            });
        }
    );

    it('should NOT throw on `Parent`s with `children`', function () {
        assert.doesNotThrow(function () {
            nlcstTest({
                'type': 'Parent',
                'children': [
                    {
                        'type': 'Text',
                        'value': 'Value'
                    }
                ]
            });
        });
    });

    it('should NOT throw on `ParagraphNode`s with `children`',
        function () {
            assert.doesNotThrow(function () {
                nlcstTest({
                    'type': 'ParagraphNode',
                    'children': [
                        {
                            'type': 'Text',
                            'value': 'Value'
                        }
                    ]
                });
            });
        }
    );

    it('should NOT throw on `SentenceNode`s with `children`', function () {
        assert.doesNotThrow(function () {
            nlcstTest({
                'type': 'SentenceNode',
                'children': [
                    {
                        'type': 'Text',
                        'value': 'Value'
                    }
                ]
            });
        });
    });

    it('should NOT throw on `WordNode`s with `children`', function () {
        assert.doesNotThrow(function () {
            nlcstTest({
                'type': 'WordNode',
                'children': [
                    {
                        'type': 'Text',
                        'value': 'Value'
                    }
                ]
            });
        });
    });

    it('should NOT throw on `Text`s with `value`', function () {
        assert.doesNotThrow(function () {
            nlcstTest({
                'type': 'Text',
                'value': 'Value'
            });
        });
    });

    it('should NOT throw on `TextNode`s with `value`', function () {
        assert.doesNotThrow(function () {
            nlcstTest({
                'type': 'TextNode',
                'value': 'Value'
            });
        });
    });

    it('should NOT throw on `WhiteSpaceNode`s with `value`', function () {
        assert.doesNotThrow(function () {
            nlcstTest({
                'type': 'WhiteSpaceNode',
                'value': 'Value'
            });
        });
    });

    it('should NOT throw on `SymbolNode`s with `value`', function () {
        assert.doesNotThrow(function () {
            nlcstTest({
                'type': 'SymbolNode',
                'value': 'Value'
            });
        });
    });

    it('should NOT throw on `PunctuationNode`s with `value`', function () {
        assert.doesNotThrow(function () {
            nlcstTest({
                'type': 'PunctuationNode',
                'value': 'Value'
            });
        });
    });

    it('should NOT throw on `SourceNode`s with `value`', function () {
        assert.doesNotThrow(function () {
            nlcstTest({
                'type': 'TextNode',
                'value': 'Value'
            });
        });
    });
});

'use strict';

/* istanbul ignore if */
if (!JSON) {
    throw new Error(
        'Missing `JSON` for `nlcst-test`'
    );
}

/* istanbul ignore if */
if (![].indexOf) {
    throw new Error(
        'Missing `Array#indexOf` for `nlcst-test`'
    );
}

/**
 * Shortcuts.
 */

var objectToString,
    has;

objectToString = Object.prototype.toString;
has = Object.prototype.hasOwnProperty;

/**
 * Constants.
 */

var KNOWN_TYPES;

KNOWN_TYPES = [
    'Node',
    'Parent',
    'RootNode',
    'ParagraphNode',
    'SentenceNode',
    'WordNode',
    'SymbolNode',
    'PunctuationNode',
    'WhiteSpaceNode',
    'Text',
    'SourceNode',
    'TextNode'
];

/**
 * Test a node.
 *
 * @param {NLCSTNode} nlcst
 * @throws {Error}
 */

function test(cst) {
    /**
     * Test the basics of `Node`.
     */

    if (objectToString.call(cst) !== '[object Object]') {
        throw new TypeError(
            '`' + cst + '` is not-a-node'
        );
    }

    /**
     * Test `cst`s `type`.
     */

    if (!has.call(cst, 'type')) {
        throw new TypeError(
            '`' + cst + '` is missing a `type` ' +
            'property'
        );
    }

    if (typeof cst.type !== 'string') {
        throw new TypeError(
            '`' + cst.type + '` is not a valid ' +
            'type'
        );
    }

    if (KNOWN_TYPES.indexOf(cst.type) === -1) {
        throw new TypeError(
            '`' + cst.type + '` is not a known ' +
            'or valid type'
        );
    }

    if (has.call(cst, 'data') && cst.data !== null) {
        /**
         * Throws if `data` is not stringifyable.
         */

        JSON.stringify(cst.data);
    }

    /**
     * Test if `cst` is not both a parent and a text.
     */

    if (has.call(cst, 'value') && has.call(cst, 'children')) {
        throw new TypeError(
            '`' + cst + '` has both a value and ' +
            'a children attribute'
        );
    }

    /**
     * Test `cst.value`, if applicable.
     */

    if (has.call(cst, 'value')) {
        if (typeof cst.value !== 'string') {
            throw new TypeError(
                '`' + cst.value + '` is not a valid ' +
                'value'
            );
        }

        if (cst.value.length === 0) {
            throw new TypeError(
                '`' + cst.value + '` is not a valid ' +
                'value'
            );
        }
    }

    /**
     * Test `cst.children`, if applicable.
     */

    if (has.call(cst, 'children')) {
        if (objectToString.call(cst.children) !== '[object Array]') {
            throw new TypeError(
                '`' + cst.children + '` is not a valid ' +
                'children'
            );
        }

        if (cst.children.length === 0) {
            throw new TypeError(
                '`' + cst.children + '` is not a valid ' +
                'children'
            );
        }
    }

    /**
     * Validate `cst` if `cst` is a parent.
     */

    if (
        cst.type === 'Parent' ||
        cst.type === 'RootNode' ||
        cst.type === 'ParagraphNode' ||
        cst.type === 'SentenceNode' ||
        cst.type === 'WordNode'
    ) {
        if (!has.call(cst, 'children')) {
            throw new TypeError(
                'Missing `children` attribute for ' +
                'parent `' + cst + '`'
            );
        }
    } else if (
        cst.type === 'Text' ||
        cst.type === 'SymbolNode' ||
        cst.type === 'PunctuationNode' ||
        cst.type === 'WhiteSpaceNode' ||
        cst.type === 'SourceNode' ||
        cst.type === 'TextNode'
    ) {
        if (!has.call(cst, 'value')) {
            throw new TypeError(
                'Missing `value` attribute for ' +
                'text `' + cst + '`'
            );
        }
    } else {
        /**
         * Should've been captured by the
         * known-type test.
         */

        /* istanbul ignore if */
        if (cst.type !== 'Node') {
            throw new TypeError(
                'Missing `value` attribute for ' +
                'text `' + cst + '`'
            );
        }
    }
}

/**
 * Test a node.
 *
 * @param {NLCSTNode} nlcst
 * @throws {Error}
 */

function nlcstTest(nlcst) {
    var index,
        children;

    /**
     * First test the thing...
     */

    test(nlcst);

    /**
     * Then, test its children (if applicable).
     */

    children = nlcst.children;

    if (children) {
        index = children.length;

        while (index--) {
            nlcstTest(children[index]);
        }
    }
}

module.exports = nlcstTest;

import {expectType, expectNotType} from 'tsd'
import type {Parent as UnistParent} from 'unist'
import type {Root, Content} from 'nlcst'
import {assert, parent} from './index.js'

type Node = Root | Content
type Parent = Extract<Node, UnistParent>

const emptyNode = {type: 'a'}
const literalNode = {type: 'TextNode', value: 'c'}
const parentNode = {type: 'd', children: [emptyNode, literalNode]}

expectNotType<Node>(emptyNode)
expectNotType<Node>(literalNode)
expectNotType<Node>(parentNode)

assert(emptyNode)
expectType<Node>(emptyNode)

expectNotType<Parent>(parentNode)
parent(parentNode)
expectType<Parent>(parentNode)

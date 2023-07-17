import type {Nodes, Parents} from 'nlcst'
import {expectNotType, expectType} from 'tsd'
import {assert, parent} from './index.js'

const emptyNode = {type: 'a'}
const literalNode = {type: 'TextNode', value: 'c'}
const parentNode = {type: 'd', children: [emptyNode, literalNode]}

expectNotType<Nodes>(emptyNode)
expectNotType<Nodes>(literalNode)
expectNotType<Nodes>(parentNode)

assert(emptyNode)
expectType<Nodes>(emptyNode)

expectNotType<Parents>(parentNode)
parent(parentNode)
expectType<Parents>(parentNode)

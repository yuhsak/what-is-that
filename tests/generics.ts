import {
  isObjectAs,
  isObjectLikeAs,
  isFunctionAs,
  isGeneratorFunctionAs,
  isGeneratorAs,
  isAsyncGeneratorFunctionAs,
  isAsyncGeneratorAs,
  isPromiseAs,
  isArrayAs,
  isSetAs,
  isMapAs,
  isWeakSetAs,
  isWeakMapAs,
  isUnknownAs,
} from '../index'
import * as o from './__object'

type O = { a: string }
type F = (arg: string) => string
type G = Generator<string, boolean, number>
type AG = AsyncGenerator<string, boolean, number>
type GF = () => G
type AGF = () => AG

describe('is:generics', () => {
  test('isObjectAs', () => {
    expect(isObjectAs<O>(o.object)).toBe(true)
    expect(isObjectAs<O>(o.objectLike)).toBe(false)
  })

  test('isObjectLikeAs', () => {
    expect(isObjectLikeAs<O>(o.objectLike)).toBe(true)
    expect(isObjectLikeAs<O>(o.object)).toBe(false)
  })

  test('isFunctionAs', () => {
    expect(isFunctionAs<F>(() => {})).toBe(true)
  })

  test('isGeneratorFunctionAs', () => {
    expect(isGeneratorFunctionAs<GF>(o.generatorFunction)).toBe(true)
  })

  test('isGeneratorAs', () => {
    expect(isGeneratorAs<G>(o.generator)).toBe(true)
  })

  test('isAsyncGeneratorFunctionAs', () => {
    expect(isAsyncGeneratorFunctionAs<AGF>(o.asyncGeneratorFunction)).toBe(true)
  })

  test('isAsyncGeneratorAs', () => {
    expect(isAsyncGeneratorAs<AG>(o.asyncGenerator)).toBe(true)
  })

  test('isPromiseAs', () => {
    expect(isPromiseAs<Promise<string>>(Promise.resolve())).toBe(true)
  })

  test('isArrayAs', () => {
    expect(isArrayAs<Array<string>>([])).toBe(true)
  })

  test('isSetAs', () => {
    expect(isSetAs<Set<string>>(new Set())).toBe(true)
  })

  test('isMapAs', () => {
    expect(isMapAs<Map<string, string>>(new Map())).toBe(true)
  })

  test('isWeakSetAs', () => {
    expect(isWeakSetAs<WeakSet<O>>(new WeakSet())).toBe(true)
  })

  test('isWeakMapAs', () => {
    expect(isWeakMapAs<WeakMap<O, string>>(new WeakMap())).toBe(true)
  })

  test('isUnknownAs', () => {
    expect(isUnknownAs<O>(o.unknown)).toBe(true)
  })
})

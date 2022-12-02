import { what, getReprStr } from '../index'
import * as o from './__object'

describe('what', () => {
  describe('getReprStr', () => {
    expect(getReprStr(true)).toBe('Boolean')
  })

  describe('Primitive', () => {
    test('Undefined', () => {
      expect(what(undefined)).toBe('Undefined')
    })

    test('Null', () => {
      expect(what(null)).toBe('Null')
    })

    test('Number', () => {
      expect(what(1)).toBe('Number')
    })

    test('Boolean', () => {
      expect(what(true)).toBe('Boolean')
    })

    test('String', () => {
      expect(what('isthat')).toBe('String')
    })

    test('Symbol', () => {
      expect(what(Symbol('isthat'))).toBe('Symbol')
    })

    test('BigInt', () => {
      expect(what(BigInt('1'))).toBe('BigInt')
    })
  })

  describe('Object', () => {
    test('Object', () => {
      expect(what(o.object)).toBe('Object')
    })

    test('ObjectLike', () => {
      expect(what(o.objectLike)).toBe('ObjectLike')
    })

    test('Function', () => {
      expect(what(o.ObjectLike)).toBe('Function')
      expect(what(() => {})).toBe('Function')
    })

    test('GeneratorFunction', () => {
      expect(what(o.generatorFunction)).toBe('GeneratorFunction')
    })

    test('Generator', () => {
      expect(what(o.generator)).toBe('Generator')
    })

    test('AsyncGeneratorFunction', () => {
      expect(what(o.asyncGeneratorFunction)).toBe('AsyncGeneratorFunction')
    })

    test('AsyncGenerator', () => {
      expect(what(o.asyncGenerator)).toBe('AsyncGenerator')
    })

    test('RegExp', () => {
      expect(what(new RegExp(''))).toBe('RegExp')
    })

    test('Date', () => {
      expect(what(new Date())).toBe('Date')
    })

    test('Promise', () => {
      expect(what(Promise.resolve())).toBe('Promise')
    })

    test('Error', () => {
      expect(what(new Error())).toBe('Error')
    })

    test('URL', () => {
      expect(what(o.url)).toBe('URL')
    })

    test('URLSearchParams', () => {
      expect(what(o.urlSearchParams)).toBe('URLSearchParams')
    })

    test('Array', () => {
      expect(what([])).toBe('Array')
    })

    test('Set', () => {
      expect(what(new Set())).toBe('Set')
    })

    test('Map', () => {
      expect(what(new Map())).toBe('Map')
    })

    test('WeakSet', () => {
      expect(what(new WeakSet())).toBe('WeakSet')
    })

    test('WeakMap', () => {
      expect(what(new WeakMap())).toBe('WeakMap')
    })

    test('DataView', () => {
      expect(what(new DataView(new ArrayBuffer(1)))).toBe('DataView')
    })

    test('Buffer', () => {
      expect(what(Buffer.from('isthat'))).toBe('Buffer')
    })

    test('ArrayBuffer', () => {
      expect(what(new ArrayBuffer(1))).toBe('ArrayBuffer')
    })

    test('SharedArrayBuffer', () => {
      expect(what(new SharedArrayBuffer(1))).toBe('SharedArrayBuffer')
    })

    test('Int8Array', () => {
      expect(what(new Int8Array())).toBe('Int8Array')
    })

    test('Uint8Array', () => {
      expect(what(new Uint8Array())).toBe('Uint8Array')
    })

    test('Uint8ClampedArray', () => {
      expect(what(new Uint8ClampedArray())).toBe('Uint8ClampedArray')
    })

    test('Int16Array', () => {
      expect(what(new Int16Array())).toBe('Int16Array')
    })

    test('Uint16Array', () => {
      expect(what(new Uint16Array())).toBe('Uint16Array')
    })

    test('Int32Array', () => {
      expect(what(new Int32Array())).toBe('Int32Array')
    })

    test('Uint32Array', () => {
      expect(what(new Uint32Array())).toBe('Uint32Array')
    })

    test('Float32Array', () => {
      expect(what(new Float32Array())).toBe('Float32Array')
    })

    test('Float64Array', () => {
      expect(what(new Float64Array())).toBe('Float64Array')
    })

    test('BigInt64Array', () => {
      expect(what(new BigInt64Array())).toBe('BigInt64Array')
    })

    test('BigUint64Array', () => {
      expect(what(new BigUint64Array())).toBe('BigUint64Array')
    })

    test('Blob', () => {
      expect(what(new Blob())).toBe('Blob')
    })

    test('File', () => {
      expect(what(o.file)).toBe('File')
    })

    test('Unknown', () => {
      expect(what(o.unknown)).toBe('Unknown')
    })
  })
})

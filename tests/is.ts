import * as that from '../index'
import * as o from './__object'

describe('is', () => {

  test('isUndefined', () => {
    expect(that.isUndefined(void (0))).toBe(true)
  })

  test('isNull', () => {
    expect(that.isNull(null)).toBe(true)
  })

  test('isNumber', () => {
    expect(that.isNumber(1)).toBe(true)
  })

  test('isBoolean', () => {
    expect(that.isBoolean(true)).toBe(true)
  })

  test('isString', () => {
    expect(that.isString('1')).toBe(true)
  })

  test('isSymbol', () => {
    expect(that.isSymbol(Symbol())).toBe(true)
  })

  test('isBigInt', () => {
    expect(that.isBigInt(BigInt('1'))).toBe(true)
  })

  test('isObject', () => {
    expect(that.isObject(o.object)).toBe(true)
    expect(that.isObject(o.objectLike)).toBe(false)
  })

  test('isObjectLike', () => {
    expect(that.isObjectLike(o.object)).toBe(false)
    expect(that.isObjectLike(o.objectLike)).toBe(true)
  })

  test('isFunction', () => {
    expect(that.isFunction(() => {})).toBe(true)
  })

  test('isGeneratorFunction', () => {
    expect(that.isGeneratorFunction(o.generatorFunction)).toBe(true)
  })

  test('isGenerator', () => {
    expect(that.isGenerator(o.generator)).toBe(true)
  })

  test('isAsyncGeneratorFunction', () => {
    expect(that.isAsyncGeneratorFunction(o.asyncGeneratorFunction)).toBe(true)
  })

  test('isAsyncGenerator', () => {
    expect(that.isAsyncGenerator(o.asyncGenerator)).toBe(true)
  })

  test('isRegExp', () => {
    expect(that.isRegExp(new RegExp(''))).toBe(true)
  })

  test('isDate', () => {
    expect(that.isDate(new Date())).toBe(true)
  })

  test('isPromise', () => {
    expect(that.isPromise(Promise.resolve())).toBe(true)
  })

  test('isError', () => {
    expect(that.isError(new Error())).toBe(true)
  })

  test('isURL', () => {
    expect(that.isURL(o.url)).toBe(true)
  })

  test('isURLSearchParams', () => {
    expect(that.isURLSearchParams(o.urlSearchParams)).toBe(true)
  })

  test('isArray', () => {
    expect(that.isArray([])).toBe(true)
  })

  test('isSet', () => {
    expect(that.isSet(new Set())).toBe(true)
  })

  test('isMap', () => {
    expect(that.isMap(new Map())).toBe(true)
  })

  test('isWeakSet', () => {
    expect(that.isWeakSet(new WeakSet())).toBe(true)
  })

  test('isWeakMap', () => {
    expect(that.isWeakMap(new WeakMap())).toBe(true)
  })

  test('isDataView', () => {
    expect(that.isDataView(new DataView(new ArrayBuffer(1)))).toBe(true)
  })

  test('isBuffer', () => {
    expect(that.isBuffer(Buffer.from(''))).toBe(true)
  })

  test('isArrayBuffer', () => {
    expect(that.isArrayBuffer(new ArrayBuffer(1))).toBe(true)
  })

  test('isSharedArrayBuffer', () => {
    expect(that.isSharedArrayBuffer(new SharedArrayBuffer(1))).toBe(true)
  })

  test('isInt8Array', () => {
    expect(that.isInt8Array(new Int8Array())).toBe(true)
  })

  test('isUint8Array', () => {
    expect(that.isUint8Array(new Uint8Array())).toBe(true)
  })

  test('isUint8ClampedArray', () => {
    expect(that.isUint8ClampedArray(new Uint8ClampedArray())).toBe(true)
  })

  test('isInt16Array', () => {
    expect(that.isInt16Array(new Int16Array())).toBe(true)
  })

  test('isUint16Array', () => {
    expect(that.isUint16Array(new Uint16Array())).toBe(true)
  })

  test('isInt32Array', () => {
    expect(that.isInt32Array(new Int32Array())).toBe(true)
  })

  test('isUint32Array', () => {
    expect(that.isUint32Array(new Uint32Array())).toBe(true)
  })

  test('isFloat32Array', () => {
    expect(that.isFloat32Array(new Float32Array())).toBe(true)
  })

  test('isFloat64Array', () => {
    expect(that.isFloat64Array(new Float64Array())).toBe(true)
  })

  test('isBigInt64Array', () => {
    expect(that.isBigInt64Array(new BigInt64Array())).toBe(true)
  })

  test('isBigUint64Array', () => {
    expect(that.isBigUint64Array(new BigUint64Array())).toBe(true)
  })

  test('isBlob', () => {
    expect(that.isBlob(new Blob())).toBe(true)
  })

  test('isFile', () => {
    expect(that.isFile(o.file)).toBe(true)
  })

  test('isUnknown', () => {
    expect(that.isUnknown(o.unknown)).toBe(true)
  })

})

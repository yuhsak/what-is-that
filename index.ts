export type Type =
  'Undefined' |
  'Null' |
  'Number' |
  'Boolean' |
  'String' |
  'Symbol' |
  'BigInt' |
  'Object' |
  'ObjectLike' |
  'Function' |
  'GeneratorFunction' |
  'Generator' |
  'RegExp' |
  'Date' |
  'Blob' |
  'File' |
  'Promise' |
  'Error' |
  'TextEncoder' |
  'TextDecoder' |
  'URL' |
  'URLSearchParams' |
  'Array' |
  'Set' |
  'Map' |
  'WeakSet' |
  'WeakMap' |
  'DataView' |
  'Buffer' |
  'ArrayBuffer' |
  'SharedArrayBuffer' |
  'Int8Array' |
  'Uint8Array' |
  'Uint8ClampedArray' |
  'Int16Array' |
  'Uint16Array' |
  'Int32Array' |
  'Uint32Array' |
  'Float32Array' |
  'Float64Array' |
  'BigInt64Array' |
  'BigUint64Array' |
  'Unknown'

export function getReprStr(obj: any) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}

export function what(obj: any): Type {

  var t = getReprStr(obj)

  if (t === 'Undefined') return 'Undefined'
  if (t === 'Null') return 'Null'
  if (t === 'Number') return 'Number'
  if (t === 'Boolean') return 'Boolean'
  if (t === 'String') return 'String'
  if (t === 'Symbol') return 'Symbol'
  if (t === 'BigInt') return 'BigInt'
  if (t === 'Object' && obj.constructor === Object && Object.getPrototypeOf(obj) === Object.prototype) return 'Object'
  if (t === 'Function') return 'Function'
  if (t === 'GeneratorFunction') return 'GeneratorFunction'
  if (t === 'Generator') return 'Generator'
  if (t === 'RegExp') return 'RegExp'
  if (t === 'Date') return 'Date'
  if (t === 'Blob') return 'Blob'
  if (t === 'File') return 'File'
  if (t === 'Promise') return 'Promise'
  if (t === 'Error') return 'Error'
  if (t === 'TextEncoder') return 'TextEncoder'
  if (t === 'TextDecoder') return 'TextDecoder'
  if (t === 'URL') return 'URL'
  if (t === 'URLSearchParams') return 'URLSearchParams'
  if (t === 'Array') return 'Array'
  if (t === 'Set') return 'Set'
  if (t === 'Map') return 'Map'
  if (t === 'WeakSet') return 'WeakSet'
  if (t === 'WeakMap') return 'WeakMap'
  if (t === 'DataView') return 'DataView'
  // Must handle Buffer before Uint8Array because Buffer has 'Uint8Array]' for its string representation
  if (obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)) return 'Buffer'
  if (t === 'ArrayBuffer') return 'ArrayBuffer'
  if (t === 'SharedArrayBuffer') return 'SharedArrayBuffer'
  if (t === 'Int8Array') return 'Int8Array'
  if (t === 'Uint8Array') return 'Uint8Array'
  if (t === 'Uint8ClampedArray') return 'Uint8ClampedArray'
  if (t === 'Int16Array') return 'Int16Array'
  if (t === 'Uint16Array') return 'Uint16Array'
  if (t === 'Int32Array') return 'Int32Array'
  if (t === 'Uint32Array') return 'Uint32Array'
  if (t === 'Float32Array') return 'Float32Array'
  if (t === 'Float64Array') return 'Float64Array'
  if (t === 'BigInt64Array') return 'BigInt64Array'
  if (t === 'BigUint64Array') return 'BigUint64Array'
  if (t === 'Object') return 'ObjectLike'

  return 'Unknown'

}

export function isUndefined(obj: any): obj is undefined {
  return what(obj) === 'Undefined'
}

export function isNull(obj: any): obj is null {
  return what(obj) === 'Null'
}

export function isNumber(obj: any): obj is number {
  return what(obj) === 'Number'
}

export function isBoolean(obj: any): obj is boolean {
  return what(obj) === 'Boolean'
}

export function isString(obj: any): obj is string {
  return what(obj) === 'String'
}

export function isSymbol(obj: any): obj is symbol {
  return what(obj) === 'Symbol'
}

export function isBigInt(obj: any): obj is BigInt {
  return what(obj) === 'BigInt'
}

export function isObject(obj: any): obj is Record<string, any> {
  return what(obj) === 'Object'
}

export function isObjectAs<T extends Record<string, any>>(obj: any): obj is T {
  return what(obj) === 'Object'
}

export function isObjectLike(obj: any): obj is Record<string | number | symbol, any> {
  return what(obj) === 'ObjectLike'
}

export function isObjectLikeAs<T extends Record<string | number | symbol, any>>(obj: any): obj is T {
  return what(obj) === 'ObjectLike'
}

export function isFunction(obj: any): obj is Function {
  return what(obj) === 'Function'
}

export function isFunctionAs<T extends (...args: any[]) => any>(obj: any): obj is T {
  return what(obj) === 'Function'
}

export function isRegExp(obj: any): obj is RegExp {
  return what(obj) === 'RegExp'
}

export function isDate(obj: any): obj is Date {
  return what(obj) === 'Date'
}

export function isBlob(obj: any): obj is Blob {
  return what(obj) === 'Blob'
}

export function isFile(obj: any): obj is File {
  return what(obj) === 'File'
}

export function isPromise(obj: any): obj is Promise<any> {
  return what(obj) === 'Promise'
}

export function isPromiseAs<T extends Promise<any>>(obj: any): obj is T {
  return what(obj) === 'Promise'
}

export function isError(obj: any): obj is Error {
  return what(obj) === 'Error'
}

export function isTextEncoder(obj: any): obj is TextEncoder {
  return what(obj) === 'TextEncoder'
}

export function isTextDecoder(obj: any): obj is TextDecoder {
  return what(obj) === 'TextDecoder'
}

export function isURL(obj: any): obj is URL {
  return what(obj) === 'URL'
}

export function isURLSearchParams(obj: any): obj is URLSearchParams {
  return what(obj) === 'URLSearchParams'
}

export function isArray(obj: any): obj is Array<any> {
  return what(obj) === 'Array'
}

export function isArrayAs<T extends Array<any>>(obj: any): obj is T {
  return what(obj) === 'Array'
}

export function isSet(obj: any): obj is Set<any> {
  return what(obj) === 'Set'
}

export function isSetAs<T extends Set<any>>(obj: any): obj is T {
  return what(obj) === 'Set'
}

export function isMap(obj: any): obj is Map<any, any> {
  return what(obj) === 'Map'
}

export function isMapAs<T extends Map<any, any>>(obj: any): obj is T {
  return what(obj) === 'Map'
}

export function isWeakSet(obj: any): obj is WeakSet<any> {
  return what(obj) === 'WeakSet'
}

export function isWeakSetAs<T extends WeakSet<any>>(obj: any): obj is T {
  return what(obj) === 'WeakSet'
}

export function isWeakMap(obj: any): obj is WeakMap<any, any> {
  return what(obj) === 'WeakMap'
}

export function isWeakMapAs<T extends WeakMap<any, any>>(obj: any): obj is T {
  return what(obj) === 'WeakMap'
}

export function isDataView(obj: any): obj is DataView {
  return what(obj) === 'DataView'
}

export function isBuffer(obj: any): obj is Buffer {
  return what(obj) === 'Buffer'
}

export function isArrayBuffer(obj: any): obj is ArrayBuffer {
  return what(obj) === 'ArrayBuffer'
}

export function isSharedArrayBuffer(obj: any): obj is SharedArrayBuffer {
  return what(obj) === 'SharedArrayBuffer'
}

export function isInt8Array(obj: any): obj is Int8Array {
  return what(obj) === 'Int8Array'
}

export function isUint8Array(obj: any): obj is Uint8Array {
  return what(obj) === 'Uint8Array'
}

export function isUint8ClampedArray(obj: any): obj is Uint8ClampedArray {
  return what(obj) === 'Uint8ClampedArray'
}

export function isInt16Array(obj: any): obj is Int16Array {
  return what(obj) === 'Int16Array'
}

export function isUint16Array(obj: any): obj is Uint16Array {
  return what(obj) === 'Uint16Array'
}

export function isInt32Array(obj: any): obj is Int32Array {
  return what(obj) === 'Int32Array'
}

export function isUint32Array(obj: any): obj is Uint32Array {
  return what(obj) === 'Uint32Array'
}

export function isFloat32Array(obj: any): obj is Float32Array {
  return what(obj) === 'Float32Array'
}

export function isFloat64Array(obj: any): obj is Float64Array {
  return what(obj) === 'Float64Array'
}

export function isBigInt64Array(obj: any): obj is BigInt64Array {
  return what(obj) === 'BigInt64Array'
}

export function isBigUint64Array(obj: any): obj is BigUint64Array {
  return what(obj) === 'BigUint64Array'
}

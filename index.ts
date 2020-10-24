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
  'Blob' |
  'File' |
  'Unknown'

export function getReprStr(o: any) {
  return Object.prototype.toString.call(o).slice(8, -1)
}

export function what(o: any): Type {

  var t = getReprStr(o)

  // @ts-ignore
  return t === 'Undefined' ? t :
    t === 'Null' ? t :
    t === 'Number' ? t :
    t === 'Boolean' ? t :
    t === 'String' ? t :
    t === 'Symbol' ? t :
    t === 'BigInt' ? t :
    t === 'Object' ? o.constructor === Object && Object.getPrototypeOf(o) === Object.prototype ? t : 'ObjectLike' :
    t === 'Function' ? t :
    t === 'GeneratorFunction' ? t :
    t === 'Generator' ? t :
    t === 'RegExp' ? t :
    t === 'Date' ? t :
    t === 'Promise' ? t :
    t === 'Error' ? t :
    t === 'TextEncoder' ? t :
    t === 'TextDecoder' ? t :
    t === 'URL' ? t :
    t === 'URLSearchParams' ? t :
    t === 'Array' ? t :
    t === 'Set' ? t :
    t === 'Map' ? t :
    t === 'WeakSet' ? t :
    t === 'WeakMap' ? t :
    t === 'DataView' ? t :
    t === 'ArrayBuffer' ? t :
    t === 'SharedArrayBuffer' ? t :
    t === 'Int8Array' ? t :
    t === 'Uint8Array' ? o.constructor && typeof o.constructor.isBuffer === 'function' && o.constructor.isBuffer(o) ? 'Buffer' : t :
    t === 'Uint8ClampedArray' ? t :
    t === 'Int16Array' ? t :
    t === 'Uint16Array' ? t :
    t === 'Int32Array' ? t :
    t === 'Uint32Array' ? t :
    t === 'Float32Array' ? t :
    t === 'Float64Array' ? t :
    t === 'BigInt64Array' ? t :
    t === 'BigUint64Array' ? t :
    t === 'Blob' ? t :
    t === 'File' ? t :
    'Unknown'

}

export function isUndefined(o: any): o is undefined {
  return what(o) === 'Undefined'
}

export function isNull(o: any): o is null {
  return what(o) === 'Null'
}

export function isNumber(o: any): o is number {
  return what(o) === 'Number'
}

export function isBoolean(o: any): o is boolean {
  return what(o) === 'Boolean'
}

export function isString(o: any): o is string {
  return what(o) === 'String'
}

export function isSymbol(o: any): o is symbol {
  return what(o) === 'Symbol'
}

export function isBigInt(o: any): o is BigInt {
  return what(o) === 'BigInt'
}

export function isObject(o: any): o is Record<string, any> {
  return what(o) === 'Object'
}

export function isObjectAs<T extends Record<string, any>>(o: any): o is T {
  return what(o) === 'Object'
}

export function isObjectLike(o: any): o is Record<string | number | symbol, any> {
  return what(o) === 'ObjectLike'
}

export function isObjectLikeAs<T extends Record<string | number | symbol, any>>(o: any): o is T {
  return what(o) === 'ObjectLike'
}

export function isFunction(o: any): o is Function {
  return what(o) === 'Function'
}

export function isFunctionAs<T extends (...args: any[]) => any>(o: any): o is T {
  return what(o) === 'Function'
}

export function isGeneratorFunction(o: any): o is GeneratorFunction {
  return what(o) === 'GeneratorFunction'
}

export function isGenerator(o: any): o is Generator {
  return what(o) === 'Generator'
}

export function isGeneratorAs<T extends Generator>(o: any): o is T {
  return what(o) === 'Generator'
}

export function isRegExp(o: any): o is RegExp {
  return what(o) === 'RegExp'
}

export function isDate(o: any): o is Date {
  return what(o) === 'Date'
}

export function isPromise(o: any): o is Promise<any> {
  return what(o) === 'Promise'
}

export function isPromiseAs<T extends Promise<any>>(o: any): o is T {
  return what(o) === 'Promise'
}

export function isError(o: any): o is Error {
  return what(o) === 'Error'
}

export function isTextEncoder(o: any): o is TextEncoder {
  return what(o) === 'TextEncoder'
}

export function isTextDecoder(o: any): o is TextDecoder {
  return what(o) === 'TextDecoder'
}

export function isURL(o: any): o is URL {
  return what(o) === 'URL'
}

export function isURLSearchParams(o: any): o is URLSearchParams {
  return what(o) === 'URLSearchParams'
}

export function isArray(o: any): o is Array<any> {
  return what(o) === 'Array'
}

export function isArrayAs<T extends Array<any>>(o: any): o is T {
  return what(o) === 'Array'
}

export function isSet(o: any): o is Set<any> {
  return what(o) === 'Set'
}

export function isSetAs<T extends Set<any>>(o: any): o is T {
  return what(o) === 'Set'
}

export function isMap(o: any): o is Map<any, any> {
  return what(o) === 'Map'
}

export function isMapAs<T extends Map<any, any>>(o: any): o is T {
  return what(o) === 'Map'
}

export function isWeakSet(o: any): o is WeakSet<any> {
  return what(o) === 'WeakSet'
}

export function isWeakSetAs<T extends WeakSet<any>>(o: any): o is T {
  return what(o) === 'WeakSet'
}

export function isWeakMap(o: any): o is WeakMap<any, any> {
  return what(o) === 'WeakMap'
}

export function isWeakMapAs<T extends WeakMap<any, any>>(o: any): o is T {
  return what(o) === 'WeakMap'
}

export function isDataView(o: any): o is DataView {
  return what(o) === 'DataView'
}

export function isBuffer(o: any): o is Buffer {
  return what(o) === 'Buffer'
}

export function isArrayBuffer(o: any): o is ArrayBuffer {
  return what(o) === 'ArrayBuffer'
}

export function isSharedArrayBuffer(o: any): o is SharedArrayBuffer {
  return what(o) === 'SharedArrayBuffer'
}

export function isInt8Array(o: any): o is Int8Array {
  return what(o) === 'Int8Array'
}

export function isUint8Array(o: any): o is Uint8Array {
  return what(o) === 'Uint8Array'
}

export function isUint8ClampedArray(o: any): o is Uint8ClampedArray {
  return what(o) === 'Uint8ClampedArray'
}

export function isInt16Array(o: any): o is Int16Array {
  return what(o) === 'Int16Array'
}

export function isUint16Array(o: any): o is Uint16Array {
  return what(o) === 'Uint16Array'
}

export function isInt32Array(o: any): o is Int32Array {
  return what(o) === 'Int32Array'
}

export function isUint32Array(o: any): o is Uint32Array {
  return what(o) === 'Uint32Array'
}

export function isFloat32Array(o: any): o is Float32Array {
  return what(o) === 'Float32Array'
}

export function isFloat64Array(o: any): o is Float64Array {
  return what(o) === 'Float64Array'
}

export function isBigInt64Array(o: any): o is BigInt64Array {
  return what(o) === 'BigInt64Array'
}

export function isBigUint64Array(o: any): o is BigUint64Array {
  return what(o) === 'BigUint64Array'
}

export function isBlob(o: any): o is Blob {
  return what(o) === 'Blob'
}

export function isFile(o: any): o is File {
  return what(o) === 'File'
}

export function isUnknown(o: any): o is any {
  return what(o) === 'Unknown'
}

export function isUnknownAs<T>(o: any): o is T {
  return what(o) === 'Unknown'
}

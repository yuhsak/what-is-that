# what-is-that [![Build Status](https://travis-ci.org/Yuhsak/what-is-that.svg?branch=main)](https://travis-ci.org/Yuhsak/what-is-that) [![Coverage Status](https://coveralls.io/repos/github/Yuhsak/what-is-that/badge.svg?branch=main)](https://coveralls.io/github/Yuhsak/what-is-that?branch=main)

Minimal, tiny (1.1 kb) object type identifier for both Node.js and browser written in TypeScript.

## Feature

- **Minimal**: simply detect the type for any objects.
- **Fast**: it's basically an if statement.
- **Tiny**: only 1.1kb of gzipped.

compatible to **ES3+**

## Install

```sh
npm install what-is-that
```

## Usage

```ts
import {what, isObject, isObjectLike} from 'what-is-that'

// 'Boolean'
what(true)

// 'String'
what('that')

/** Detect whether it's a Plain object or any other (ex. custom class instance) */

// 'Object'
what({is: 'that'})

class MyObj {}

const obj = new MyObj()

// 'ObjectLike'
what(obj)

// false
isObject(obj)

// true
isObjectLike(obj)
```

## API

### `what(o: any): Type`

Returns a `string representation of the type of argument` or `"Unknown"` if it can't be identified.

The return value will be one of the list below.

- `"Undefined"`
- `"Null"`
- `"Number"`
- `"Boolean"`
- `"String"`
- `"Symbol"`
- `"BigInt"`
- `"Object"`
- `"ObjectLike"`
- `"Function"`
- `"GeneratorFunction"`
- `"Generator"`
- `"RegExp"`
- `"Date"`
- `"Promise"`
- `"Error"`
- `"TextEncoder"`
- `"TextDecoder"`
- `"URL"`
- `"URLSearchParams"`
- `"Array"`
- `"Set"`
- `"Map"`
- `"WeakSet"`
- `"WeakMap"`
- `"DataView"`
- `"Buffer"`
- `"ArrayBuffer"`
- `"SharedArrayBuffer"`
- `"Int8Array"`
- `"Uint8Array"`
- `"Uint8ClampedArray"`
- `"Int16Array"`
- `"Uint16Array"`
- `"Int32Array"`
- `"Uint32Array"`
- `"Float32Array"`
- `"Float64Array"`
- `"BigInt64Array"`
- `"BigUint64Array"`
- `"Blob"`
- `"File"`
- `"Unknown"`

### Detection

Functions which return `true` if the argument is a value or instance of the corresponding object type, `false` if not.

- **`isUndefined`**`(o: any): o is undefined`
- **`isNull`**`(o: any): o is null`
- **`isNumber`**`(o: any): o is number`
- **`isBoolean`**`(o: any): o is boolean`
- **`isString`**`(o: any): o is string`
- **`isSymbol`**`(o: any): o is Symbol`
- **`isBigInt`**`(o: any): o is BigInt
- **`isObject`**`(o: any): o is Record<string, any>`
- **`isObjectLike`**`(o: any): o is Record<string | number | symbol, any>`
- **`isFunction`**`(o: any): o is Function`
- **`isGeneratorFunction`**`(o: any): o is GeneratorFunction`
- **`isGenerator`**`(o: any): o is Generator`
- **`isRegExp`**`(o: any): o is RegExp`
- **`isDate`**`(o: any): o is Date`
- **`isPromise`**`(o: any): o is Promise<any>`
- **`isError`**`(o: any): o is Error`
- **`isTextEncoder`**`(o: any): o is TextEncoder`
- **`isTextDecoder`**`(o: any): o is TextDecoder`
- **`isURL`**`(o: any): o is URL`
- **`isURLSearchParams`**`(o: any): o is URLSearchParams`
- **`isArray`**`(o: any): o is Array<any>`
- **`isSet`**`(o: any): o is Set<any>`
- **`isMap`**`(o: any): o is Map<any, any>`
- **`isWeakSet`**`(o: any): o is WeakSet<any>`
- **`isWeakMap`**`(o: any): o is WeakMap<any, any>`
- **`isDataView`**`(o: any): o is DataView`
- **`isBuffer`**`(o: any): o is Buffer`
- **`isArrayBuffer`**`(o: any): o is ArrayBuffer`
- **`isSharedArrayBuffer`**`(o: any): o is SharedArrayBuffer`
- **`isInt8Array`**`(o: any): o is Int8Array`
- **`isUint8Array`**`(o: any): o is Uint8Array`
- **`isUint8ClampedArray`**`(o: any): o is Uint8ClampedArray`
- **`isInt16Array`**`(o: any): o is Int16Array`
- **`isUint16Array`**`(o: any): o is Uint16Array`
- **`isInt32Array`**`(o: any): o is Int32Array`
- **`isUint32Array`**`(o: any): o is Uint32Array`
- **`isFloat32Array`**`(o: any): o is Float32Array`
- **`isFloat64Array`**`(o: any): o is Float64Array`
- **`isBigInt64Array`**`(o: any): o is BigInt64Array`
- **`isBigUint64Array`**`(o: any): o is BigUint64Array`
- **`isBlob`**`(o: any): o is Blob`
- **`isFile`**`(o: any): o is File`
- **`isUnknown`**`(o: any): o is unknown`

### For TypeScript

There are some additional functions for generic object types which would be useful to ensure that the object is explicitly typed.

- **`isObjectAs`**`<T extends Record<string, any>>(o: any): o is T`
- **`isObjectLikeAs`**`<T extends Record<string | number | symbol, any>>(o: any): o is T`
- **`isFunctionAs`**`<T extends (...args: any[]) => any>(o: any): o is T`
- **`isGeneratorAs`**`<T extends Generator>(o: any): o is T`
- **`isPromiseAs`**`<T extends Promise<any>>(o: any): o is T`
- **`isArrayAs`**`<T extends Array<any>>(o: any): o is T`
- **`isSetAs`**`<T extends Set<any>>(o: any): o is T`
- **`isMapAs`**`<T extends Map<any, any>>(o: any): o is T`
- **`isWeakSetAs`**`<T extends WeakSet<any>>(o: any): o is T`
- **`isWeakMapAs`**`<T extends WeakMap<any, any>>(o: any): o is T`
- **`isUnknownAs`**`<T>(o: any): o is T`

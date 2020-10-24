# what-is-that

Identify type of Object (or Primitive) for both Node.js and browser written in TypeScript

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

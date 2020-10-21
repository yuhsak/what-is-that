# what-is-that

## Install

```sh
npm install what-is-that
```

## Usage

```ts
import {what, is} from 'what-is-that'

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
is.Object(obj)

// true
is.ObjectLike(obj)
```

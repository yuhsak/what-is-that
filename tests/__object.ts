export class ObjectLike {}
export const object = {}
export const objectLike = new ObjectLike()

export function* generatorFunction() {}
export const generator = generatorFunction()

export async function* asyncGeneratorFunction() {}
export const asyncGenerator = asyncGeneratorFunction()

export const url = new URL('http://a')
export const urlSearchParams = url.searchParams

export const file = new File([], 'a')

export class UnknownObject {
  get [Symbol.toStringTag]() {
    return 'UnknownObject'
  }
}
export const unknown = new UnknownObject()

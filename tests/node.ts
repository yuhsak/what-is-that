/**
 * @jest-environment node
 */

import {what, isTextEncoder, isTextDecoder} from '../index'

const textEncoder = new TextEncoder()
const textDecoder = new TextDecoder()

describe('what:node', () => {

  test('TextEncoder', () => {
    expect(what(textEncoder)).toBe('TextEncoder')
  })

  test('TextDecoder', () => {
    expect(what(textDecoder)).toBe('TextDecoder')
  })

})

describe('is:node', () => {

  test('TextEncoder', () => {
    expect(isTextEncoder(textEncoder)).toBe(true)
  })

  test('TextDecoder', () => {
    expect(isTextDecoder(textDecoder)).toBe(true)
  })

})

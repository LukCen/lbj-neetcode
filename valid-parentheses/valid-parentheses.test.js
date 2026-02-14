import { expect, test } from 'vitest'
import { isValid } from './script'

test('input is valid - matched bracket pairs correctly', () => {
  const string_1 = "([{}])"
  const string_2 = "({})"
  const string_3 = "()"
  const string_4 = "[]"
  const string_5 = "{()}"
  expect(isValid(string_1)).toBe(true)
  expect(isValid(string_2)).toBe(true)
  expect(isValid(string_3)).toBe(true)
  expect(isValid(string_4)).toBe(true)
  expect(isValid(string_5)).toBe(true)
})

test('input is invalid - missing closing brackets', () => {
  const string_1 = '([]'
  const string_2 = "([{"
  const string_3 = "((("
  const string_4 = "[{"
  expect(isValid(string_1)).toBe(false)
  expect(isValid(string_2)).toBe(false)
  expect(isValid(string_3)).toBe(false)
  expect(isValid(string_4)).toBe(false)
})

test('input is invalid - missing opening  brackets', () => {
  const string_1 = ")]}"
  const string_2 = "}]"
  const string_3 = "}"
  expect(isValid(string_1)).toBe(false)
  expect(isValid(string_2)).toBe(false)
  expect(isValid(string_3)).toBe(false)
})

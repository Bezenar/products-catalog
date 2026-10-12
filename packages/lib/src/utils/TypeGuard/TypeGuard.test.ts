import { describe, expect, it } from 'vitest';
import TypeGuard from './index';

describe('lib/utils/TypeGuard', () => {
  it.each([
    { label: 'a string', value: 'router', expected: true },
    { label: 'a number', value: 42, expected: false },
    { label: 'null', value: null, expected: false },
  ])('isString recognizes $label', ({ value, expected }) => {
    expect(TypeGuard.isString(value)).toBe(expected);
  });

  it.each([
    { label: 'true', value: true, expected: true },
    { label: 'false', value: false, expected: true },
    { label: 'zero', value: 0, expected: false },
    { label: 'the string true', value: 'true', expected: false },
    { label: 'null', value: null, expected: false },
  ])('isBoolean recognizes $label', ({ value, expected }) => {
    expect(TypeGuard.isBoolean(value)).toBe(expected);
  });

  it.each([
    { label: 'an empty array', value: [], expected: true },
    { label: 'a populated array', value: ['router'], expected: true },
    { label: 'an array-like object', value: { length: 1 }, expected: false },
    { label: 'null', value: null, expected: false },
  ])('isArray recognizes $label', ({ value, expected }) => {
    expect(TypeGuard.isArray(value)).toBe(expected);
  });

  it.each([
    { label: 'an object literal', value: { id: 1 }, expected: true },
    { label: 'a Date instance', value: new Date(0), expected: true },
    { label: 'an array', value: [], expected: false },
    { label: 'null', value: null, expected: false },
    { label: 'a string', value: 'router', expected: false },
    { label: 'a function', value: () => undefined, expected: false },
  ])('isObject recognizes $label', ({ value, expected }) => {
    expect(TypeGuard.isObject(value)).toBe(expected);
  });
});

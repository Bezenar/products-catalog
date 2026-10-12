export default class TypeGuard {
  static isString(val: unknown): val is string {
    return typeof val === 'string';
  }

  static isArray(val: unknown): val is Array<unknown> {
    return Array.isArray(val);
  }

  static isObject(val: unknown): val is object {
    return typeof val === 'object' && !Array.isArray(val) && val !== null;
  }

  static isBoolean(val: unknown): val is boolean {
    return typeof val === 'boolean';
  }
}

import TypeGuard from '../TypeGuard';

export default function cn(...args: Array<unknown>) {
  return args
    .reduce<string>((acc, arg) => {
      if (TypeGuard.isString(arg)) {
        acc += ` ${arg}`;
      } else if (TypeGuard.isObject(arg)) {
        Object.entries(arg).forEach(([key, value]) => {
          if (TypeGuard.isBoolean(value) && value) {
            acc += ` ${key}`;
          }
        });
      }

      return acc;
    }, '')
    .trim();
}

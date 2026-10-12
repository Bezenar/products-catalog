import { describe, expect, it } from 'vitest';
import cn from './index';

describe('cn', () => {
  it.each([
    { label: 'no classes', args: [], expected: '' },
    { label: 'one class string', args: ['button'], expected: 'button' },
    { label: 'multiple class strings', args: ['button', 'primary'], expected: 'button primary' },
  ])('joins $label', ({ args, expected }) => {
    expect(cn(...args)).toBe(expected);
  });

  it('includes object keys whose values are true', () => {
    expect(cn({ active: true, disabled: false, large: 'true', count: 1 })).toBe('active');
  });

  it('combines strings and conditional object keys in argument order', () => {
    expect(cn('button', { active: true }, 'primary')).toBe('button active primary');
  });

  it('ignores unsupported argument values', () => {
    expect(cn(42, false, null, undefined, ['button'], { active: 'yes' })).toBe('');
  });

  it('preserves duplicate class names', () => {
    expect(cn('button', 'button', { button: true })).toBe('button button button');
  });
});

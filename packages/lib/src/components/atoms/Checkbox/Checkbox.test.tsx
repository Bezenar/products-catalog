import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Checkbox from './index';

describe('lib/components/atoms/Checkbox', () => {
  it.each([{ isChecked: false }, { isChecked: true }])(
    'renders the controlled checked state as $isChecked',
    ({ isChecked }) => {
      render(<Checkbox label="Receive updates" isChecked={isChecked} onChange={() => {}} />);

      expect(screen.getByLabelText<HTMLInputElement>('Receive updates').checked).toBe(isChecked);
    },
  );

  it.each([
    { isChecked: false, nextValue: true },
    { isChecked: true, nextValue: false },
  ])('reports $nextValue when toggled from $isChecked', ({ isChecked, nextValue }) => {
    const onChange = vi.fn();
    render(<Checkbox label="Receive updates" isChecked={isChecked} onChange={onChange} />);

    fireEvent.click(screen.getByLabelText('Receive updates'));

    expect(onChange).toHaveBeenCalledWith(nextValue);
  });
});

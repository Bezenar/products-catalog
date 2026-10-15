import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import IconButton from './index';

describe('lib/components/atoms/IconButton', () => {
  it('renders its accessible label and children', () => {
    render(
      <IconButton ariaLabel="Grid view" onClick={() => {}}>
        Grid
      </IconButton>,
    );

    expect(screen.getByRole('button', { name: 'Grid view' }).textContent).toBe('Grid');
  });

  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    render(
      <IconButton ariaLabel="Grid view" onClick={onClick}>
        Grid
      </IconButton>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Grid view' }));

    expect(onClick).toHaveBeenCalledOnce();
  });

  it('applies activeClass when isActive is true', () => {
    render(
      <IconButton ariaLabel="Grid view" activeClass="is-active" isActive onClick={() => {}}>
        Grid
      </IconButton>,
    );

    expect(screen.getByRole('button', { name: 'Grid view' }).classList.contains('is-active')).toBe(
      true,
    );
  });

  it('does not apply activeClass when isActive is false', () => {
    render(
      <IconButton ariaLabel="Grid view" activeClass="is-active" isActive={false} onClick={() => {}}>
        Grid
      </IconButton>,
    );

    expect(screen.getByRole('button', { name: 'Grid view' }).classList.contains('is-active')).toBe(
      false,
    );
  });
});

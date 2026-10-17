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

  it('renders disabled when disabled is true', () => {
    render(
      <IconButton ariaLabel="Grid view" onClick={() => {}} disabled>
        Grid
      </IconButton>,
    );

    expect(screen.getByRole('button', { name: 'Grid view' })).toBeDisabled();
  });

  it('does not call onClick when disabled', () => {
    const onClick = vi.fn();
    render(
      <IconButton ariaLabel="Grid view" onClick={onClick} disabled>
        Grid
      </IconButton>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Grid view' }));

    expect(onClick).not.toHaveBeenCalled();
  });

  it('applies a custom className', () => {
    render(
      <IconButton ariaLabel="Grid view" className="custom-button" onClick={() => {}}>
        Grid
      </IconButton>,
    );

    expect(screen.getByRole('button', { name: 'Grid view' })).toHaveClass('custom-button');
  });
});

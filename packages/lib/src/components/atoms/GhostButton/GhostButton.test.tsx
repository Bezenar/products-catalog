import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import GhostButton from './index';

describe('GhostButton', () => {
  it('renders a button with the provided label', () => {
    render(<GhostButton label="Cancel" onClick={() => {}} />);

    expect(screen.getByRole('button', { name: 'Cancel' })).toBeTruthy();
  });

  it('applies the provided className', () => {
    render(<GhostButton label="Cancel" className="custom-class" onClick={() => {}} />);

    expect(screen.getByRole('button', { name: 'Cancel' })).toHaveClass('custom-class');
  });

  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    render(<GhostButton label="Cancel" onClick={onClick} />);

    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(onClick).toHaveBeenCalledOnce();
  });
});

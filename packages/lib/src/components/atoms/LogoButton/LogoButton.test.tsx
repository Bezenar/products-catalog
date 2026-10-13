import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import LogoButton from './index';

describe('lib/components/LogoButton', () => {
  const mockOnClick = vi.fn();

  it('renders a button with the provided accessible label', () => {
    render(<LogoButton ariaLabel="Go to homepage" onClick={mockOnClick} />);

    expect(screen.getByRole('button', { name: 'Go to homepage' })).toBeTruthy();
  });

  it('calls onClick when the button is clicked', () => {
    render(<LogoButton ariaLabel="Go to homepage" onClick={mockOnClick} />);

    fireEvent.click(screen.getByRole('button', { name: 'Go to homepage' }));

    expect(mockOnClick).toHaveBeenCalledOnce();
  });
});

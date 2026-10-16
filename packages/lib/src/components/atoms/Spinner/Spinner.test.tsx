import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Spinner from './index';

describe('Spinner', () => {
  it('renders as a status with a default accessible name', () => {
    render(<Spinner label="Loading" />);

    expect(screen.getByRole('status', { name: 'Loading' })).toBeInTheDocument();
  });

  it('displays the optional label after the indicator', () => {
    render(<Spinner label="Loading products" />);
    const status = screen.getByRole('status');

    expect(status.lastElementChild).toHaveTextContent('Loading products');
  });

  it('uses the provided label as the status accessible name', () => {
    render(<Spinner label="Loading products" />);

    expect(screen.getByRole('status', { name: 'Loading products' })).toBeInTheDocument();
  });

  it('hides the decorative indicator from assistive technology', () => {
    render(<Spinner />);

    expect(screen.getByRole('status').firstElementChild).toHaveAttribute('aria-hidden', 'true');
  });

  it('uses the md size by default', () => {
    render(<Spinner />);

    expect(screen.getByRole('status')).toHaveClass('md');
  });

  it.each([
    { size: 'xl', className: 'xl' },
    { size: 'md', className: 'md' },
    { size: 'sm', className: 'sm' },
  ] as const)('applies the $size size to indicator element', ({ size, className }) => {
    render(<Spinner size={size} />);

    expect(screen.getByRole('status')).toHaveClass(className);
  });

  it.each([
    { size: 'xl', className: 'xl' },
    { size: 'md', className: 'md' },
    { size: 'sm', className: 'sm' },
  ] as const)('applies the $size size to label element', ({ size, className }) => {
    render(<Spinner size={size} label="Loading" />);

    expect(screen.getByText('Loading')).toHaveClass(className);
  });

  it.each([
    { size: 'xl', className: 'xl' },
    { size: 'md', className: 'md' },
    { size: 'sm', className: 'sm' },
  ] as const)('applies the $size size to container element', ({ size, className }) => {
    render(<Spinner size={size} label="Loading" />);

    expect(screen.getByRole('status')).toHaveClass(className);
  });
});

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Badge from './index';

describe('ProductCard.Badge', () => {
  it('renders its value', () => {
    render(<Badge value="New" />);

    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('renders ReactNode content', () => {
    render(<Badge value={<strong>Popular</strong>} />);

    expect(screen.getByText('Popular').tagName).toBe('STRONG');
  });
});

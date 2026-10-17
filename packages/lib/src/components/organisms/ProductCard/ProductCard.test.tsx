import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ProductCard from './index';

describe('ProductCard', () => {
  it('renders a non-interactive card as a div by default', () => {
    render(<ProductCard>Card content</ProductCard>);

    expect(screen.getByText('Card content').parentElement?.tagName).toBe('DIV');
  });

  it('renders a button when onClick is provided', () => {
    render(<ProductCard onClick={() => {}}>Card content</ProductCard>);

    expect(screen.getByRole('button', { name: 'Card content' })).toBeInTheDocument();
  });

  it('calls onClick when the button card is activated', () => {
    const onClick = vi.fn();
    render(<ProductCard onClick={onClick}>Card content</ProductCard>);

    fireEvent.click(screen.getByRole('button', { name: 'Card content' }));

    expect(onClick).toHaveBeenCalledOnce();
  });

  it('renders compound content inside the card', () => {
    render(
      <ProductCard>
        <ProductCard.Heading>Dream Router</ProductCard.Heading>
        <ProductCard.SecondaryText>UDR</ProductCard.SecondaryText>
      </ProductCard>,
    );

    expect(screen.getByRole('heading', { level: 4, name: 'Dream Router' })).toBeInTheDocument();
  });
});

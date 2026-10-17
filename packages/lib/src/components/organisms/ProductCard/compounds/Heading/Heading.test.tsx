import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Heading from './index';

describe('ProductCard.Heading', () => {
  it('renders product text as a level-four heading', () => {
    render(<Heading>Dream Router</Heading>);

    expect(screen.getByRole('heading', { level: 4, name: 'Dream Router' })).toBeInTheDocument();
  });
});

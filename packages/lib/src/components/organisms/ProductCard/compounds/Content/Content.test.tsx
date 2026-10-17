import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Content from './index';

describe('ProductCard.Content', () => {
  it('renders a content container', () => {
    render(<Content>Device details</Content>);

    expect(screen.getByText('Device details').parentElement?.tagName).toBe('DIV');
  });
});

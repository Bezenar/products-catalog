import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SecondaryText from './index';

describe('ProductCard.SecondaryText', () => {
  it('renders supporting content as a paragraph', () => {
    render(<SecondaryText>UDR</SecondaryText>);

    expect(screen.getByText('UDR').tagName).toBe('P');
  });

  it('renders nested children', () => {
    render(
      <SecondaryText>
        <span>UDR</span>
      </SecondaryText>,
    );

    expect(screen.getByText('UDR')).toBeInTheDocument();
  });
});

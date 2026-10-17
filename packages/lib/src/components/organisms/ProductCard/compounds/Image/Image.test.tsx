import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Image from './index';

describe('ProductCard.Image', () => {
  it('renders an image with its source and alt text', () => {
    render(<Image src="/device.png" alt="Device image" />);

    expect(screen.getByRole('img', { name: 'Device image' })).toHaveAttribute('src', '/device.png');
  });

  it('supports an empty alt attribute for decorative images', () => {
    render(<Image src="/device.png" alt="" />);

    expect(screen.getByRole('presentation')).toHaveAttribute('alt', '');
  });
});

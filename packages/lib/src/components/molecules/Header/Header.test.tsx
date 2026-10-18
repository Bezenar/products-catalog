import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Header from './index';

describe('Header', () => {
  it('renders the page title', () => {
    render(
      <Header
        title="Product catalog"
        author="Ubiquiti"
        logoAriaLabel="Go to home"
        onLogoClick={() => {}}
      />,
    );

    expect(screen.getByRole('heading', { level: 1, name: 'Product catalog' })).toBeTruthy();
  });

  it('renders the author content', () => {
    render(
      <Header
        title="Product catalog"
        author={<span>Ubiquiti team</span>}
        logoAriaLabel="Go to home"
        onLogoClick={() => {}}
      />,
    );

    expect(screen.getByRole('heading', { level: 2, name: 'Ubiquiti team' })).toBeTruthy();
  });

  it('renders the logo button with its accessible label', () => {
    render(
      <Header
        title="Product catalog"
        author="Ubiquiti"
        logoAriaLabel="Go to home"
        onLogoClick={() => {}}
      />,
    );

    expect(screen.getByRole('button', { name: 'Go to home' })).toBeTruthy();
  });

  it('calls onLogoClick when the logo button is clicked', () => {
    const onLogoClick = vi.fn();
    render(
      <Header
        title="Product catalog"
        author="Ubiquiti"
        logoAriaLabel="Go to home"
        onLogoClick={onLogoClick}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Go to home' }));

    expect(onLogoClick).toHaveBeenCalledOnce();
  });

  it.each([
    ['development', '/storybook/index.html'],
    ['production', '/products-catalog/storybook/index.html'],
  ])('opens the %s Storybook URL', (mode, expectedUrl) => {
    vi.stubEnv('MODE', mode);
    const openWindow = vi.spyOn(window, 'open').mockImplementation(() => null);

    render(
      <Header
        title="Product catalog"
        author="Ubiquiti"
        logoAriaLabel="Go to home"
        onLogoClick={() => {}}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Visit storybook' }));

    expect(openWindow).toHaveBeenCalledWith(expectedUrl, '_blank');

    vi.restoreAllMocks();
    vi.unstubAllEnvs();
  });
});

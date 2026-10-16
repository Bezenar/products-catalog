import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { describe, expect, it } from 'vitest';
import PageTemplate from './index';

describe('PageTemplate', () => {
  it('renders the page title', () => {
    render(
      <MemoryRouter>
        <PageTemplate title="Products" author="Ubiquiti">
          <p>Product content</p>
        </PageTemplate>
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { level: 1, name: 'Products' })).toBeInTheDocument();
  });

  it('renders the author', () => {
    render(
      <MemoryRouter>
        <PageTemplate title="Products" author="Ubiquiti team">
          <p>Product content</p>
        </PageTemplate>
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { level: 2, name: 'Ubiquiti team' })).toBeInTheDocument();
  });

  it('renders its children in the main content area', () => {
    render(
      <MemoryRouter>
        <PageTemplate title="Products" author="Ubiquiti">
          <p>Product content</p>
        </PageTemplate>
      </MemoryRouter>,
    );

    expect(screen.getByRole('main').textContent).toBe('Product content');
  });

  it('navigates to the main page when the logo is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/products']}>
        <Routes>
          <Route
            path="/products"
            element={
              <PageTemplate title="Products" author="Ubiquiti">
                <p>Product content</p>
              </PageTemplate>
            }
          />
          <Route path="/" element={<h1>Main page</h1>} />
        </Routes>
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Go to main page' }));

    expect(screen.getByRole('heading', { name: 'Main page' })).toBeInTheDocument();
  });
});

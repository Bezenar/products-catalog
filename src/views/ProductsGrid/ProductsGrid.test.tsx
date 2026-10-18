import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router';
import { describe, expect, it } from 'vitest';
import filtersSlice from '../../store/filtersSlice';
import productsSlice from '../../store/productsSlice';
import type { T_AdaptedDeviceItem } from '../../types';
import ProductsGrid from './index';

const devices: T_AdaptedDeviceItem[] = [
  {
    id: 'router-1',
    product: { name: 'Dream Router' },
    images: { default: 'dream-router-image' },
    line: { id: 'network', name: 'Network' },
    shortnames: ['UDR', 'Router'],
  },
  {
    id: 'switch-1',
    product: { name: 'Switch 8' },
    images: { default: 'switch-image' },
  },
];

function LocationProbe() {
  const location = useLocation();

  return (
    <>
      <output data-testid="pathname">{location.pathname}</output>
      <output data-testid="navigation-source">{location.state?.from}</output>
    </>
  );
}

function renderProductsGrid(products: T_AdaptedDeviceItem[] = devices) {
  const store = configureStore({
    reducer: {
      products: productsSlice.reducer,
      filters: filtersSlice.reducer,
    },
    preloadedState: {
      products: {
        isLoading: false,
        hasError: false,
        devices: products,
        version: '1',
      },
      filters: {
        searchValue: '',
        selectedCategories: [],
      },
    },
  });

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/grid-view']}>
        <Routes>
          <Route path="/grid-view" element={<ProductsGrid />} />
          <Route path="/products/:id" element={<LocationProbe />} />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );

  return store;
}

describe('ProductsGrid', () => {
  it('renders a card for each filtered device', () => {
    renderProductsGrid();

    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('renders the product heading and shortnames', () => {
    renderProductsGrid();

    expect(screen.getByRole('heading', { level: 4, name: 'Dream Router' })).toBeInTheDocument();
  });

  it('generates the image URL using the device ID and image key', () => {
    renderProductsGrid();

    expect(screen.getByRole('img', { name: 'Dream Router image' })).toHaveAttribute(
      'src',
      'https://images.svc.ui.com/?u=https%3A%2F%2Fstatic.ui.com%2Ffingerprint%2Fui%2Fimages%2Frouter-1%2Fdefault%2Fdream-router-image.png&w=84&q=75',
    );
  });

  it('shows a product-line badge when the device has a line name', () => {
    renderProductsGrid();

    expect(screen.getByText('Network')).toBeInTheDocument();
  });

  it('does not render a badge when the device has no line name', () => {
    renderProductsGrid();

    expect(screen.queryByText('Switch')).not.toBeInTheDocument();
  });

  it('uses the fallback shortname text when the device has no shortnames', () => {
    renderProductsGrid();

    expect(screen.getByText('---')).toBeInTheDocument();
  });

  it('navigates to the selected product and records the grid as the source', () => {
    renderProductsGrid();

    fireEvent.click(screen.getByRole('button', { name: /Dream Router/ }));

    expect({
      pathname: screen.getByTestId('pathname').textContent,
      source: screen.getByTestId('navigation-source').textContent,
    }).toEqual({ pathname: '/products/router-1', source: 'grid' });
  });

  it('renders no product cards when there are no filtered devices', () => {
    renderProductsGrid([]);

    expect(screen.queryAllByRole('button')).toHaveLength(0);
  });
});

import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router';
import { describe, expect, it } from 'vitest';
import filtersSlice from '../../store/filtersSlice';
import productsSlice from '../../store/productsSlice';
import type { T_AdaptedDeviceItem } from '../../types';
import ProductsList from './index';

const devices: T_AdaptedDeviceItem[] = [
  {
    id: 'router-1',
    product: { name: 'Dream Router' },
    images: { default: 'dream-router-image' },
    line: { id: 'network', name: 'Network' },
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

function renderProductsList(
  searchValue = '',
  selectedCategories: string[] = [],
  products: T_AdaptedDeviceItem[] = devices,
) {
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
        searchValue,
        selectedCategories,
      },
    },
  });

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/products/:id" element={<LocationProbe />} />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );

  return store;
}

describe('ProductsList', () => {
  it('renders the configured table headers', () => {
    renderProductsList();

    expect(screen.getAllByRole('columnheader').map((header) => header.textContent)).toEqual([
      '',
      'Product Line',
      'Name',
    ]);
  });

  it('renders one row per device with its product line and name', () => {
    renderProductsList();

    expect(screen.getAllByRole('row')).toHaveLength(3);
  });

  it('renders the generated device image URL with lazy loading', () => {
    renderProductsList();

    const image = screen.getByRole('img', { name: 'Dream Router image' });
    expect(image).toHaveAttribute(
      'src',
      'https://images.svc.ui.com/?u=https%3A%2F%2Fstatic.ui.com%2Ffingerprint%2Fui%2Fimages%2Frouter-1%2Fdefault%2Fdream-router-image.png&w=20&q=75',
    );
  });

  it('marks product images as lazy-loaded', () => {
    renderProductsList();

    expect(screen.getByRole('img', { name: 'Dream Router image' })).toHaveAttribute(
      'loading',
      'lazy',
    );
  });

  it('uses a fallback label when a device has no product line', () => {
    renderProductsList();
    const row = screen.getByRole('row', { name: /Switch 8/ });

    expect(within(row).getAllByRole('cell')[1]).toHaveTextContent('---');
  });

  it('renders only devices matching the Redux filters', () => {
    renderProductsList('Switch');

    expect(screen.getAllByRole('row')).toHaveLength(2);
  });

  it('renders the empty state when no devices match', () => {
    renderProductsList('No such product');

    expect(screen.getByRole('cell', { name: 'No data available' })).toBeInTheDocument();
  });

  it('navigates to the selected product with list as the navigation source', () => {
    renderProductsList();
    fireEvent.click(screen.getByRole('row', { name: /Dream Router/ }));

    expect({
      pathname: screen.getByTestId('pathname').textContent,
      source: screen.getByTestId('navigation-source').textContent,
    }).toEqual({ pathname: '/products/router-1', source: 'list' });
  });
});

import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router';
import { describe, expect, it } from 'vitest';
import filtersSlice from '../../store/filtersSlice';
import productsSlice from '../../store/productsSlice';
import type { T_AdaptedDeviceItem } from '../../types';
import ProductDetails from './index';

const device: T_AdaptedDeviceItem = {
  id: 'router-1',
  product: { name: 'Dream Router' },
  images: { default: 'dream-router-image' },
  line: { id: 'network', name: 'Network' },
  shortnames: ['UDR', 'Router'],
  unifi: {
    network: {
      numberOfPorts: 4,
      radios: {
        na: { maxPower: 20, maxSpeedMegabitsPerSecond: 1200 },
      },
    },
  },
};

function renderProductDetails(id: string, devices: T_AdaptedDeviceItem[] = [device]) {
  const store = configureStore({
    reducer: {
      products: productsSlice.reducer,
      filters: filtersSlice.reducer,
    },
    preloadedState: {
      products: {
        isLoading: false,
        hasError: false,
        devices,
        version: '1',
      },
      filters: {
        searchValue: '',
        selectedCategories: [],
      },
    },
  });

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[`/product/${id}`]}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );
}

describe('ProductDetails', () => {
  it('shows a not-found message when the route ID is not in the store', () => {
    renderProductDetails('missing');

    expect(screen.getByText('Device not found')).toBeInTheDocument();
  });

  it('renders the active product name and shortnames', () => {
    renderProductDetails('router-1');

    expect(screen.getByRole('heading', { level: 1, name: 'Dream Router' })).toBeInTheDocument();
  });

  it('renders the image URL using the detail image size', () => {
    renderProductDetails('router-1');

    expect(screen.getByRole('img', { name: 'Product' })).toHaveAttribute(
      'src',
      'https://images.svc.ui.com/?u=https%3A%2F%2Fstatic.ui.com%2Ffingerprint%2Fui%2Fimages%2Frouter-1%2Fdefault%2Fdream-router-image.png&w=292&q=75',
    );
  });

  it('renders the product shortnames', () => {
    renderProductDetails('router-1');

    expect(screen.getByText('UDR Router', { selector: 'p' })).toBeInTheDocument();
  });

  it('renders the collected product detail values', () => {
    renderProductDetails('router-1');

    expect([
      screen.getByText('Product Line').nextElementSibling?.textContent,
      screen.getByText('ID').nextElementSibling?.textContent,
      screen.getByText('Max. Power').nextElementSibling?.textContent,
      screen.getByText('Speed').nextElementSibling?.textContent,
      screen.getByText('Number of ports').nextElementSibling?.textContent,
    ]).toEqual(['Network', 'router-1', '20 W', '1200 Mbps', '4']);
  });

  it('renders fallback shortname text when the active product has no shortnames', () => {
    renderProductDetails('switch-1', [{ ...device, id: 'switch-1', shortnames: undefined }]);

    expect(screen.getByText('---', { selector: 'p' })).toBeInTheDocument();
  });
});

import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router';
import { afterEach, describe, expect, it, vi } from 'vitest';
import filtersSlice from '../../store/filtersSlice';
import productsSlice from '../../store/productsSlice';
import type { T_AdaptedDeviceItem } from '../../types';
import NavigationBar from './index';

const devices: T_AdaptedDeviceItem[] = [
  { id: 'router-1', product: { name: 'Dream Router' } },
  { id: 'switch-1', product: { name: 'Switch 8' } },
  { id: 'camera-1', product: { name: 'Camera' } },
];

function LocationProbe() {
  const { pathname } = useLocation();

  return <output data-testid="current-path">{pathname}</output>;
}

function renderNavigationBar(
  initialEntries: Array<string | { pathname: string; state?: unknown }> = ['/products/switch-1'],
  initialIndex = initialEntries.length - 1,
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
        devices,
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
      <MemoryRouter initialEntries={initialEntries} initialIndex={initialIndex}>
        <Routes>
          <Route
            path="/products/:id"
            element={
              <>
                <NavigationBar />
                <LocationProbe />
              </>
            }
          />
          <Route path="*" element={<LocationProbe />} />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe('NavigationBar', () => {
  it('disables previous navigation for the first device', () => {
    renderNavigationBar(['/products/router-1']);
    const buttons = screen.getAllByRole('button');

    expect(buttons.map((button) => (button as HTMLButtonElement).disabled)).toEqual([
      false,
      true,
      false,
    ]);
  });

  it('disables next navigation for the last device', () => {
    renderNavigationBar(['/products/camera-1']);
    const buttons = screen.getAllByRole('button');

    expect(buttons.map((button) => (button as HTMLButtonElement).disabled)).toEqual([
      false,
      false,
      true,
    ]);
  });

  it('navigates to the previous device', () => {
    renderNavigationBar();

    fireEvent.click(screen.getAllByRole('button', { name: 'Go to previous product' })[1]);

    expect(screen.getByTestId('current-path')).toHaveTextContent('/products/router-1');
  });

  it('navigates to the next device', () => {
    renderNavigationBar();

    fireEvent.click(screen.getByRole('button', { name: 'Go to next product' }));

    expect(screen.getByTestId('current-path')).toHaveTextContent('/products/camera-1');
  });

  it('returns to the previous history entry when navigation state is present', () => {
    renderNavigationBar([
      '/grid-view',
      { pathname: '/products/switch-1', state: { from: 'grid' } },
    ]);

    fireEvent.click(screen.getAllByRole('button', { name: 'Go to previous product' })[0]);

    expect(screen.getByTestId('current-path')).toHaveTextContent('/grid-view');
  });

  it('falls back to the root route when there is no navigation state', () => {
    renderNavigationBar(['/products/switch-1']);

    fireEvent.click(screen.getAllByRole('button', { name: 'Go to previous product' })[0]);

    expect(screen.getByTestId('current-path')).toHaveTextContent('/');
  });
});

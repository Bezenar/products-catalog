import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router';
import { afterEach, describe, expect, it, vi } from 'vitest';
import filtersSlice from '../../store/filtersSlice';
import productsSlice from '../../store/productsSlice';
import type { T_AdaptedDeviceItem } from '../../types';
import s from './Filters.module.scss';
import Filters from './index';

function CurrentPath() {
  const { pathname } = useLocation();

  return <output data-testid="current-path">{pathname}</output>;
}

const devices: T_AdaptedDeviceItem[] = [
  {
    id: 'router-1',
    product: { name: 'Dream Router' },
    line: { id: 'network', name: 'Network' },
    shortnames: ['UDR'],
  },
  {
    id: 'switch-1',
    product: { name: 'Switch 8' },
    line: { id: 'network', name: 'Network' },
    shortnames: ['USW'],
  },
  {
    id: 'camera-1',
    product: { name: 'Camera' },
    line: { id: 'protect', name: 'Protect' },
  },
];

function renderFilters(selectedCategories: string[] = [], initialPath = '/') {
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
        selectedCategories,
      },
    },
  });

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[initialPath]}>
        <Routes>
          <Route
            path="*"
            element={
              <>
                <Filters />
                <CurrentPath />
              </>
            }
          />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );

  return store;
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Filters', () => {
  it('renders the total device count', () => {
    renderFilters();

    expect(screen.getByText('3 Devices results')).toBeInTheDocument();
  });

  it('handles clicking the list view button', () => {
    renderFilters([], '/grid-view');

    fireEvent.click(screen.getByRole('button', { name: 'Switch to list view' }));

    expect(screen.getByTestId('current-path')).toHaveTextContent('/');
  });

  it('handles clicking the grid view button', () => {
    renderFilters();

    fireEvent.click(screen.getByRole('button', { name: 'Switch to grid view' }));

    expect(screen.getByTestId('current-path')).toHaveTextContent('/grid-view');
  });

  it('marks the list view button active on the list route', () => {
    renderFilters([], '/');

    expect(screen.getByRole('button', { name: 'Switch to list view' })).toHaveClass(s.listIconBtn);
  });

  it('marks the grid view button active on the grid route', () => {
    renderFilters([], '/grid-view');

    expect(screen.getByRole('button', { name: 'Switch to grid view' })).toHaveClass(s.gridIconBtn);
  });

  it('renders each unique product category once', () => {
    renderFilters();
    fireEvent.click(screen.getByRole('button', { name: 'Filter' }));

    expect(screen.getAllByRole('checkbox')).toHaveLength(2);
  });

  it('dispatches selected category changes', () => {
    const store = renderFilters();
    fireEvent.click(screen.getByRole('button', { name: 'Filter' }));
    fireEvent.click(screen.getByRole('checkbox', { name: 'Network' }));

    expect(store.getState().filters.selectedCategories).toEqual(['network']);
  });

  it('clears selected categories when Reset is clicked', () => {
    const store = renderFilters(['network']);
    fireEvent.click(screen.getByRole('button', { name: 'Filter' }));
    fireEvent.click(screen.getByRole('button', { name: 'Reset' }));

    expect(store.getState().filters.selectedCategories).toEqual([]);
  });

  it('disables Reset when there are no selected categories', () => {
    renderFilters();
    fireEvent.click(screen.getByRole('button', { name: 'Filter' }));

    expect(screen.getByRole('button', { name: 'Reset' })).toBeDisabled();
  });

  it('dispatches the selected product name from Search', async () => {
    const store = renderFilters();
    const search = screen.getByRole('textbox', { name: 'Search products by name' });
    fireEvent.change(search, { target: { value: 'dream' } });
    await screen.findByTestId('primary-text');
    fireEvent.click(screen.getByTestId('primary-text'));

    expect(store.getState().filters.searchValue).toBe('Dream Router');
  });
});

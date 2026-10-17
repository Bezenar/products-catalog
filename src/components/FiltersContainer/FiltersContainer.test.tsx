import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router';
import { afterEach, describe, expect, it, vi } from 'vitest';
import filtersSlice from '../../store/filtersSlice';
import productsSlice from '../../store/productsSlice';
import FiltersContainer from './index';

function renderFiltersContainer({
  isLoading = false,
  hasError = false,
}: { isLoading?: boolean; hasError?: boolean } = {}) {
  const store = configureStore({
    reducer: {
      products: productsSlice.reducer,
      filters: filtersSlice.reducer,
    },
    preloadedState: {
      products: {
        isLoading,
        hasError,
        devices: [],
        version: '',
      },
      filters: {
        searchValue: '',
        selectedCategories: [],
      },
    },
  });

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/products']}>
        <Routes>
          <Route path="/products" element={<FiltersContainer />}>
            <Route index element={<p>Products outlet</p>} />
          </Route>
          <Route path="/error" element={<p>Error route</p>} />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );

  return store;
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('FiltersContainer', () => {
  it('shows a loading indicator while devices are loading', () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() => new Promise(() => {})),
    );
    renderFiltersContainer({ isLoading: true });

    expect(screen.getByRole('status', { name: 'Loading' })).toBeInTheDocument();
  });

  it('navigates to the error route when loading devices fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Network failure')));
    renderFiltersContainer();

    expect(await screen.findByText('Error route')).toBeInTheDocument();
  });

  it('renders Filters and the nested outlet after devices load', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue({
        version: '1',
        devices: [
          {
            id: 'router-1',
            product: { name: 'Dream Router' },
            line: { id: 'network', name: 'Network' },
          },
        ],
      }),
    });
    vi.stubGlobal('fetch', fetchMock);
    renderFiltersContainer();

    expect(await screen.findByRole('button', { name: 'Filter' })).toBeInTheDocument();
    expect(await screen.findByText('Products outlet')).toBeInTheDocument();
  });

  it('requests the devices when mounted', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue({ devices: [], version: '1' }),
    });
    vi.stubGlobal('fetch', fetchMock);
    renderFiltersContainer();
    await screen.findByText('Products outlet');

    expect(fetchMock).toHaveBeenCalledWith('https://static.ui.com/fingerprint/ui/public.json', {
      method: 'GET',
      headers: {},
      body: undefined,
    });
  });
});

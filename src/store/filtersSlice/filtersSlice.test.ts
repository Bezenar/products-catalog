import { describe, expect, it } from 'vitest';
import type { I_FiltersSlice } from '../../types';
import filtersSlice, {
  clearSelectedCategories,
  setSearchValue,
  setSelectedCategories,
} from './index';

describe('filtersSlice', () => {
  it('initializes with an empty search and no selected categories', () => {
    expect(filtersSlice.reducer(undefined, { type: 'unknown' })).toEqual({
      searchValue: '',
      selectedCategories: [],
    });
  });

  it('updates the search value', () => {
    const state = filtersSlice.reducer(undefined, setSearchValue('Dream Router'));

    expect(state.searchValue).toBe('Dream Router');
  });

  it('adds a category when it is checked', () => {
    const state = filtersSlice.reducer(
      undefined,
      setSelectedCategories({ id: 'network', checked: true }),
    );

    expect(state.selectedCategories).toEqual(['network']);
  });

  it('removes a category when it is unchecked', () => {
    const initialState: I_FiltersSlice = {
      searchValue: '',
      selectedCategories: ['network', 'protect'],
    };
    const state = filtersSlice.reducer(
      initialState,
      setSelectedCategories({ id: 'network', checked: false }),
    );

    expect(state.selectedCategories).toEqual(['protect']);
  });

  it('clears all selected categories', () => {
    const initialState: I_FiltersSlice = {
      searchValue: 'router',
      selectedCategories: ['network', 'protect'],
    };
    const state = filtersSlice.reducer(initialState, clearSelectedCategories());

    expect(state.selectedCategories).toEqual([]);
  });
});

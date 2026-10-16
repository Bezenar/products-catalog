import type { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from 'lib/utils/createAppSlice';
import type { I_FiltersSlice } from '../../types';

const initialState: I_FiltersSlice = {
  searchValue: '',
  selectedCategories: [],
};

const slice = createAppSlice({
  name: 'filters',
  initialState,
  reducers: (create) => ({
    setSearchValue: create.reducer((state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    }),
    setSelectedCategories: create.reducer(
      (state, action: PayloadAction<{ id: string; checked: boolean }>) => {
        if (action.payload.checked) {
          state.selectedCategories.push(action.payload.id);
        } else {
          state.selectedCategories = state.selectedCategories.filter(
            (categoryId) => categoryId !== action.payload.id,
          );
        }
      },
    ),
    clearSelectedCategories: create.reducer((state) => {
      state.selectedCategories = [];
    }),
  }),
});

export const { setSearchValue, setSelectedCategories, clearSelectedCategories } = slice.actions;

export default slice;

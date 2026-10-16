import { createSelector } from '@reduxjs/toolkit';
import type { T_AdaptedDeviceLine } from '../types';
import type { T_RootState } from '.';

export const selectFilters = (state: T_RootState) => state.filters;
export const selectSearchValue = (state: T_RootState) => state.filters.searchValue;
export const selectDevices = (state: T_RootState) => state.products.devices;

export const selectFiltersData = createSelector(
  [selectSearchValue, selectFilters, selectDevices],
  (searchValue, filters, devices) => ({
    ...filters,
    categories: devices.reduce<Array<T_AdaptedDeviceLine>>((acc, device) => {
      const line = device.line;
      if (!!line?.id && acc.some((item) => item?.id === line.id)) return acc;

      acc.push({ id: line?.id ?? crypto.randomUUID(), name: line?.name ?? '---' });

      return acc;
    }, []),
    totalDevices: devices.length,
    devices: devices,
    searchValue,
  }),
);

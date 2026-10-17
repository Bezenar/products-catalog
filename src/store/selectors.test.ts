import { afterEach, describe, expect, it, vi } from 'vitest';
import type { T_AdaptedDeviceItem } from '../types';
import { selectFilteredDevices, selectFiltersData } from './selectors';
import type { T_RootState } from './index';

function createState(
  devices: T_AdaptedDeviceItem[],
  searchValue = '',
  selectedCategories: string[] = [],
): T_RootState {
  return {
    products: {
      isLoading: false,
      hasError: false,
      devices,
      version: '1',
    },
    filters: {
      searchValue,
      selectedCategories,
    },
  };
}

function createDevice(id: string, line?: T_AdaptedDeviceItem['line']): T_AdaptedDeviceItem {
  return {
    id,
    product: { name: `Product ${id}` },
    line,
  };
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe('selectFiltersData', () => {
  it('combines filter state with device data and total count', () => {
    const devices = [createDevice('router', { id: 'network', name: 'Network' })];
    const state = createState(devices, 'router', ['network']);

    expect(selectFiltersData(state)).toEqual({
      searchValue: 'router',
      selectedCategories: ['network'],
      categories: [{ id: 'network', name: 'Network' }],
      totalDevices: 1,
      devices,
    });
  });

  it('deduplicates categories that share the same line ID', () => {
    const state = createState([
      createDevice('router', { id: 'network', name: 'Network' }),
      createDevice('switch', { id: 'network', name: 'Network' }),
      createDevice('camera', { id: 'protect', name: 'Protect' }),
    ]);

    expect(selectFiltersData(state).categories).toEqual([
      { id: 'network', name: 'Network' },
      { id: 'protect', name: 'Protect' },
    ]);
  });

  it('generates an ID for a line without an ID', () => {
    vi.spyOn(globalThis.crypto, 'randomUUID').mockReturnValue('generated-line-id-1-1');
    const state = createState([createDevice('device', { name: 'Network' })]);

    expect(selectFiltersData(state).categories).toEqual([
      { id: 'generated-line-id-1-1', name: 'Network' },
    ]);
  });

  it('uses fallback ID and name when a device has no line', () => {
    vi.spyOn(globalThis.crypto, 'randomUUID').mockReturnValue('generated-line-id-2-2');
    const state = createState([createDevice('device')]);

    expect(selectFiltersData(state).categories).toEqual([
      { id: 'generated-line-id-2-2', name: '---' },
    ]);
  });
});

describe('selectFilteredDevices', () => {
  const devices = [
    createDevice('router', { id: 'network', name: 'Network' }),
    createDevice('switch', { id: 'network', name: 'Network' }),
    createDevice('camera', { id: 'protect', name: 'Protect' }),
    createDevice('unknown'),
  ];

  it('returns the original devices when no filters are active', () => {
    const state = createState(devices);

    expect(selectFilteredDevices(state)).toBe(devices);
  });

  it('filters devices by product name', () => {
    const state = createState(devices, 'switch');

    expect(selectFilteredDevices(state).map((device) => device.id)).toEqual(['switch']);
  });

  it('filters devices by selected category', () => {
    const state = createState(devices, '', ['network']);

    expect(selectFilteredDevices(state).map((device) => device.id)).toEqual(['router', 'switch']);
  });

  it('applies product name and category filters together', () => {
    const state = createState(devices, 'switch', ['network']);

    expect(selectFilteredDevices(state).map((device) => device.id)).toEqual(['switch']);
  });
});

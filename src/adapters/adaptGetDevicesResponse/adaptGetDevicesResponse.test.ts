import { afterEach, describe, expect, it, vi } from 'vitest';
import type { I_GetDevicesRes } from '../../types';
import adaptGetDevicesResponse from './index';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('adaptGetDevicesResponse', () => {
  it('preserves the response version and existing device fields', () => {
    const response: I_GetDevicesRes = {
      version: '2026.10',
      devices: [
        {
          id: 'router-1',
          product: { name: 'Dream Router', abbrev: 'UDR' },
          sku: 'UDR',
        },
      ],
    };

    expect(adaptGetDevicesResponse(response)).toEqual({
      version: '2026.10',
      devices: [
        {
          id: 'router-1',
          product: { name: 'Dream Router', abbrev: 'UDR' },
          sku: 'UDR',
        },
      ],
    });
  });

  it('generates an ID when the device ID is missing', () => {
    vi.spyOn(globalThis.crypto, 'randomUUID').mockReturnValue(
      '00000000-0000-4000-8000-000000000001',
    );

    const result = adaptGetDevicesResponse({
      version: '1',
      devices: [{ product: { name: 'Switch 8' } }],
    });

    expect(result.devices[0].id).toBe('00000000-0000-4000-8000-000000000001');
  });

  it('uses a fallback product name when the product name is missing', () => {
    const result = adaptGetDevicesResponse({
      version: '1',
      devices: [{ id: 'device-1', product: {} }],
    });

    expect(result.devices[0].product.name).toBe('---');
  });

  it('uses a fallback product name when the product is missing', () => {
    const result = adaptGetDevicesResponse({
      version: '1',
      devices: [{ id: 'device-1' }],
    });

    expect(result.devices[0].product.name).toBe('---');
  });

  it('keeps the shortnames of a device', () => {
    const result = adaptGetDevicesResponse({
      version: '1',
      devices: [{ id: 'device-1', shortnames: ['UDR', 'UDM'] }],
    });

    expect(result.devices[0].shortnames).toEqual(['UDR', 'UDM']);
  });

  it('removes undefined entries from the shortnames', () => {
    const result = adaptGetDevicesResponse({
      version: '1',
      devices: [{ id: 'device-1', shortnames: ['UDR', undefined, 'UDM'] }],
    });

    expect(result.devices[0].shortnames).toEqual(['UDR', 'UDM']);
  });

  it('returns an empty list when every shortname is undefined', () => {
    const result = adaptGetDevicesResponse({
      version: '1',
      devices: [{ id: 'device-1', shortnames: [undefined] }],
    });

    expect(result.devices[0].shortnames).toEqual([]);
  });

  it('leaves the shortnames undefined when the device has none', () => {
    const result = adaptGetDevicesResponse({
      version: '1',
      devices: [{ id: 'device-1' }],
    });

    expect(result.devices[0].shortnames).toBeUndefined();
  });
});

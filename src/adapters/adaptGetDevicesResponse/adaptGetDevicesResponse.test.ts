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
    vi.spyOn(globalThis.crypto, 'randomUUID').mockReturnValue('generated-device-id');

    const result = adaptGetDevicesResponse({
      version: '1',
      devices: [{ product: { name: 'Switch 8' } }],
    });

    expect(result.devices[0].id).toBe('generated-device-id');
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
});

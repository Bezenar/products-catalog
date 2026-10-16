import { afterEach, describe, expect, it, vi } from 'vitest';
import type { I_GetDevicesRes } from '../../types';
import ProductsApi from './index';

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('ProductsApi', () => {
  it('requests the public devices response with GET', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue({ devices: [], version: '1' }),
    });
    vi.stubGlobal('fetch', fetchMock);

    await new ProductsApi().getDevices();

    expect(fetchMock).toHaveBeenCalledWith('https://static.ui.com/fingerprint/ui/public.json', {
      method: 'GET',
      headers: {},
      body: undefined,
    });
  });

  it('returns devices adapted from the response', async () => {
    const response: I_GetDevicesRes = {
      version: '2026.10',
      devices: [{ id: 'camera-1', product: { abbrev: 'CAM' } }],
    };
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: vi.fn().mockResolvedValue(response),
      }),
    );

    await expect(new ProductsApi().getDevices()).resolves.toEqual({
      version: '2026.10',
      devices: [
        {
          id: 'camera-1',
          product: { abbrev: 'CAM', name: '---' },
        },
      ],
    });
  });
});

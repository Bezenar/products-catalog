import { afterEach, describe, expect, it, vi } from 'vitest';
import BaseApi, { type I_Options } from './index';

class TestBaseApi extends BaseApi {
  send<Response, Body = unknown>(options: I_Options<Body>): Promise<Response> {
    return this.request<Response, Body>(options);
  }
}

describe('BaseApi', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('returns parsed JSON for a successful response', async () => {
    const payload = { id: 7, name: 'Router' };
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: vi.fn().mockResolvedValue(payload),
      }),
    );

    await expect(new TestBaseApi().send<typeof payload>({ path: '/products/7' })).resolves.toEqual(
      payload,
    );
  });

  it('sends the configured method, headers, and serialized body', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue({}),
    });
    vi.stubGlobal('fetch', fetchMock);
    const body = { name: 'Router' };

    await new TestBaseApi().send({
      path: '/products',
      method: 'POST',
      headers: { Authorization: 'token' },
      body,
    });

    expect(fetchMock).toHaveBeenCalledWith('/products', {
      method: 'POST',
      headers: { Authorization: 'token' },
      body: JSON.stringify(body),
    });
  });

  it('defaults to GET and omits the request body', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue({}),
    });
    vi.stubGlobal('fetch', fetchMock);

    await new TestBaseApi().send({ path: '/products' });

    expect(fetchMock).toHaveBeenCalledWith('/products', {
      method: 'GET',
      headers: {},
      body: undefined,
    });
  });

  it('throws when the response is not successful', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 503 }));

    await expect(new TestBaseApi().send({ path: '/products' })).rejects.toThrow(
      'Request failed with status 503',
    );
  });
});

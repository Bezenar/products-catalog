export interface I_Options<Body = unknown> {
  path: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: Body;
}

export default class BaseApi {
  protected async request<Res, ReqBody = unknown>(options: I_Options<ReqBody>): Promise<Res> {
    const response = await fetch(options.path, {
      method: options.method || 'GET',
      headers: {
        ...options.headers,
      },
      body: !!options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json() as Res;
  }
}

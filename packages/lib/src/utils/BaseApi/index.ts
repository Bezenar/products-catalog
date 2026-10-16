export interface I_Options<Res, Body = unknown, Adapted = null> {
  path: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: Body;
  transformResponse?: (response: Res) => Adapted;
}

export default class BaseApi {
  protected async request<Res, ReqBody = unknown, Adapted = null>(
    options: I_Options<Res, ReqBody, Adapted>,
  ): Promise<Adapted extends null ? Res : Adapted> {
    const { headers = {} } = options;
    const response = await fetch(options.path, {
      method: options.method || 'GET',
      headers: {
        ...headers,
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data: Adapted extends null ? Res : Adapted = await response.json();

    if (options.transformResponse) {
      return options.transformResponse(data as Res) as Adapted extends null ? Res : Adapted;
    }

    return data;
  }
}

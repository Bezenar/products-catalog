import createServiceFn from './index';

describe('lib/utils/createServiceFn', () => {
  const mockedApi = vi.fn()
  const mockOnSuccess = vi.fn();
  const mockOnError = vi.fn();
  const mockOnComplete = vi.fn();
  const mockOnBeforeRequest = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Should create function', () => {
    expect(createServiceFn(mockedApi)).toBeInstanceOf(Function);
  });

  it('Calling the created function should call the onBeforeRequest callback before making the API call', () => {
    const serviceFn = createServiceFn(mockedApi);

    serviceFn([], {
      onError: mockOnError,
      onSuccess: mockOnSuccess,
      onComplete: mockOnComplete,
      onBeforeRequest: mockOnBeforeRequest,
    });
    
    expect(mockOnBeforeRequest).toHaveBeenCalled();
  });

  it('Calling the created function should call the API function', () => {
    const serviceFn = createServiceFn(mockedApi);

    serviceFn([], {
      onError: mockOnError,
      onSuccess: mockOnSuccess,
      onComplete: mockOnComplete,
      onBeforeRequest: mockOnBeforeRequest,
    });
    
    expect(mockedApi).toHaveBeenCalled();
  });

  it('Calling the created function should call the API function with passed arguments', async () => {
    const serviceFn = createServiceFn(mockedApi);

    await serviceFn(['arg1', 'arg2'], {
      onError: mockOnError,
      onSuccess: mockOnSuccess,
      onComplete: mockOnComplete,
      onBeforeRequest: mockOnBeforeRequest,
    });

    expect(mockedApi).toHaveBeenCalledWith('arg1', 'arg2');
  });

  it('Calling the created function on successful API call should call the onSuccess callback', async () => {
    const serviceFn = createServiceFn(mockedApi);

    await serviceFn(['arg1', 'arg2'], {
      onError: mockOnError,
      onSuccess: mockOnSuccess,
      onComplete: mockOnComplete,
      onBeforeRequest: mockOnBeforeRequest,
    });

    expect(mockOnSuccess).toHaveBeenCalled();
  });

  it('Calling the created function on failed API call should call the onError callback', async () => {
    mockedApi.mockRejectedValue(new Error('API call failed'));
    const serviceFn = createServiceFn(mockedApi);

    await serviceFn(['arg1', 'arg2'], {
      onError: mockOnError,
      onSuccess: mockOnSuccess,
      onComplete: mockOnComplete,
      onBeforeRequest: mockOnBeforeRequest,
    });

    expect(mockOnError).toHaveBeenCalled();
  });

  it('Calling the created function should call the onComplete callback when done', async () => {
    const serviceFn = createServiceFn(mockedApi);

    await serviceFn(['arg1', 'arg2'], {
      onError: mockOnError,
      onSuccess: mockOnSuccess,
      onComplete: mockOnComplete,
      onBeforeRequest: mockOnBeforeRequest,
    });

    expect(mockOnComplete).toHaveBeenCalled();
  });

  it('Calling the created function should call the adapter function if provided', async () => {
    mockedApi.mockResolvedValue([{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]);
    const serviceFn = createServiceFn(mockedApi);
    const mockAdapter = vi.fn((result) => result);

    await serviceFn(['arg1', 'arg2'], {
      onError: mockOnError,
      onSuccess: mockOnSuccess,
      onComplete: mockOnComplete,
      onBeforeRequest: mockOnBeforeRequest,
      adapter: mockAdapter,
    });

    expect(mockAdapter).toHaveBeenCalled();
  });

  it('Calling the created function should return adapted data if adapter is provided', async () => {
    type Product = { id: number; name: string };

    const mockedResponse: Product[] = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];

    mockedApi.mockResolvedValue(mockedResponse);
    
    const serviceFn = createServiceFn(mockedApi);
    const mockAdapter = vi.fn((result) => result.map((i: Product) => i.id));

    await serviceFn(['arg1', 'arg2'], {
      onError: mockOnError,
      onSuccess: mockOnSuccess,
      onComplete: mockOnComplete,
      onBeforeRequest: mockOnBeforeRequest,
      adapter: mockAdapter,
    });

    expect(mockOnSuccess).toHaveBeenCalledWith([1, 2]);
  });
});

export type T_ServiceOptions<R, A = R> = {
  onError: (error: unknown) => void;
  onComplete?: () => void;
  onBeforeRequest?: () => void;
} & (
  | {
      adapter: (result: R) => A;
      onSuccess: (result: A) => void;
    }
  | {
      adapter?: undefined;
      onSuccess: (result: R) => void;
    }
);

export default function createServiceFn<Args extends unknown[], Result>(
  fn: (...args: Args) => Result,
) {
  type Response = Awaited<Result>;

  return async <Adapted = Response>(
    args: Args,
    options: T_ServiceOptions<Response, Adapted>,
  ): Promise<void> => {
    options.onBeforeRequest?.();

    try {
      const result = await fn(...args);

      if (options.adapter) {
        const adaptedData = options.adapter(result);

        options.onSuccess(adaptedData);
      } else {
        options.onSuccess(result);
      }
    } catch (error) {
      options.onError(error);
    } finally {
      options.onComplete?.();
    }
  };
}

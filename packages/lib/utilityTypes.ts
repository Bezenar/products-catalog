export type T_DeepPartial<T> = T extends object
  ? {
      [K in keyof T]?: T_DeepPartial<T[K]>;
    }
  : T;

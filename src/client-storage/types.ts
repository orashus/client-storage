interface StorageOptions<T> {
  parse?: boolean;
  fallback?: T;
}

type StorageType = "local" | "session";

export type {
  StorageOptions,
  StorageType,
};

import type { StorageOptions, StorageType } from "./types";

class CLIENT_STORAGE {
  private myStorage: Storage; // will either be localStorage or sessionStorage;
  private storageType: StorageType;

  constructor(type: StorageType) {
    if (type === "local") {
      this.myStorage = window.localStorage; // utilizing localStorage;
    } else if (type === "session") {
      this.myStorage = window.sessionStorage; // utilizing sessionStorage;
    } else {
      throw new Error(
        "NO STORAGE TYPE SELECTED. PICK ONE OF 'local' | 'session' !!"
      );
    };

    this.storageType = type;
  };

  private errorMsg(append: "write to" | "read from" | "remove from") {
    new Error(`Cannot ${append} ${this.storageType} storage whilst on the server`);
  }

  private isOnServer(): boolean {
    return typeof window === "undefined";
  };

  // Storage actions

  save<T>(key: string, val: T) {
    if (this.isOnServer()) {
      this.errorMsg("write to");
    }

    if (typeof val === "string") return this.myStorage.setItem(key, val); // if i stringiy a string, it'll have additional quotes to it.

    return this.myStorage.setItem(key, JSON.stringify(val));
  };

  get<T>(key: string, options: Required<StorageOptions>): T | null {
    if (this.isOnServer()) {
      this.errorMsg("read from");
    }

    const val = this.myStorage.getItem(key) ?? (null as T);

    if (options.isString) return val as T;

    return JSON.parse(val as any) as T;
  };

  remove(key: string) {
    if (this.isOnServer()) {
      this.errorMsg("remove from");
    };

    return this.myStorage.removeItem(key);
  };

  clear() {
    if (this.isOnServer()) {
      this.errorMsg("remove from");
    };

    return this.myStorage.clear();
  };
}

export { CLIENT_STORAGE };

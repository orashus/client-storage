import type { StorageOptions, StorageType } from "./types";

class CLIENT_STORAGE {
  private myStorage: Storage;
  private storageType: StorageType;

  /** @argument {("local" | "session")} type */
  constructor(type: StorageType) {
    if (this.isOnServer()) {
      this.errorMsg("initialize");
    }

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

  private errorMsg(append: "write to" | "read from" | "remove from" | "initialize") {
    throw new Error(`Cannot ${append} ${this.storageType} storage whilst on the server`);
  }

  isOnServer(): boolean {
    return typeof window === "undefined";
  };

  /** Saves a key - value pair to storage
   * @argument {string} key
   * @argument {*} val
   * @returns {void}
  */
  save<T>(key: string, val: T): void {
    if (this.isOnServer()) {
      this.errorMsg("write to");
    };

    if (typeof val === "string") return this.myStorage.setItem(key, val); // if i stringify a string, it'll have additional quotes to it.

    return this.myStorage.setItem(key, JSON.stringify(val));
  };

  // function overloads for the get() method
  get<T>(key: string): string | null;
  get<T>(key: string, options: { parse?: false, fallback?: T }): string | null;
  get<T>(key: string, options?: { parse?: true, fallback?: T }): T | null;
  /** Retrieves a value from storage using it's key in storage
   * @argument {string} key - key to hold the value in storage
   * @argument {Object} options - The options for extra functionality
   * @argument {boolean} [options.parse=false] - option { parse: boolean } is false by default. Set to true if you want automatic parsing
   * @argument {*} options.fallback - value to return if data not found in storage or an error occurs while reading
  */
  get<T>(key: string, options?: StorageOptions<T>): string | T | null {
    if (this.isOnServer()) {
      if (options?.fallback || typeof options?.fallback !== "undefined") return options?.fallback;

      this.errorMsg("read from");
    }

    const val = this.myStorage.getItem(key);

    if (["undefined", "null"].includes(String(val))) return options?.fallback ?? null;

    if (options?.parse) {
      try {
        return JSON.parse(val!) as T;
      } catch (error) {
        if ((error as { message?: string })?.message?.includes("is not valid JSON")) {
          throw new Error(`"${val}" is not a valid JSON`);
        } else {
          return options?.fallback ?? val as T;
        }
      }
    }

    return val as T;
  };

  /** removes a single key-value pair from storage
   * @argument {string} key
  */
  remove(key: string) {
    if (this.isOnServer()) {
      this.errorMsg("remove from");
    };

    return this.myStorage.removeItem(key);
  };

  /** removes all keys from sto  rage */
  clear() {
    if (this.isOnServer()) {
      this.errorMsg("remove from");
    };

    return this.myStorage.clear();
  };
}

export { CLIENT_STORAGE };

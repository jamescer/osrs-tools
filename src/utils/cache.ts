/**
 * Interface for cache options
 */
interface CacheOptions {
  /** Maximum number of items to store */
  maxSize?: number;
  /** Time-to-live in milliseconds */
  ttl?: number;
}

/**
 * Interface for cached items
 */
interface CacheItem<T> {
  /** The stored value */
  value: T;
  /** Timestamp when the item expires */
  expiresAt?: number;
}

/**
 * Generic cache implementation with LRU eviction and TTL support
 */
export class Cache<T> {
  private store = new Map<string, CacheItem<T>>();
  private readonly maxSize: number;
  private readonly ttl?: number;

  /**
   * Creates a new Cache instance
   * @param options Cache configuration options
   */
  constructor(options: CacheOptions = {}) {
    this.maxSize = options.maxSize || 100;
    this.ttl = options.ttl;
  }

  /**
   * Store a value in the cache
   * @param key Cache key
   * @param value Value to store
   * @param ttl Optional TTL override for this item
   */
  set(key: string, value: T, ttl?: number): void {
    // Enforce size limit using LRU eviction
    if (this.store.size >= this.maxSize) {
      const firstKey = this.store.keys().next().value as string;
      this.store.delete(firstKey);
    }

    const expiresAt = ttl || this.ttl ? Date.now() + (ttl || this.ttl!) : undefined;

    this.store.set(key, { expiresAt, value });
  }

  /**
   * Retrieve a value from the cache
   * @param key Cache key
   * @returns Stored value or undefined if not found/expired
   */
  get(key: string): T | undefined {
    const item = this.store.get(key);

    if (!item) {
      return undefined;
    }

    // Check if item has expired
    if (item.expiresAt && Date.now() > item.expiresAt) {
      this.store.delete(key);
      return undefined;
    }

    return item.value;
  }

  /**
   * Remove an item from the cache
   * @param key Cache key
   * @returns true if item was found and removed
   */
  delete(key: string): boolean {
    return this.store.delete(key);
  }

  /**
   * Clear all items from the cache
   */
  clear(): void {
    this.store.clear();
  }

  /**
   * Get the number of items in the cache
   */
  get size(): number {
    return this.store.size;
  }

  /**
   * Get all valid keys in the cache
   * @returns Array of cache keys
   */
  keys(): string[] {
    const now = Date.now();
    return Array.from(this.store.entries())
      .filter(([_, item]) => !item.expiresAt || item.expiresAt > now)
      .map(([key]) => key);
  }

  /**
   * Remove all expired items from the cache
   * @returns Number of items removed
   */
  prune(): number {
    const now = Date.now();
    let removed = 0;

    for (const [key, item] of this.store.entries()) {
      if (item.expiresAt && item.expiresAt <= now) {
        this.store.delete(key);
        removed++;
      }
    }

    return removed;
  }

  /**
   * Check if a key exists in the cache and isn't expired
   * @param key Cache key
   * @returns true if key exists and isn't expired
   */
  has(key: string): boolean {
    const item = this.store.get(key);
    if (!item) {
      return false;
    }
    if (item.expiresAt && Date.now() > item.expiresAt) {
      this.store.delete(key);
      return false;
    }
    return true;
  }

  /**
   * Get or set a cache value
   * @param key Cache key
   * @param factory Function to create value if not found
   * @returns Cached or newly created value
   */
  async getOrSet(key: string, factory: () => Promise<T>): Promise<T> {
    const existing = this.get(key);
    if (existing !== undefined) {
      return existing;
    }

    const value = await factory();
    this.set(key, value);
    return value;
  }
}

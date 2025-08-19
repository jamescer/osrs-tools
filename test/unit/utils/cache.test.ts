import { Cache } from '../../../src/utils/cache';

describe('Cache', () => {
  let cache: Cache<string>;

  beforeEach(() => {
    cache = new Cache();
  });

  it('should store and retrieve values', () => {
    cache.set('key1', 'value1');
    expect(cache.get('key1')).toBe('value1');
  });

  it('should handle non-existent keys', () => {
    expect(cache.get('nonexistent')).toBeUndefined();
  });

  it('should respect max size limit', () => {
    const smallCache = new Cache<string>({ maxSize: 2 });

    smallCache.set('key1', 'value1');
    smallCache.set('key2', 'value2');
    smallCache.set('key3', 'value3');

    expect(smallCache.get('key1')).toBeUndefined();
    expect(smallCache.get('key2')).toBe('value2');
    expect(smallCache.get('key3')).toBe('value3');
  });

  it('should handle TTL expiration', async () => {
    const ttlCache = new Cache<string>({ ttl: 100 }); // 100ms TTL

    ttlCache.set('key1', 'value1');
    expect(ttlCache.get('key1')).toBe('value1');

    await new Promise(resolve => setTimeout(resolve, 150));
    expect(ttlCache.get('key1')).toBeUndefined();
  });

  it('should allow per-item TTL override', async () => {
    const ttlCache = new Cache<string>({ ttl: 500 });

    ttlCache.set('key1', 'value1', 100); // Override with 100ms TTL
    expect(ttlCache.get('key1')).toBe('value1');

    await new Promise(resolve => setTimeout(resolve, 150));
    expect(ttlCache.get('key1')).toBeUndefined();
  });

  it('should correctly handle delete operation', () => {
    cache.set('key1', 'value1');
    expect(cache.delete('key1')).toBe(true);
    expect(cache.get('key1')).toBeUndefined();
    expect(cache.delete('key1')).toBe(false);
  });

  it('should clear all items', () => {
    cache.set('key1', 'value1');
    cache.set('key2', 'value2');
    cache.clear();
    expect(cache.size).toBe(0);
    expect(cache.get('key1')).toBeUndefined();
    expect(cache.get('key2')).toBeUndefined();
  });

  it('should return valid keys only', async () => {
    const ttlCache = new Cache<string>({ ttl: 100 });

    ttlCache.set('key1', 'value1');
    ttlCache.set('key2', 'value2');

    expect(ttlCache.keys().sort()).toEqual(['key1', 'key2'].sort());

    await new Promise(resolve => setTimeout(resolve, 150));
    expect(ttlCache.keys()).toEqual([]);
  });

  it('should correctly prune expired items', async () => {
    const ttlCache = new Cache<string>({ ttl: 100 });

    ttlCache.set('key1', 'value1');
    ttlCache.set('key2', 'value2');

    await new Promise(resolve => setTimeout(resolve, 150));

    const pruned = ttlCache.prune();
    expect(pruned).toBe(2);
    expect(ttlCache.size).toBe(0);
  });

  it('should check existence correctly', () => {
    cache.set('key1', 'value1');
    expect(cache.has('key1')).toBe(true);
    expect(cache.has('nonexistent')).toBe(false);
  });

  it('should handle getOrSet correctly', async () => {
    const factory = jest.fn().mockResolvedValue('computed');

    const value1 = await cache.getOrSet('key1', factory);
    expect(value1).toBe('computed');
    expect(factory).toHaveBeenCalledTimes(1);

    const value2 = await cache.getOrSet('key1', factory);
    expect(value2).toBe('computed');
    expect(factory).toHaveBeenCalledTimes(1); // Factory not called again
  });
});

import { describe, expect, it } from '@jest/globals';
import { ValidationError } from '../../../source/runescape/errors';

describe('ValidationError', () => {
  it('sets core Error and custom fields', () => {
    const context = { source: 'quest-parser', retryable: false };
    const err = new ValidationError('questName', 'Dragon Slayer II', 'Invalid quest name', context);

    expect(err).toBeInstanceOf(Error);
    expect(err.name).toBe('ValidationError');
    expect(err.message).toBe('Invalid quest name');
    expect(err.fieldName).toBe('questName');
    expect(err.value).toBe('Dragon Slayer II');
    expect(err.context).toEqual(context);
  });

  it('supports optional context being omitted', () => {
    const err = new ValidationError('level', 0, 'Level must be at least 1');
    expect(err.context).toBeUndefined();
    expect(err.fieldName).toBe('level');
    expect(err.value).toBe(0);
  });
});

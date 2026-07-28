import { describe, expect, it } from '@jest/globals';
import { getAvailableMortifiers, getMortifierByName, MORTIFIERS } from 'src/runescape/model/slayer/core/Mortifier';

describe('Mortifier', () => {
  it('defines all 6 Mortifiers', () => {
    expect(MORTIFIERS).toHaveLength(6);
  });

  it('unlocks only the base Mortifiers at 0 completed tasks', () => {
    const names = getAvailableMortifiers(0).map(m => m.name);
    expect(names).toEqual(['Bonus Slayer Points', 'Quantity Modifier']);
  });

  it('progressively unlocks Mortifiers as tasks are completed', () => {
    expect(getAvailableMortifiers(15).map(m => m.name)).toContain('Clue Scroll Boost');
    expect(getAvailableMortifiers(25).map(m => m.name)).toContain('Superior Unique Boost');
    expect(getAvailableMortifiers(40).map(m => m.name)).toContain('Bonus Slayer Exp');
    expect(getAvailableMortifiers(50).map(m => m.name)).toContain('Third Task Choice');
  });

  it('finds a Mortifier by name, case insensitively', () => {
    expect(getMortifierByName('third task choice')).toBe(getMortifierByName('Third Task Choice'));
    expect(getMortifierByName('Nonexistent')).toBeUndefined();
  });
});

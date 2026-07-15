import { describe, expect, it } from '@jest/globals';
import {
  OldSchoolRunescapeItems,
  OldSchoolRunescapeItemsById,
} from 'src/runescape/model/items/OldSchoolRunescapeItems';

describe('OldSchoolRunescapeItems', () => {
  it('covers the full OSRS item list', () => {
    expect(OldSchoolRunescapeItems.length).toBeGreaterThan(15000);
  });

  it('gives every item a numeric id, a name, and a wiki image url', () => {
    for (const item of OldSchoolRunescapeItems) {
      expect(typeof item.id).toBe('number');
      expect(item.name.length).toBeGreaterThan(0);
      expect(item.imageUrl.startsWith('https://oldschool.runescape.wiki/images/')).toBe(true);
    }
  });

  it('has no duplicate ids', () => {
    const ids = OldSchoolRunescapeItems.map(item => item.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('keeps the id-keyed map in sync with the array', () => {
    expect(OldSchoolRunescapeItemsById.size).toBe(OldSchoolRunescapeItems.length);
  });

  it('resolves a well-known item by id', () => {
    const runeKiteshield = OldSchoolRunescapeItemsById.get(1201);

    expect(runeKiteshield).toBeDefined();
    expect(runeKiteshield?.name).toBe('Rune kiteshield');
    expect(runeKiteshield?.imageUrl).toBe('https://oldschool.runescape.wiki/images/Rune_kiteshield.png');
  });

  it('resolves a non-tradeable, name-derived item by id', () => {
    const clothAltar = OldSchoolRunescapeItemsById.get(8064);

    expect(clothAltar).toBeDefined();
    expect(clothAltar?.name).toBe('Cloth altar');
    expect(clothAltar?.imageUrl).toBe('https://oldschool.runescape.wiki/images/Cloth_altar.png');
  });
});

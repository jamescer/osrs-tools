import { ItemRequirement, RequirementType } from '../../../../src/model/Requirement';

describe('ItemRequirement', () => {
  it('should create basic item requirement', () => {
    const req = new ItemRequirement('Dragon bones');
    expect(req.itemName).toBe('Dragon bones');
    expect(req.quantity).toBe(1);
    expect(req.consumed).toBe(true);
    expect(req.description).toBe('1x Dragon bones');
  });

  it('should handle quantity', () => {
    const req = new ItemRequirement('Bones', 5);
    expect(req.quantity).toBe(5);
    expect(req.description).toBe('5x Bones');
  });

  it('should handle noted items', () => {
    const req = new ItemRequirement('Dragon bones', 1, { noted: true });
    expect(req.noted).toBe(true);
    expect(req.description).toBe('1x Dragon bones (noted)');
  });

  it('should handle non-consumed items', () => {
    const req = new ItemRequirement('Spade', 1, { consumed: false });
    expect(req.consumed).toBe(false);
    expect(req.description).toBe('1x Spade (not consumed)');
  });

  it('should handle alternative items', () => {
    const req = new ItemRequirement('Dragon axe', 1, {
      alternatives: ['Crystal axe', 'Infernal axe'],
    });
    expect(req.alternatives).toEqual(['Crystal axe', 'Infernal axe']);
    expect(req.description).toBe('1x Dragon axe (or Crystal axe or Infernal axe)');
  });

  it('should handle bankable items', () => {
    const req = new ItemRequirement('Coins', 10000, {
      bankable: true,
      notes: 'Can be withdrawn during quest',
    });
    expect(req.bankable).toBe(true);
    expect(req.notes).toBe('Can be withdrawn during quest');
    expect(req.description).toBe('10000x Coins (Can be withdrawn during quest)');
  });

  it('should handle all options together', () => {
    const req = new ItemRequirement('Nature rune', 100, {
      noted: true,
      consumed: true,
      alternatives: ['Law rune'],
      bankable: true,
      notes: 'For high alching',
    });
    expect(req.description).toBe('100x Nature rune (noted) (or Law rune) (For high alching)');
  });

  it('should have correct type', () => {
    const req = new ItemRequirement('Any item');
    expect(req.type).toBe(RequirementType.Item);
  });
});

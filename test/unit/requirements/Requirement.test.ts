// Test file for all requirement types
import {
  CombatLevelRequirement,
  ItemRequirement,
  LocationRequirement,
  QuestPointRequirement,
  QuestRequirement,
  RequirementType,
  SlayerLevelRequirement,
  SlayerUnlockRequirement,
} from '../../../src/model/Requirement';

describe('Requirement', () => {
  it('should create a QuestRequirement', () => {
    const req = new QuestRequirement('Dragon Slayer II');
    expect(req.questName).toBe('Dragon Slayer II');
    expect(req.type).toBe(RequirementType.Quest);
    expect(req.completionDescription).toBe('Completion of Dragon Slayer II');
    expect(req.description).toBe('Completed quest: Dragon Slayer II');
  });

  it('should create an ItemRequirement', () => {
    const req = new ItemRequirement('Dragon bones', 5, { noted: true });
    expect(req.itemName).toBe('Dragon bones');
    expect(req.quantity).toBe(5);
    expect(req.noted).toBe(true);
    expect(req.type).toBe(RequirementType.Item);
    expect(req.description).toBe('5x Dragon bones (noted)');
  });

  it('should create a SlayerUnlockRequirement', () => {
    const req = new SlayerUnlockRequirement('Slug Salter');
    expect(req.name).toBe('Slug Salter');
    expect(req.type).toBe(RequirementType.SlayerUnlock);
    expect(req.description).toBe('Slayer unlock: Slug Salter');
  });

  // CombatLevelRequirement
  it('should create a CombatLevelRequirement', () => {
    const req = new CombatLevelRequirement(75);
    expect(req.level).toBe(75);
    expect(req.type).toBe(RequirementType.CombatLevel);
    expect(req.description).toBe('Combat level 75');
  });

  // slayer level requirement
  it('should create a SlayerLevelRequirement', () => {
    const req = new SlayerLevelRequirement(90);
    expect(req.level).toBe(90);
    expect(req.type).toBe(RequirementType.SlayerLevel);
    expect(req.description).toBe('Slayer level 90');
  });

  // slayer level requirement
  it('should create a QuestPointRequirement ', () => {
    const req = new QuestPointRequirement(135);
    expect(req.amount).toBe(135);
    expect(req.type).toBe(RequirementType.QuestPoint);
    expect(req.description).toBe('Quest Points Needed: 135');
  });
  // LocationRequirement
  it('should create a LocationRequirement ', () => {
    const req = new LocationRequirement('Yanille');
    expect(req.type).toBe(RequirementType.Location);
    expect(req.description).toBe('Access to location: Yanille');
  });
});

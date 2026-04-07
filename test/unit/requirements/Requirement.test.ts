// Comprehensive tests for all requirement types
import { CombatLevelRequirement, ItemRequirement, LocationRequirement, QuestPointRequirement, QuestRequirement, RequirementType, SlayerLevelRequirement, SlayerUnlockRequirement, } from '../../../source/runescape/model/Requirement';
import { LevelRequirement } from '../../../source/runescape/model/Requirement';
import { Skill } from '../../../source/runescape/model/account/Skill';

/**
 * Comprehensive test suite for Requirement classes
 * Tests all requirement types and their properties
 */
describe('Requirement - Quest, item, and level requirements', () => {
  describe('QuestRequirement - Require completion of a quest', () => {
    it('should create a quest requirement', () => {
      const req = new QuestRequirement('Dragon Slayer II');
      expect(req.questName).toBe('Dragon Slayer II');
      expect(req.type).toBe(RequirementType.Quest);
    });

    it('should have completion description', () => {
      const req = new QuestRequirement('Dragon Slayer');
      expect(req.completionDescription).toBe('Completion of Dragon Slayer');
    });

    it('should have readable description', () => {
      const req = new QuestRequirement('Monkey Madness II');
      expect(req.description).toContain('Monkey Madness II');
      expect(req.description.toLowerCase()).toContain('quest');
    });

    it('should support different quests', () => {
      const quests = ['Waterfall Quest', 'Dragon Slayer', 'Lost City'];
      for (const quest of quests) {
        const req = new QuestRequirement(quest);
        expect(req.questName).toBe(quest);
      }
    });

    it('should support quests with special characters', () => {
      const req = new QuestRequirement("Cook's Assistant");
      expect(req.questName).toBe("Cook's Assistant");
    });

    it('should throw for fromQuestName placeholder implementation', () => {
      expect(() => QuestRequirement.fromQuestName('Dragon Slayer')).toThrow('Method not implemented.');
    });
  });

  describe('LevelRequirement - Skill level constraints', () => {
    it('should infer boostable from known metadata when omitted', () => {
      const req = new LevelRequirement(Skill.Attack, 70);
      expect(req.type).toBe(RequirementType.Level);
      expect(req.boostable).toBe(true);
      expect(req.description).toBe('Level 70');
    });

    it('should honor explicit boostable override', () => {
      const req = new LevelRequirement(Skill.Attack, 70, false);
      expect(req.boostable).toBe(false);
    });

    it('should default boostable to false for unknown skill names', () => {
      const req = new LevelRequirement('Unknown Skill', 10);
      expect(req.boostable).toBe(false);
      expect(req.getMaxLevel()).toBe(99);
    });
  });

  describe('ItemRequirement - Require specific items', () => {
    it('should create basic item requirement', () => {
      const req = new ItemRequirement('Dragon bones', 1);
      expect(req.itemName).toBe('Dragon bones');
      expect(req.quantity).toBe(1);
      expect(req.type).toBe(RequirementType.Item);
    });

    it('should create item requirement with notation option', () => {
      const req = new ItemRequirement('Dragon bones', 5, { noted: true });
      expect(req.itemName).toBe('Dragon bones');
      expect(req.quantity).toBe(5);
      expect(req.noted).toBe(true);
    });

    it('should have correct notation in description', () => {
      const notedReq = new ItemRequirement('Coins', 1000, { noted: true });
      expect(notedReq.description).toContain('noted');

      const unnoted = new ItemRequirement('Coins', 1000, { noted: false });
      expect(unnoted.description).not.toContain('noted');
    });

    it('should format quantity in description', () => {
      const single = new ItemRequirement('Sword', 1);
      expect(single.description).toContain('1');

      const multiple = new ItemRequirement('Sword', 5);
      expect(multiple.description).toContain('5');
    });

    it('should support items with special characters', () => {
      const req = new ItemRequirement("Fremennik's Shield", 1);
      expect(req.itemName).toBe("Fremennik's Shield");
    });

    it('should support large quantities', () => {
      const req = new ItemRequirement('Coins', 1000000);
      expect(req.quantity).toBe(1000000);
    });

    it('should include optional description suffixes', () => {
      const req = new ItemRequirement('Stamina potion', 2, {
        consumed: false,
        alternatives: ['Energy potion', 'Super energy'],
        noted: true,
        notes: 'for agility shortcut',
      });

      expect(req.description).toContain('(noted)');
      expect(req.description).toContain('(not consumed)');
      expect(req.description).toContain('(or Energy potion or Super energy)');
      expect(req.description).toContain('(for agility shortcut)');
    });

    it('should default consumed to true when omitted', () => {
      const req = new ItemRequirement('Spade', 1);
      expect(req.consumed).toBe(true);
      expect(req.description).not.toContain('not consumed');
    });
  });

  describe('SlayerLevelRequirement - Require minimum slayer level', () => {
    it('should create slayer level requirement', () => {
      const req = new SlayerLevelRequirement(90);
      expect(req.level).toBe(90);
      expect(req.type).toBe(RequirementType.SlayerLevel);
    });

    it('should have descriptive text', () => {
      const req = new SlayerLevelRequirement(85);
      expect(req.description).toContain('85');
      expect(req.description.toLowerCase()).toContain('slayer');
    });

    it('should support minimum level 1', () => {
      const req = new SlayerLevelRequirement(1);
      expect(req.level).toBe(1);
    });

    it('should support maximum level 99', () => {
      const req = new SlayerLevelRequirement(99);
      expect(req.level).toBe(99);
    });

    it('should support various slayer levels', () => {
      const levels = [10, 20, 40, 60, 75, 85, 99];
      for (const level of levels) {
        const req = new SlayerLevelRequirement(level);
        expect(req.level).toBe(level);
      }
    });
  });

  describe('CombatLevelRequirement - Require minimum combat level', () => {
    it('should create combat level requirement', () => {
      const req = new CombatLevelRequirement(75);
      expect(req.level).toBe(75);
      expect(req.type).toBe(RequirementType.CombatLevel);
    });

    it('should have descriptive text', () => {
      const req = new CombatLevelRequirement(40);
      expect(req.description).toContain('40');
      expect(req.description.toLowerCase()).toContain('combat');
    });

    it('should support level 1 (minimum)', () => {
      const req = new CombatLevelRequirement(1);
      expect(req.level).toBe(1);
    });

    it('should support level 138 (maximum)', () => {
      const req = new CombatLevelRequirement(138);
      expect(req.level).toBe(138);
    });

    it('should support various combat levels', () => {
      const levels = [10, 20, 40, 60, 75, 99, 120, 138];
      for (const level of levels) {
        const req = new CombatLevelRequirement(level);
        expect(req.level).toBe(level);
      }
    });
  });

  describe('QuestPointRequirement - Require minimum quest points', () => {
    it('should create quest point requirement', () => {
      const req = new QuestPointRequirement(135);
      expect(req.amount).toBe(135);
      expect(req.type).toBe(RequirementType.QuestPoint);
    });

    it('should have descriptive text', () => {
      const req = new QuestPointRequirement(50);
      expect(req.description).toContain('50');
      expect(req.description.toLowerCase()).toContain('quest');
    });

    it('should support 0 quest points', () => {
      const req = new QuestPointRequirement(0);
      expect(req.amount).toBe(0);
    });

    it('should support maximum 280 quest points', () => {
      const req = new QuestPointRequirement(280);
      expect(req.amount).toBe(280);
    });

    it('should support various quest point amounts', () => {
      const amounts = [0, 50, 100, 135, 200, 280];
      for (const amount of amounts) {
        const req = new QuestPointRequirement(amount);
        expect(req.amount).toBe(amount);
      }
    });
  });

  describe('SlayerUnlockRequirement - Require slayer unlock', () => {
    it('should create slayer unlock requirement', () => {
      const req = new SlayerUnlockRequirement('Slug Salter');
      expect(req.name).toBe('Slug Salter');
      expect(req.type).toBe(RequirementType.SlayerUnlock);
    });

    it('should have descriptive text', () => {
      const req = new SlayerUnlockRequirement('Demon');
      expect(req.description).toContain('Demon');
      expect(req.description.toLowerCase()).toContain('unlock');
    });

    it('should support common slayer unlocks', () => {
      const unlocks = ['Slug Salter', 'Demon', 'Dragon', 'Wyvern', 'Kraken'];
      for (const unlock of unlocks) {
        const req = new SlayerUnlockRequirement(unlock);
        expect(req.name).toBe(unlock);
      }
    });

    it('should support unlocks with special characters', () => {
      const req = new SlayerUnlockRequirement("Hydra's Labyrinth");
      expect(req.name).toBe("Hydra's Labyrinth");
    });
  });

  describe('LocationRequirement - Require access to location', () => {
    it('should create location requirement', () => {
      const req = new LocationRequirement('Yanille');
      expect(req.type).toBe(RequirementType.Location);
    });

    it('should have descriptive text', () => {
      const req = new LocationRequirement('Grand Exchange');
      expect(req.description).toContain('Grand Exchange');
      expect(req.description.toLowerCase()).toContain('location');
    });

    it('should support common OSRS locations', () => {
      const locations = ['Yanille', 'Lumbridge', 'Varrock', 'Falador', 'Grand Exchange'];
      for (const location of locations) {
        const req = new LocationRequirement(location);
        expect(req.type).toBe(RequirementType.Location);
      }
    });

    it('should support locations with special characters', () => {
      const req = new LocationRequirement("Seers' Village");
      expect(req.description).toContain("Seers' Village");
    });
  });

  describe('Requirement type enum', () => {
    it('should have all requirement types defined', () => {
      expect(RequirementType.Quest).toBeDefined();
      expect(RequirementType.Item).toBeDefined();
      expect(RequirementType.SlayerLevel).toBeDefined();
      expect(RequirementType.CombatLevel).toBeDefined();
      expect(RequirementType.QuestPoint).toBeDefined();
      expect(RequirementType.SlayerUnlock).toBeDefined();
      expect(RequirementType.Location).toBeDefined();
    });
  });

  describe('Requirement composition - Using multiple requirements together', () => {
    it('should create multiple requirements for a quest', () => {
      const questReq = new QuestRequirement('Monkey Madness');
      const combatReq = new CombatLevelRequirement(57);
      const itemReq = new ItemRequirement('Karamja Gloves', 1);

      expect(questReq.type).toBe(RequirementType.Quest);
      expect(combatReq.type).toBe(RequirementType.CombatLevel);
      expect(itemReq.type).toBe(RequirementType.Item);

      const requirements = [questReq, combatReq, itemReq];
      expect(requirements.length).toBe(3);
    });
  });

  describe('Edge cases', () => {
    it('should handle item requirement with 0 quantity', () => {
      const req = new ItemRequirement('Item', 0);
      expect(req.quantity).toBe(0);
    });

    it('should handle very long item names', () => {
      const longName = 'Extremely Long Item Name With Many Words And Special Characters!!';
      const req = new ItemRequirement(longName, 1);
      expect(req.itemName).toBe(longName);
    });

    it('should handle quest names with numbers', () => {
      const req = new QuestRequirement('Dragon Slayer II');
      expect(req.questName).toContain('II');
    });

    it('should handle various numeric values', () => {
      const itemReq1 = new ItemRequirement('Item', 1);
      const itemReq2 = new ItemRequirement('Item', 999999);
      expect(itemReq1.quantity).toBeLessThan(itemReq2.quantity);
    });
  });
});

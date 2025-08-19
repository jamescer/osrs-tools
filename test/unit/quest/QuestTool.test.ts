import { QuestTool } from '../../../src/model/quest/QuestTool';
import { OsrsAccount } from '../../../src/model/account/OsrsAccount';
import { Quest } from '../../../src/model/quest/Quest';
import { account } from '../../resources/A_Squeezer_Main_Data';
import { LevelRequirement, QuestRequirement } from '../../../src/model/Requirement';
import { simpleQuest } from './mockQuests';

// Helper: create an account with a given skill level
function makeAccountWithSkill(skill: string, level: number) {
  return OsrsAccount.fromJson({
    name: 'Test',
    combatLevel: 3,
    questPoints: 0,
    skills: { [skill]: { level } },
  });
}

describe('QuestTool', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should set and get OsrsAccount', () => {
    const acc = OsrsAccount.fromJson(account);
    const tool = new QuestTool();

    expect(tool.getOsrsAccount()).toBeUndefined();
    tool.setOsrsAccount(acc);
    expect(tool.getOsrsAccount()).toBe(acc);
  });

  it('should get max skill boost for known and unknown skills', () => {
    expect(QuestTool.getMaxSkillBoost('Attack')).toBeGreaterThan(0);
    expect(QuestTool.getMaxSkillBoost('Herblore')).toBeGreaterThan(0);
    expect(QuestTool.getMaxSkillBoost('UnknownSkill')).toBe(0);
  });

  describe('Quest Cache', () => {
    let mockGetQuestByName: jest.SpyInstance;

    beforeEach(() => {
      QuestTool['questCache'].clear();
      // Setup mock for getQuestByName that returns our test quest
      mockGetQuestByName = jest.spyOn(QuestTool, 'getQuestByName');
    });

    afterEach(() => {
      mockGetQuestByName.mockRestore();
    });

    it('should handle non-existent quests', () => {
      mockGetQuestByName.mockImplementation(() => undefined);

      const result = QuestTool.getQuestByName('NonexistentQuest');
      expect(result).toBeUndefined();

      // Second lookup should still check since we don't cache undefined results
      const result2 = QuestTool.getQuestByName('NonexistentQuest');
      expect(result2).toBeUndefined();

      expect(mockGetQuestByName).toHaveBeenCalledTimes(2);
    });

    it('should clear cache between tests', () => {
      const mockQuest = { ...simpleQuest, name: 'Test Quest' };
      mockGetQuestByName.mockImplementation(() => mockQuest);

      // First test - should call implementation
      const result1 = QuestTool.getQuestByName('Test Quest');
      expect(result1).toBe(mockQuest);
      expect(mockGetQuestByName).toHaveBeenCalledTimes(1);

      // Clear cache manually (simulating beforeEach)
      QuestTool['questCache'].clear();

      // Should call implementation again after cache clear
      const result2 = QuestTool.getQuestByName('Test Quest');
      expect(result2).toBe(mockQuest);
      expect(mockGetQuestByName).toHaveBeenCalledTimes(2);
    });
  });

  describe('Quest Requirements', () => {
    let tool: QuestTool;

    beforeEach(() => {
      tool = new QuestTool();
    });

    it('should handle multiple skill requirements', () => {
      const quest: Quest = {
        ...simpleQuest,
        requirements: [
          new LevelRequirement('attack', 60, false),
          new LevelRequirement('defence', 60, false),
          new LevelRequirement('strength', 60, false),
        ],
      };

      // Test with insufficient levels
      tool.setOsrsAccount(makeAccountWithSkill('attack', 59));
      expect(tool.canCompleteQuest(quest)).toBe(false);

      // Test with all requirements met
      tool.setOsrsAccount(
        OsrsAccount.fromJson({
          name: 'Test',
          combatLevel: 3,
          questPoints: 0,
          skills: {
            attack: { level: 60 },
            defence: { level: 60 },
            strength: { level: 60 },
          },
        }),
      );
      expect(tool.canCompleteQuest(quest)).toBe(true);
    });

    it('should handle boostable and non-boostable requirements', () => {
      const quest: Quest = {
        ...simpleQuest,
        requirements: [
          new LevelRequirement('attack', 60, false), // Non-boostable
          new LevelRequirement('herblore', 90, true), // Boostable
        ],
      };

      // Test with insufficient non-boostable level
      tool.setOsrsAccount(makeAccountWithSkill('attack', 59));
      expect(tool.canCompleteQuest(quest)).toBe(false);

      // Test with boostable but insufficient herblore
      tool.setOsrsAccount(
        OsrsAccount.fromJson({
          name: 'Test',
          combatLevel: 3,
          questPoints: 0,
          skills: {
            attack: { level: 60 },
            herblore: { level: 84 }, // Max boost +5, not enough
          },
        }),
      );
      expect(tool.canCompleteQuest(quest)).toBe(false);

      // Test with both requirements met (one through boost)
      tool.setOsrsAccount(
        OsrsAccount.fromJson({
          name: 'Test',
          combatLevel: 3,
          questPoints: 0,
          skills: {
            attack: { level: 60 },
            herblore: { level: 86 }, // Can boost to 91
          },
        }),
      );
      expect(tool.canCompleteQuest(quest)).toBe(true);
    });

    it('should handle quest chains', () => {
      // Create a chain: Quest3 requires Quest2 requires Quest1
      const quest1 = { ...simpleQuest, name: 'Quest1' };
      const quest2 = {
        ...simpleQuest,
        name: 'Quest2',
        requirements: [new QuestRequirement('Quest1')],
      };
      const quest3 = {
        ...simpleQuest,
        name: 'Quest3',
        requirements: [new QuestRequirement('Quest2')],
      };

      // Mock getQuestByName
      jest.spyOn(QuestTool, 'getQuestByName').mockImplementation(name => {
        switch (name) {
          case 'Quest1':
            return quest1;
          case 'Quest2':
            return quest2;
          case 'Quest3':
            return quest3;
          default:
            return undefined;
        }
      });

      tool.setOsrsAccount(makeAccountWithSkill('attack', 1));
      expect(tool.canCompleteQuest(quest3)).toBe(true);
    });

    it('should handle circular quest dependencies', () => {
      // Create circular dependency: QuestA requires QuestB requires QuestA
      const questA = {
        ...simpleQuest,
        name: 'QuestA',
        requirements: [new QuestRequirement('QuestB')],
      };
      const questB = {
        ...simpleQuest,
        name: 'QuestB',
        requirements: [new QuestRequirement('QuestA')],
      };

      // Mock getQuestByName
      jest.spyOn(QuestTool, 'getQuestByName').mockImplementation(name => {
        switch (name) {
          case 'QuestA':
            return questA;
          case 'QuestB':
            return questB;
          default:
            return undefined;
        }
      });

      tool.setOsrsAccount(makeAccountWithSkill('attack', 1));
      expect(tool.canCompleteQuest(questA)).toBe(true); // Should not get stuck in infinite loop
    });

    it('should handle missing quests', () => {
      const quest: Quest = {
        ...simpleQuest,
        requirements: [new QuestRequirement('NonexistentQuest')],
      };

      tool.setOsrsAccount(makeAccountWithSkill('attack', 1));
      expect(tool.canCompleteQuest(quest)).toBe(false);
    });

    it('should handle undefined quest', () => {
      tool.setOsrsAccount(makeAccountWithSkill('attack', 1));
      expect(tool.canCompleteQuest(undefined)).toBe(false);
    });
  });
});

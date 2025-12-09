import { QuestDifficulty, QuestLength } from '../../../src/model/quest/enums';
import {
  createItemRequirement,
  createLevelRequirement,
  createQuestPointRequirement,
  createQuestRequirement,
  RequirementType,
} from '../../../src/model/quest/requirements';
import { Quest, QuestStatus } from '../../../src/model/quest/types';

describe('Quest Types and Requirements', () => {
  describe('Requirements', () => {
    it('should create level requirements correctly', () => {
      const req = createLevelRequirement('Mining', 55, true);
      expect(req).toEqual({
        boostable: true,
        description: '55 Mining',
        level: 55,
        skillName: 'Mining',
        type: RequirementType.Level,
      });
    });

    it('should create quest requirements correctly', () => {
      const req = createQuestRequirement('Dragon Slayer');
      expect(req).toEqual({
        description: 'Completion of Dragon Slayer',
        questName: 'Dragon Slayer',
        type: RequirementType.Quest,
      });
    });

    it('should create quest point requirements correctly', () => {
      const req = createQuestPointRequirement(32);
      expect(req).toEqual({
        description: '32 Quest Points',
        points: 32,
        type: RequirementType.QuestPoint,
      });
    });

    it('should create item requirements correctly', () => {
      const req = createItemRequirement('Dragon bones', 3, true);
      expect(req).toEqual({
        consumed: true,
        description: '3x Dragon bones (consumed)',
        itemName: 'Dragon bones',
        quantity: 3,
        type: RequirementType.Item,
      });
    });

    it('should handle optional item requirement parameters', () => {
      const req = createItemRequirement('Tinderbox');
      expect(req).toEqual({
        consumed: false,
        description: '1x Tinderbox',
        itemName: 'Tinderbox',
        quantity: 1,
        type: RequirementType.Item,
      });
    });
  });

  describe('Quest Interface', () => {
    it('should validate a complete quest object', () => {
      const quest: Quest = {
        age: 'Fifth Age',
        description: 'Help the cook make a cake.',
        difficulty: QuestDifficulty.Novice,
        id: 1,
        length: QuestLength.Short,
        members: false,
        miniquest: false,
        name: "Cook's Assistant",
        questPoints: 1,
        recommendations: [],
        recommendedPrayers: [],
        recommendedSkills: {},
        requirements: [],
        rewards: {
          areas: [],
          experience: [{ amount: 300, skill: 'Cooking' }],
          items: [],
          lamps: [],
          pets: [],
          points: [],
          questPoints: 1,
          unlocks: [{ description: 'Access to the kitchen' }],
        },
        series: null,
        shortName: 'cooksAssistant',
        startLocation: 'Lumbridge Castle Kitchen',
        status: QuestStatus.NotStarted,
        steps: [
          'Talk to the cook in Lumbridge Castle kitchen.',
          'Get an egg from the farm north of Lumbridge.',
          'Get a bucket of milk from a dairy cow.',
          'Get a pot of flour from the mill north of Lumbridge.',
          'Return all ingredients to the cook.',
        ],
        url: 'https://oldschool.runescape.wiki/w/Cook%27s_Assistant',
      };

      // Just checking that it compiles - TypeScript would catch type errors
      expect(quest.name).toBe("Cook's Assistant");
      expect(quest.difficulty).toBe(QuestDifficulty.Novice);
      expect(quest.rewards.experience?.[0].amount).toBe(300);
    });
  });
});

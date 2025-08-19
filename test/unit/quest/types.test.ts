import { Quest, QuestStatus } from '../../../src/model/quest/types';
import { QuestDifficulty, QuestLength } from '../../../src/model/quest/enums';
import {
  RequirementType,
  createLevelRequirement,
  createQuestRequirement,
  createQuestPointRequirement,
  createItemRequirement,
} from '../../../src/model/quest/requirements';

describe('Quest Types and Requirements', () => {
  describe('Requirements', () => {
    it('should create level requirements correctly', () => {
      const req = createLevelRequirement('Mining', 55, true);
      expect(req).toEqual({
        type: RequirementType.Level,
        skillName: 'Mining',
        level: 55,
        boostable: true,
        description: '55 Mining',
      });
    });

    it('should create quest requirements correctly', () => {
      const req = createQuestRequirement('Dragon Slayer');
      expect(req).toEqual({
        type: RequirementType.Quest,
        questName: 'Dragon Slayer',
        description: 'Completion of Dragon Slayer',
      });
    });

    it('should create quest point requirements correctly', () => {
      const req = createQuestPointRequirement(32);
      expect(req).toEqual({
        type: RequirementType.QuestPoint,
        points: 32,
        description: '32 Quest Points',
      });
    });

    it('should create item requirements correctly', () => {
      const req = createItemRequirement('Dragon bones', 3, true);
      expect(req).toEqual({
        type: RequirementType.Item,
        itemName: 'Dragon bones',
        quantity: 3,
        consumed: true,
        description: '3x Dragon bones (consumed)',
      });
    });

    it('should handle optional item requirement parameters', () => {
      const req = createItemRequirement('Tinderbox');
      expect(req).toEqual({
        type: RequirementType.Item,
        itemName: 'Tinderbox',
        quantity: 1,
        consumed: false,
        description: '1x Tinderbox',
      });
    });
  });

  describe('Quest Interface', () => {
    it('should validate a complete quest object', () => {
      const quest: Quest = {
        id: 1,
        name: "Cook's Assistant",
        description: 'Help the cook make a cake.',
        difficulty: QuestDifficulty.Novice,
        length: QuestLength.Short,
        steps: [
          'Talk to the cook in Lumbridge Castle kitchen.',
          'Get an egg from the farm north of Lumbridge.',
          'Get a bucket of milk from a dairy cow.',
          'Get a pot of flour from the mill north of Lumbridge.',
          'Return all ingredients to the cook.',
        ],
        requirements: [],
        status: QuestStatus.NotStarted,
        miniquest: false,
        shortName: 'cooksAssistant',
        url: 'https://oldschool.runescape.wiki/w/Cook%27s_Assistant',
        series: null,
        members: false,
        questPoints: 1,
        age: 'Fifth Age',
        startLocation: 'Lumbridge Castle Kitchen',

        recommendedItems: ['None'],
        recommendedSkills: {},
        recommendedPrayers: [],
        rewards: {
          experience: [{ skill: 'Cooking', amount: 300 }],
          questPoints: 1,
          items: [],
          areas: [],
          unlocks: [{ description: 'Access to the kitchen' }],
          lamps: [],
          points: [],
          pets: [],
        },
      };

      // Just checking that it compiles - TypeScript would catch type errors
      expect(quest.name).toBe("Cook's Assistant");
      expect(quest.difficulty).toBe(QuestDifficulty.Novice);
      expect(quest.rewards.experience?.[0].amount).toBe(300);
    });
  });
});

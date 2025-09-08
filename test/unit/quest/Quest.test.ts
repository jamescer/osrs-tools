import { Quest, QuestStatus } from '../../../src/model/quest/Quest';
import { QuestDifficulty, QuestLength } from '../../../src/model/quest/enums';
import { ItemRequirement, LevelRequirement } from '../../../src/model/Requirement';

describe('Quest Rewards Structure', () => {
  it('should support the new QuestRewards experience array structure', () => {
    const quest: Quest = {
      age: 'Fifth Age',
      difficulty: QuestDifficulty.Novice,

      id: 1,
      requirements: [
        new ItemRequirement('Bucket of milk'),
        new ItemRequirement('Pot of flour'),
        new ItemRequirement('Egg'),
        new LevelRequirement('cooking', 10, true),
      ],
      length: QuestLength.Short,
      members: false,
      miniquest: false,
      name: "Cook's Assistant",

      questPoints: 1,
      recommendations: [],
      recommendedPrayers: ['None'],
      recommendedSkills: { cooking: 10 },
      rewards: {
        experience: [
          { skill: 'cooking', amount: 300 },
          { skill: 'fishing', amount: 100 },
        ],
        questPoints: 1,
        items: [{ name: 'Quest point' }],
        areas: ['Lumbridge'],
        unlocks: [{ description: 'Access to the kitchen' }],
        lamps: [],
        points: [],
        pets: [],
      },
      series: 'None',
      shortName: 'cooks_assistant',
      startLocation: 'Lumbridge Castle',
      status: QuestStatus.NotStarted,
      steps: [],
      description: 'Help the cook in Lumbridge Castle to make a cake.',
      url: 'http://example.com/cooks_assistant',
    };
    expect(Array.isArray(quest.rewards.experience)).toBe(true);
    expect(quest.rewards.experience?.length).toBe(2);
    expect(quest.rewards.experience?.[0]).toEqual({
      skill: 'cooking',
      amount: 300,
    });
    expect(quest.rewards.experience?.[1]).toEqual({
      skill: 'fishing',
      amount: 100,
    });
    expect(quest.rewards.unlocks?.[0].description).toBe('Access to the kitchen');
    expect(quest.rewards.lamps).toEqual([]);
    expect(quest.rewards.points).toEqual([]);
    expect(quest.rewards.pets).toEqual([]);
  });

  it('should allow empty experience array and all reward fields present', () => {
    const quest: Quest = {
      age: 'Fifth Age',
      difficulty: QuestDifficulty.Novice,
      id: 1,
      requirements: [
        new ItemRequirement('Bucket of milk'),
        new ItemRequirement('Pot of flour'),
        new ItemRequirement('Egg'),
        new LevelRequirement('cooking', 10, true),
      ],
      length: QuestLength.Short,
      members: false,
      miniquest: false,
      name: "Cook's Assistant",
      questPoints: 1,
      recommendations: [],
      recommendedPrayers: ['None'],
      recommendedSkills: { cooking: 10 },
      rewards: {
        experience: [],
        questPoints: 1,
        items: [],
        areas: [],
        unlocks: [],
        lamps: [],
        points: [],
        pets: [],
      },
      series: 'None',
      shortName: 'cooks_assistant',
      startLocation: 'Lumbridge Castle',
      status: QuestStatus.NotStarted,
      steps: [],
      description: 'Help the cook in Lumbridge Castle to make a cake.',
      url: 'http://example.com/cooks_assistant',
    };
    expect(Array.isArray(quest.rewards.experience)).toBe(true);
    expect(quest.rewards.experience).toHaveLength(0);
    expect(quest.rewards.items).toEqual([]);
    expect(quest.rewards.areas).toEqual([]);
    expect(quest.rewards.unlocks).toEqual([]);
    expect(quest.rewards.lamps).toEqual([]);
    expect(quest.rewards.points).toEqual([]);
    expect(quest.rewards.pets).toEqual([]);
  });
});

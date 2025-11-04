import { QuestDifficulty, QuestLength } from '../../../src/model/quest/enums';
import { Quest, QuestStatus } from '../../../src/model/quest/Quest';
import { ItemRequirement, LevelRequirement } from '../../../src/model/Requirement';

describe('Quest Rewards Structure', () => {
  it('should support the new QuestRewards experience array structure', () => {
    const quest: Quest = {
      age: 'Fifth Age',
      difficulty: QuestDifficulty.Novice,

      id: 1,
      length: QuestLength.Short,
      members: false,
      miniquest: false,
      name: "Cook's Assistant",
      questPoints: 1,

      description: 'Help the cook in Lumbridge Castle to make a cake.',
      recommendations: [],
      recommendedPrayers: ['None'],
      recommendedSkills: { cooking: 10 },
      requirements: [
        new ItemRequirement('Bucket of milk'),
        new ItemRequirement('Pot of flour'),
        new ItemRequirement('Egg'),
        new LevelRequirement('cooking', 10, true),
      ],
      rewards: {
        areas: ['Lumbridge'],
        experience: [
          { amount: 300, skill: 'cooking' },
          { amount: 100, skill: 'fishing' },
        ],
        items: [{ name: 'Quest point' }],
        lamps: [],
        pets: [],
        points: [],
        questPoints: 1,
        unlocks: [{ description: 'Access to the kitchen' }],
      },
      series: 'None',
      shortName: 'cooks_assistant',
      startLocation: 'Lumbridge Castle',
      status: QuestStatus.NotStarted,
      steps: [],
      url: 'http://example.com/cooks_assistant',
    };
    expect(Array.isArray(quest.rewards.experience)).toBe(true);
    expect(quest.rewards.experience?.length).toBe(2);
    expect(quest.rewards.experience?.[0]).toEqual({
      amount: 300,
      skill: 'cooking',
    });
    expect(quest.rewards.experience?.[1]).toEqual({
      amount: 100,
      skill: 'fishing',
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
      length: QuestLength.Short,
      members: false,
      miniquest: false,
      name: "Cook's Assistant",
      questPoints: 1,
      description: 'Help the cook in Lumbridge Castle to make a cake.',
      recommendations: [],
      recommendedPrayers: ['None'],
      recommendedSkills: { cooking: 10 },
      requirements: [
        new ItemRequirement('Bucket of milk'),
        new ItemRequirement('Pot of flour'),
        new ItemRequirement('Egg'),
        new LevelRequirement('cooking', 10, true),
      ],
      rewards: {
        areas: [],
        experience: [],
        items: [],
        lamps: [],
        pets: [],
        points: [],
        questPoints: 1,
        unlocks: [],
      },
      series: 'None',
      shortName: 'cooks_assistant',
      startLocation: 'Lumbridge Castle',
      status: QuestStatus.NotStarted,
      steps: [],
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

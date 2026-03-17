import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const UndergroundPass: Quest = {
  age: 'Fifth Age',
  description: 'Travel through a dangerous underground passage to reach the land of the elves, avoiding traps and dark magic.',
  difficulty: QuestDifficulty.Experienced,
  id: 0,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: 'Underground Pass',
  questPoints: 2,
  recommendations: [
    { name: 'Small key', note: 'Found during quest', type: 'item' },
    { name: 'Food', note: 'High healing recommended', type: 'item' },
    { name: 'Damage gear', note: 'Multiple combat sections', type: 'item' },
  ],
  recommendedPrayers: [],
  recommendedSkills: { Ranged: 25, Agility: 25 },
  requirements: [new QuestRequirement('Biohazard'), new LevelRequirement('Ranged', 25, false)],
  rewards: {
    areas: ['Elf lands access'],
    experience: [
      { amount: 3000, skill: Skill.Agility },
      { amount: 13000, skill: Skill.Ranged },
      { amount: 40, skill: Skill.Magic },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [
      {
        description: 'Access to Elf lands and subsequent elf quests',
        url: 'https://oldschool.runescape.wiki/w/Elf',
      },
      {
        description: 'Ability to travel between human and elf lands',
      },
    ],
  },
  series: 'Elf',
  shortName: 'undergroundPass',

  startLocation: 'Iorwerth Camp, east of Ardougne',
  status: QuestStatus.NotStarted,
  steps: [
    'Travel to the entrance of the Underground Pass near the Iorwerth Camp.',
    'Enter the pass and navigate through treacherous tunnels.',
    'Solve puzzles and avoid falling rocks and traps.',
    'Fight enemies guarding key passages.',
    'Progress deeper into the pass.',
    'Reach the end and break a seal blocking elf lands.',
    'Return to Ardougne to complete the quest.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Underground_Pass',
};

export default UndergroundPass;

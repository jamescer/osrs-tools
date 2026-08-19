import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const UndergroundPass: Quest = {
  age: 'Fifth Age',
  description:
    'Travel through a dangerous underground passage to reach the land of the elves, avoiding traps and dark magic.',
  difficulty: QuestDifficulty.Experienced,
  id: 130,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: 'Underground Pass',
  questPoints: 5,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Biohazard'),
    new QuestRequirement('Plague City'),
    new LevelRequirement(Skill.Ranged, 25, true),
  ],
  rewards: {
    areas: [],
    experience: [
      { amount: 3000, skill: Skill.Agility },
      { amount: 3000, skill: Skill.Attack },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 5,
    unlocks: [],
  },
  series: 'Elf',
  shortName: 'undergroundPass',

  startLocation: 'King Lathas, Ardougne Castle',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Underground_Pass',
};

export default UndergroundPass;

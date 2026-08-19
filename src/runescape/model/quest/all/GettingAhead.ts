import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const GettingAhead: Quest = {
  age: 'Fifth Age',
  description: 'Help Gordon the farmer protect his sheep farm from a headless beast roaming the northern fields.',
  difficulty: QuestDifficulty.Novice,
  id: 49,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Getting Ahead',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new LevelRequirement(Skill.Construction, 26, false),
    new LevelRequirement(Skill.Crafting, 30, false),
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
  series: 'Twisted Tales',
  shortName: 'gettingAhead',

  startLocation: 'Gordon, north of Camelot',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Getting_Ahead',
};

export default GettingAhead;

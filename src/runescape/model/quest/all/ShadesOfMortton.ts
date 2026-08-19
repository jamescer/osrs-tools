import { Skill } from '../../account/Skill';
import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const ShadesOfMortton: Quest = {
  age: 'Fifth Age',
  description: 'Help restore the ruined village of Mort\'ton by crafting Serum 207 and rebuilding the shades\' sacred temple.',
  
  difficulty: QuestDifficulty.Novice,
  id: 94,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: "Shades of Mort'ton",
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [new LevelRequirement(Skill.Crafting, 20, false), new LevelRequirement(Skill.Herblore, 15, false)],
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
  series: null,
  shortName: 'shadesOfMortton',

  startLocation: "Shade relic, Mort'ton",
  status: QuestStatus.NotStarted,
  steps: [],
  url: "https://oldschool.runescape.wiki/w/Shades_of_Mort'ton",
};

export default ShadesOfMortton;

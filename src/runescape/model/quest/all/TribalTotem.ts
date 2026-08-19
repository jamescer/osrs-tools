import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength, QuestStatus } from '../enums';
import { Quest } from '../Quest';

const TribalTotem: Quest = {
  age: 'Fifth Age',
  description: "Lord Handelmort of Ardougne has acquired a sacred totem belonging to Karamja's Rantuki tribe. Help Kangai Mau reclaim it.",
  difficulty: QuestDifficulty.Intermediate,
  id: 126,
  length: QuestLength.VeryShort,
  members: true,
  miniquest: false,
  name: 'Tribal Totem',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new LevelRequirement(Skill.Thieving, 21, true),
  ],
  rewards: {
    areas: [],
    experience: [{ amount: 1775, skill: Skill.Thieving }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: null,
  shortName: 'tribalTotem',

  startLocation: 'Kangai Mau, The Shrimp and Parrot restaurant, Brimhaven',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Tribal_Totem',
};

export default TribalTotem;

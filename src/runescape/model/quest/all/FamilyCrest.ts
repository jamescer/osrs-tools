import { Skill } from '../../account/Skill';
import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

// wiki url https://oldschool.runescape.wiki/w/Family_Crest
const FamilyCrest: Quest = {
  age: 'Fifth Age',
  description:
    'The Armours family has fallen on hard times. Gilandor Armours, the patriarch of this noble family, has grown old and is dying. His three sons have not inherited his competence. You must help the youngest son of the Armours family create the family crest so that it can be passed on with pride.',

  difficulty: QuestDifficulty.Intermediate,

  id: 43,

  length: QuestLength.Long,

  members: true,

  miniquest: false,

  name: 'Family Crest',
  questPoints: 3,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {
    Crafting: 40,
    Magic: 59,
    Mining: 40,
    Smithing: 40,
  },
  requirements: [
    new LevelRequirement(Skill.Crafting, 20),
    new LevelRequirement(Skill.Magic, 59),
    new LevelRequirement(Skill.Mining, 20),
    new LevelRequirement(Skill.Smithing, 20),
  ],
  rewards: {
    areas: [],
    experience: [
      { amount: 7500, skill: Skill.Crafting },
      { amount: 7500, skill: Skill.Smithing },
      { amount: 7500, skill: Skill.Magic },
      { amount: 7500, skill: Skill.Mining },
    ],
    items: [
      { id: 2417, name: 'Gilded Coif', quantity: 1 },
      { id: 2415, name: 'Gilded Body', quantity: 1 },
      { id: 2416, name: 'Gilded Platelegs', quantity: 1 },
    ],
    lamps: [],
    pets: [],
    points: [{ amount: 2500, type: 'Quest' }],
    questPoints: 3,
    unlocks: [],
  },
  series: null,
  shortName: 'familyCrest',

  startLocation: 'East Ardougne, Armours house',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Family_Crest',
};

export default FamilyCrest;

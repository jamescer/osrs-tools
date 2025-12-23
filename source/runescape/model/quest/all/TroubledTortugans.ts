import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

/**
 * Details
Start point	Map icon Talk to Floopa, an Injured Tortugan, on a Remote Island in the Unquiet Ocean. Show on map
Official difficulty	Experienced
Official length	Medium
Description	Help a stranded tortugan and gain access to the Great Conch.
Requirements
a_squeezer

Slayer 51 Slayer [not boostable][required to start]
Construction 48 Construction [not boostable][required to start]
Sailing 45 Sailing [not boostable][required to start]
Hunter 45 Hunter [not boostable][required to start]
Woodcutting 40 Woodcutting [required to start]
Crafting 34 Crafting [required to start]
Completion of Pandemonium
Items required
Any axe (a bronze axe can be found during the quest, but bringing a better one is recommended for cutting 10 logs)
Hammer (can be found during the quest)
Saw (can be found during the quest)
[uncheck all]
Recommended
At least 4 free inventory spaces (or up to 22 for all the construction materials at once)
Combat level 60 Combat level
Food and combat gear
Stamina Potion
[uncheck all]
Enemies to defeat
Gryphon (level 95)
Shellbane gryphon (level 235)
 */

// Reference see: https://oldschool.runescape.wiki/w/Troubled_Tortugans
const TroubledTortugans = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Experienced,
  id: 177,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Troubled Tortugans',
  questPoints: 2,
  recommendations: [
    'At least 4 free inventory spaces (or up to 22 for all the construction materials at once)',
    'Combat level 60 Combat level',
    'Food and combat gear',
    'Stamina Potion',
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Pandemonium'),
    new LevelRequirement(Skill.Construction, 48, false),
    new LevelRequirement(Skill.Sailing, 45, false),
    new LevelRequirement(Skill.Hunter, 45, false),
    new LevelRequirement(Skill.Woodcutting, 40, false),
    new LevelRequirement(Skill.Crafting, 34, false),
    new LevelRequirement(Skill.Slayer, 51, false),
  ],
  rewards: {
    areas: ['Access to the Great Conch'],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: ['Great Conch'],
  },
  series: 'Tortuga',
  shortName: 'troubledTortugans',
  startLocation: 'Talk to Floopa, an Injured Tortugan, on a Remote Island in the Unquiet Ocean.',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Troubled_Tortugans',
};

export default TroubledTortugans;

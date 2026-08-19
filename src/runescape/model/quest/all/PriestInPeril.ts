import { Skill } from '../../account/Skill';
import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const PriestInPeril: Quest = {
  age: 'Fifth Age',
  description: 'Rescue a priest who has been trapped in a cursed temple by dark forces.',
  difficulty: QuestDifficulty.Novice,
  id: 81,
  length: QuestLength.Medium,
  members: false,
  miniquest: false,
  name: 'Priest in Peril',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [new QuestRequirement('Rune Mysteries')],
  rewards: {
    areas: [],
    experience: [{ amount: 1125, skill: Skill.Prayer }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [
      {
        description: 'Access to the Underground Pass',
        url: 'https://oldschool.runescape.wiki/w/Underground_Pass',
      },
    ],
  },
  series: null,
  shortName: 'priestInPeril',

  startLocation: 'Morytania, near the entrance to the temple',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Priest_in_Peril',
};

export default PriestInPeril;

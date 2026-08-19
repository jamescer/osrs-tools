import { Skill } from '../../account/Skill';
import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const EnterTheAbyss: Quest = {
  age: 'Fifth Age',
  description:
    'Help a Zamorakian mage infiltrate the Wizards\' Tower to spy on the Runecrafting Guild. In return, gain access to the Abyss for runecrafting.',
  difficulty: QuestDifficulty.Novice,
  id: 206,
  length: QuestLength.VeryShort,
  members: true,
  miniquest: true,
  name: 'Enter the Abyss',
  questPoints: 0,
  recommendations: [
    { name: 'Pure essence', quantity: 1, type: 'item', note: 'To give to the Mage of Zamorak' },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [new QuestRequirement('Rune Mysteries')],
  rewards: {
    areas: ['The Abyss'],
    experience: [{ amount: 1000, skill: Skill.Runecraft }],
    items: [{ name: 'Abyssal bracelet', quantity: 1 }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 0,
    unlocks: [
      { description: 'Access to the Abyss, allowing entry to any runecrafting altar without a talisman', url: 'https://oldschool.runescape.wiki/w/Abyss' },
    ],
  },
  series: null,
  shortName: 'enterTheAbyss',
  startLocation: 'Speak to the Mage of Zamorak north of Edgeville',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Enter_the_Abyss',
};

export default EnterTheAbyss;

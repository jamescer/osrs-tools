import { Skill } from '../../account/Skill';
import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

/**
 * Reference: https://oldschool.runescape.wiki/w/A_Ruff_Situation
 */

const ARuffSituation: Quest = {
  age: 'Fifth Age',
  description: 'Help Talia and Chase set up their dog shelter and unlock your very own canine companion.',
  difficulty: QuestDifficulty.Novice,
  id: 1053,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'A Ruff Situation',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [new LevelRequirement(Skill.Crafting, 15, false)],
  rewards: {
    areas: [],
    experience: [{ amount: 1000, skill: Skill.Crafting }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [
      {
        description:
          'Ability to raise puppies into adult dog companions, including three rescued during the quest (Labrador, Pug, Spaniel) and nine wandering breeds found around Gielinor (Chihuahua, Border Collie, Corgi, Greyhound, Husky, Samoyed, Bernese Mountain Dog, Shiba, Yorkie)',
      },
    ],
  },
  series: null,
  shortName: 'aRuffSituation',
  startLocation: 'Dog Shelter, southwest of Edgeville Monastery',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/A_Ruff_Situation',
};

export default ARuffSituation;

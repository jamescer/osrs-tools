import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const SheepHerder: Quest = {
  age: 'Fifth Age',
  description: 'Doctor Orbon in East Ardougne needs your help — plague-infected sheep have wandered into the city and must be rounded up and incinerated before they spread disease.',
  difficulty: QuestDifficulty.Novice,
  id: 97,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Sheep Herder',
  questPoints: 4,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [new QuestRequirement('Biohazard')],
  rewards: {
    areas: [],
    experience: [],
    items: [{ name: 'Experience lamp' }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 4,
    unlocks: [],
  },
  series: null,
  shortName: 'sheepHerder',

  startLocation: 'Dr Orbon, East Ardougne church courtyard',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Sheep_Herder',
};

export default SheepHerder;

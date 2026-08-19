import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const EthicallyAcquiredAntiquities: Quest = {
  age: 'Fifth Age',
  description: 'Work with the Varrock Museum to recover ancient artefacts from those who obtained them through dubious means.',
  difficulty: QuestDifficulty.Novice,
  id: 1040,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Ethically Acquired Antiquities',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 1, unlocks: [] },
  series: null,
  shortName: 'ethicallyAcquiredAntiquities',
  startLocation: 'Varrock Museum',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Ethically_Acquired_Antiquities',
};

export default EthicallyAcquiredAntiquities;

import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const Contact: Quest = {
  id: 0, // Assign a unique ID if available
  name: "Contact!",
  members: true,
  difficulty: 'Master',
  length: 'Medium',
  requirements: [], // Quests: Prince Ali Rescue, Icthlarin's Little Helper
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "contact",
  url: 'https://oldschool.runescape.wiki/w/Contact!',
  series: 'Desert',
  age: '',
  difficultyLevel: 'Master',
  officialDifficulty: 'Master',
  officialLength: 'Medium',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: Skill.Thieving, amount: 7000 }
    ],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default Contact;

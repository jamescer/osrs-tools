import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const LairOfTarnRazorlor: Quest = {
  age: 'Fifth Age',
  description:
    'Track down and defeat Tarn Razorlor, a deranged necromancer who has taken up residence in the Haunted Mine.',
  difficulty: QuestDifficulty.Experienced,
  id: 214,
  length: QuestLength.Medium,
  members: true,
  miniquest: true,
  name: 'Lair of Tarn Razorlor',
  questPoints: 0,
  recommendations: [
    { name: 'Combat equipment', type: 'item', note: 'Melee recommended; Tarn is level 69' },
    { name: 'Food', type: 'item' },
    { name: 'Slayer helmet or black mask', type: 'item', note: 'Boosts damage' },
  ],
  recommendedPrayers: [],
  recommendedSkills: { Slayer: 40 },
  requirements: [
    new QuestRequirement('Haunted Mine'),
    new LevelRequirement(Skill.Slayer, 40, false),
  ],
  rewards: {
    areas: [],
    experience: [{ amount: 5000, skill: Skill.Slayer }],
    items: [{ name: "Tarn's diary" }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 0,
    unlocks: [
      { description: "Tarn's diary, which can be read to upgrade the Salve amulet to Salve amulet (e)", url: 'https://oldschool.runescape.wiki/w/Salve_amulet_(e)' },
    ],
  },
  series: null,
  shortName: 'lairOfTarnRazorlor',
  startLocation: 'Enter the Haunted Mine and navigate to Tarn\'s lair',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Lair_of_Tarn_Razorlor',
};

export default LairOfTarnRazorlor;

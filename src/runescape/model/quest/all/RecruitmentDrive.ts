import { Skill } from '../../account/Skill';
import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const RecruitmentDrive: Quest = {
  age: 'Fifth Age',
  description: 'Prove your worth to Sir Tiffy Cashien of the Temple Knights by passing a series of puzzling tests at their recruitment facility.',
  difficulty: QuestDifficulty.Novice,
  id: 86,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  name: 'Recruitment Drive',
  questPoints: 1,
  recommendations: [
    {
      name: 'Empty inventory and worn equipment',
      note: 'You must have no items equipped or in your inventory to complete the challenges',
      type: 'tip',
    },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [new QuestRequirement("Black Knights' Fortress"), new QuestRequirement('Druidic Ritual')],
  rewards: {
    experience: [
      { amount: 1000, skill: Skill.Prayer },
      { amount: 1000, skill: Skill.Herblore },
      { amount: 1000, skill: Skill.Agility },
    ],
    items: [
      { name: 'Coins', quantity: 3000 },
      {
        name: 'Initiate sallet',
        note: 'And ability to buy the rest of the Initiate armor set',
        quantity: 1,
      },
    ],
    misc: [
      'You can talk to Sir Tiffy Cashien to change your spawn point at any time',
      'You can buy the full Initiate armor set from Sir Tiffy for 20,000 coins',
    ],
    questPoints: 1,
    unlocks: [
      { description: 'Prove your worth to Sir Tiffy Cashien of the Temple Knights by passing a series of puzzling tests at their recruitment facility.' },
      { description: 'Prove your worth to Sir Tiffy Cashien of the Temple Knights by passing a series of puzzling tests at their recruitment facility.' },
      { description: 'Prove your worth to Sir Tiffy Cashien of the Temple Knights by passing a series of puzzling tests at their recruitment facility.' },
    ],
  },
  series: 'Temple Knight',
  shortName: 'recruitmentDrive',
  startLocation: "Speak to Sir Amik Varze on the 3rd floor[US] of the White Knights' Castle's western tower in Falador",
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Recruitment_Drive',
};

export default RecruitmentDrive;

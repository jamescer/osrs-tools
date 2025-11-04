import { Skill } from '../../account/Skill';
import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const RecruitmentDrive: Quest = {
  description:
    "The Temple Knights of Saradomin, a secret organisation founded many centuries ago by Saradomin himself, are currently looking to expand their ranks with some new blood. After the successful thwarting of the Black Knights' plans to take over Asgarnia, and with the personal recommendation of Sir Amik, you have now been offered the chance to apply for membership in this organisation... but are you up to the challenge?",
  difficulty: QuestDifficulty.Novice,
  id: 0,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  age: 'Fifth Age',
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
  requirements: [
    new QuestRequirement("Black Knights' Fortress"),
    new QuestRequirement('Druidic Ritual'),
  ],
  recommendedSkills: {},
  series: 'Temple Knight',
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
      { description: 'Access to Initiate armour' },
      { description: 'The Gaze of Saradomin - Option to change spawn point to Falador' },
      { description: 'Title of Initiate in the Order of Temple Knights' },
    ],
  },
  startLocation:
    "Speak to Sir Amik Varze on the 3rd floor[US] of the White Knights' Castle's western tower in Falador",
  shortName: 'recruitmentDrive',
  status: QuestStatus.NotStarted,
  steps: [
    "Start the quest by speaking to Sir Amik Varze in the White Knights' Castle.",
    'Talk to Sir Tiffy Cashien in Falador Park.',
    'Complete a series of puzzle rooms, facing 5 out of 7 possible challenges.',
    'Return to Sir Tiffy Cashien to complete the quest.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Recruitment_Drive',
};

export default RecruitmentDrive;

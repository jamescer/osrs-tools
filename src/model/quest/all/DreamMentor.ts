import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { QuestStatus } from '../Quest';

const DreamMentor = {
  id: 0, // TODO: Replace with actual ID
  name: "Dream Mentor",
  description: "Help Cyrisus overcome his fears in the dream world and unlock new Lunar spells.",
  difficulty: QuestDifficulty.Master,
  steps: [], // TODO: Fill in steps
  requirements: [], // TODO: Fill in requirements
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "DreamMentor",
  url: "https://oldschool.runescape.wiki/w/Dream_Mentor",
  series: "Fremennik",
  members: true,
  questPoints: 2,
  length: QuestLength.Medium,
  age: "Fifth Age",
  startLocation: "Lunar Isle mine",
  recommendations: [
    { type: 'item', name: 'Seal of passage', note: 'Required to access Lunar Isle.' },
    { type: 'item', name: 'Food', quantity: 20, note: 'Bring 3 types, 6 of one and 7 of two others. Sacks/baskets recommended.' },
    { type: 'item', name: 'Goutweed', quantity: 1 },
    { type: 'item', name: 'Astral rune', quantity: 1 },
    { type: 'item', name: 'Tinderbox', quantity: 1 },
    { type: 'item', name: 'Hammer', quantity: 1 },
    { type: 'item', name: 'Pestle and mortar', quantity: 1 },
    { type: 'item', name: 'Good weapon/armour', note: 'Trident of the seas recommended; strong melee armour and food for boss fights.' },
    { type: 'item', name: 'Super potion sets', note: 'Recommended for boss fights.' },
    { type: 'tip', name: 'Combat 85+', note: 'Required to start the quest.' },
    { type: 'tip', name: 'Magic recommended', note: 'Highly recommended for boss fights.' },
    { type: 'tip', name: 'High Hitpoints', note: 'Recommended for survival against four bosses.' }
  ],
  recommendedSkills: { Combat: 85 },
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: 'Hitpoints', amount: 15000 },
      { skill: 'Magic', amount: 10000 }
    ],
    lamps: [
      { amount: 15000, skillRestriction: ['Any combat skill except Attack and Prayer'], note: 'Dreamy lamp awards 15,000 XP in a combat skill of your choice except Attack and Prayer.' }
    ],
    items: [
      { name: 'Dreamy lamp' }
    ],
    unlocks: [
      { description: 'Access to 7 new Lunar spells (Monster Examine, Humidify, Hunter Kit, Stat Spy, Dream, Plank Make, Spellbook Swap)', url: 'https://oldschool.runescape.wiki/w/Lunar_spells' },
      { description: "Access to Cyrisus' bank without a seal of passage" },
      { description: 'The Untouchable, The Everlasting, The Inadequacy accessible in the Nightmare Zone', url: 'https://oldschool.runescape.wiki/w/Nightmare_Zone' }
    ],
    questPoints: 2,
    areas: ['Lunar Isle', 'Dream World'],
    misc: ['Required for Dragon Slayer II, While Guthix Sleeps, Hard Desert Diary, Hard Kourend & Kebos Diary, Elite Varrock Diary']
  }
};

export default DreamMentor;

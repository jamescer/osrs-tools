import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
const CreatureOfFenkenstrain: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Creature of Fenkenstrain',
  members: true,
  difficulty: QuestDifficulty.Intermediate,
  length: QuestLength.Medium,
  requirements: [], // Quests: Priest in Peril, The Restless Ghost. Skills: Crafting 20, Thieving 25
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'creatureOfFenkenstrain',
  url: 'https://oldschool.runescape.wiki/w/Creature_of_Fenkenstrain',
  series: null,
  age: '',
    recommendations: [
      { type: 'item', name: 'Ghostspeak amulet' },
      { type: 'item', name: 'Silver bar' },
      { type: 'item', name: 'Bronze wire', quantity: 3 },
      { type: 'item', name: 'Needle' },
      { type: 'item', name: 'Thread', quantity: 5 },
      { type: 'item', name: 'Spade' },
      { type: 'item', name: 'Law rune' },
      { type: 'item', name: 'Air rune' },
      { type: 'item', name: 'Coins', quantity: 50, note: 'For Telekinetic Grab or buying pickled brain' },
      { type: 'item', name: 'Holy symbol', note: 'For safety against Feral Vampyres' },
      { type: 'item', name: 'Ecto-tokens', quantity: 2, note: 'For access to furnace, only if Ghosts Ahoy not completed' },
      { type: 'item', name: 'Weapon' },
      { type: 'item', name: 'Armour' },
      { type: 'item', name: 'Stamina potion' },
      { type: 'item', name: 'Teleport to Canifis' },
      { type: 'item', name: 'Food' },
      { type: 'item', name: 'Access to Arceuus spellbook' },
      { type: 'item', name: 'Dramen staff' },
      { type: 'item', name: 'Amulet of glory' }
    ],
    recommendedSkills: {
      Crafting: 20,
      Thieving: 25,
      Smithing: 4,
      Combat: 30
    },
    recommendedPrayers: [],
    rewards: {
      experience: [
        { skill: 'Thieving', amount: 1000 }
      ],
      questPoints: 2,
      items: [
        { name: 'Ring of charos', note: 'Access to Werewolf Agility Course, reduced transport costs' }
      ],
      areas: ['Fenkenstrain\'s Castle'],
      unlocks: [],
      lamps: [],
      points: [],
      pets: [],
    },
};

export default CreatureOfFenkenstrain;

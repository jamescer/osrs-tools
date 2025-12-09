import { ItemRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const Ratcatchers: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Intermediate,
  id: 0,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: 'Ratcatchers',
  questPoints: 2,
  recommendations: [
    {
      alternatives: [
        'Any type of raw or cooked fish (except leaping trout/leaping salmon)',
        'Raw karambwanji',
      ],
      name: 'Fish to heal your cat',
      note: '8-10 recommended',
      quantity: 8,
      type: 'item',
    },
    {
      name: 'Ring of charos (a)',
      note: 'Spend fewer coins on Ali the Snake Charmer',
      type: 'item',
    },
    {
      alternatives: ['Varrock teleport', 'Chronicle', "Combat Bracelet to the Champions' Guild"],
      name: 'Fast travel to Varrock',
      type: 'travel',
    },
    {
      alternatives: [
        'Rimmington teleport',
        'Teleport to House (if house is in Rimmington)',
        "Explorer's Ring 2",
        'Amulet of Glory to Draynor Village',
        'Skills Necklace to Crafting Guild',
        'Fairy Rings to AIQ',
      ],
      name: 'Fast travel to Port Sarim',
      type: 'travel',
    },
    // ...other travel recommendations...
    {
      name: 'Uncheck all',
      note: 'No specific recommendation',
      type: 'tip',
    },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement("Gertrude's Cat"),
    new ItemRequirement('Cat', 1, { notes: '' }),
    new ItemRequirement('Cheese', 1),
    new ItemRequirement('Bucket of milk', 1),
    new ItemRequirement('Unicorn horn dust', 1),
    new ItemRequirement('Catspeak amulet', 1, { notes: '(unless Dragon Slayer II is completed)' }),
    new ItemRequirement('Tinderbox', 1),
    new ItemRequirement('Free Inventory Space', 1),
  ],
  rewards: {
    areas: ['Access to the Rat Pits.'],
    experience: [{ amount: 4500, skill: 'Thieving' }],
    items: [{ name: 'Rat Pole', quantity: 1 }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  series: null,
  shortName: 'ratcatchers',
  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Ratcatchers',
};

export default Ratcatchers;

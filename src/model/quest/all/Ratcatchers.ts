import { Quest, QuestStatus } from '../Quest';
import { ItemRequirement, QuestRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const Ratcatchers: Quest = {
  id: 0,
  name: 'Ratcatchers',
  members: true,
  difficulty: QuestDifficulty.Intermediate,
  length: QuestLength.Long,
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
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'ratcatchers',
  url: 'https://oldschool.runescape.wiki/w/Ratcatchers',
  series: null,
  age: '',
  recommendations: [
    {
      type: 'item',
      name: 'Fish to heal your cat',
      quantity: 8,
      alternatives: [
        'Any type of raw or cooked fish (except leaping trout/leaping salmon)',
        'Raw karambwanji',
      ],
      note: '8-10 recommended',
    },
    {
      type: 'item',
      name: 'Ring of charos (a)',
      note: 'Spend fewer coins on Ali the Snake Charmer',
    },
    {
      type: 'travel',
      name: 'Fast travel to Varrock',
      alternatives: ['Varrock teleport', 'Chronicle', "Combat Bracelet to the Champions' Guild"],
    },
    {
      type: 'travel',
      name: 'Fast travel to Port Sarim',
      alternatives: [
        'Rimmington teleport',
        'Teleport to House (if house is in Rimmington)',
        "Explorer's Ring 2",
        'Amulet of Glory to Draynor Village',
        'Skills Necklace to Crafting Guild',
        'Fairy Rings to AIQ',
      ],
    },
    // ...other travel recommendations...
    {
      type: 'tip',
      name: 'Uncheck all',
      note: 'No specific recommendation',
    },
  ],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [{ skill: 'Thieving', amount: 4500 }],
    questPoints: 2,
    items: [{ name: 'Rat Pole', quantity: 1 }],
    areas: ['Access to the Rat Pits.'],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default Ratcatchers;

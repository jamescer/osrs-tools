import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength, QuestStatus } from '../enums';
import { Quest } from '../Quest';

/**
 * A Kingdom Divided quest object.
 * @author James Cerniglia
 * @reference https://oldschool.runescape.wiki/w/A_Kingdom_Divided
 */
const AKingdomDivided: Quest = {
  age: 'Fifth Age',
  description:
    'Investigate the power struggle within Great Kourend and unravel the mystery behind the disappearance of the royal family.',
  difficulty: QuestDifficulty.Experienced,
  id: 0,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: 'A Kingdom Divided',
  questPoints: 2,
  recommendations: [
    { name: 'Combat level 70+', note: 'Recommended for boss fights', type: 'tip' },
    { name: '43+ Prayer', note: 'Protect from Magic, Missiles, Melee', type: 'tip' },
    { name: 'Stamina or energy potions', type: 'item' },
    { name: 'Antipoison', type: 'item' },
    { name: "Kharedst's memoirs", type: 'item' },
    { name: "Xeric's talisman", type: 'item' },
    { name: 'Games necklace', type: 'item' },
    { name: 'Skills necklace', type: 'item' },
    { name: "Rada's blessing", note: '1+ recommended', type: 'item' },
    { name: 'Access to fairy rings', type: 'travel' },
    { name: 'Food and combat equipment', note: 'For high-level fights', type: 'item' },
    { name: 'Axe', type: 'item' },
    { name: 'Runes', note: 'To cast Fire Bolt or better', type: 'item' },
    { name: 'Defence potion', note: '3+ doses', quantity: 3, type: 'item' },
    { name: 'Volcanic sulphur', type: 'item' },
    { name: 'Molten glass', type: 'item' },
    { alternatives: ['Pickaxe', 'Chisel'], name: 'Dark essence block', type: 'item' },
  ],
  recommendedPrayers: ['Protect from Magic', 'Protect from Missiles', 'Protect from Melee'],
  recommendedSkills: {
    Combat: 70,
    Hitpoints: 70,
    Prayer: 43,
  },
  requirements: [
    new QuestRequirement('Client of Kourend'),
    new QuestRequirement('The Depths of Despair'),
    new QuestRequirement('The Queen of Thieves'),
    new QuestRequirement('The Ascent of Arceuus'),
    new QuestRequirement('The Forsaken Tower'),
    new QuestRequirement('Tale of the Righteous'),
    new LevelRequirement(Skill.Farming, 35, false),
    new LevelRequirement(Skill.Crafting, 38, false),
    new LevelRequirement(Skill.Mining, 42, false),
    new LevelRequirement(Skill.Smithing, 42, false),
    new LevelRequirement(Skill.Hunter, 42, false),
    new LevelRequirement(Skill.Herblore, 50, false),
    new LevelRequirement(Skill.Magic, 50, false),
    new LevelRequirement(Skill.Thieving, 52, false),
    new LevelRequirement(Skill.Woodcutting, 52, false),
    new LevelRequirement(Skill.Agility, 54, false),
  ],
  rewards: {
    areas: [],
    experience: [],
    items: [{ name: 'Book of the dead', quantity: 1 }],
    lamps: [
      {
        amount: 10000,
        note: 'Two lamps are awarded',
        skillRestriction: 'Any skill level 40 or above',
      },
    ],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [
      {
        description:
          '24 new spells added to the Arceuus spellbook (all combat spells except Ghostly Grasp and Inferior Demonbane)',
        url: 'https://oldschool.runescape.wiki/w/Arceuus_spellbook',
      },
      { description: 'Ability to set respawn point to Kourend Castle' },
      { description: 'Access to fight Yama (boss in Kourend Castle)', url: 'https://oldschool.runescape.wiki/w/Yama' },
    ],
  },
  series: 'Great Kourend',
  shortName: 'aKingdomDivided',
  startLocation: 'Martin Holt, entrance to Kourend Castle, Kingstown',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/A_Kingdom_Divided',
};

export default AKingdomDivided;

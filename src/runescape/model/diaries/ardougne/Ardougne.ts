import { LevelRequirement, QuestRequirement } from '../../Requirement';
import type { Diary } from '../Diary';

const quest = (name: string) => new QuestRequirement(name);
const skill = (skillName: string, level: number, boostable = true) => new LevelRequirement(skillName, level, boostable);

/**
 * Ardougne Achievement Diary data, authored directly in TypeScript.
 *
 * Source: https://oldschool.runescape.wiki/w/Ardougne_Diary
 */
export const ArdougneDiary: Diary = {
  easy: {
    itemReward: 'Ardougne cloak 1',
    itemsRequired: [
      'Around 100 coins',
      'Silk',
      'Rusty sword',
      'A knife or slashing weapon for safety during the lever trip',
    ],
    questsRequired: ['Biohazard', 'Rune Mysteries'],
    rewards: {
      description: [
        {
          main: 'Ardougne cloak 1',
          other: ['Unlimited teleports to the Ardougne Monastery'],
        },
        {
          main: '1 Antique lamp worth 2,500 experience in any skill of at least level 30',
          other: [],
        },
        {
          main: 'Earn twice as many death runes from trading in cats to civilians in West Ardougne',
          other: [],
        },
        {
          main: '10% increased chance to successfully steal from stalls in Ardougne',
          other: [],
        },
        {
          main: 'Drops from Jubsters and Frogeels will be noted in the Tower of Life activity',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 2500, levelToUse: 30 }],
    },
    skillsRequired: [{ boostable: true, level: 5, skill: 'thieving' }],
    tasks: [
      {
        description: 'Have Wizard Cromperty teleport you to the Rune essence mine.',
        notes: 'Right-click Wizard Cromperty and choose the teleport option.',
        requirements: [quest('Rune Mysteries')],
      },
      {
        description: 'Steal a cake from the East Ardougne market stalls.',
        requirements: [skill('thieving', 5)],
      },
      {
        description: 'Sell silk to the Silk trader in East Ardougne for 60 coins each.',
        notes: 'Offer to sell for 120 coins first, then take the 60-coin option.',
        requirements: [],
      },
      {
        description: "Use the altar in East Ardougne's church.",
        notes: 'You need to have missing prayer points for the task to register.',
        requirements: [],
      },
      {
        description: 'Go out fishing on the Fishing Trawler.',
        notes: 'Starting the minigame is enough.',
        requirements: [],
      },
      {
        description: 'Enter the Combat Training Camp north of West Ardougne.',
        requirements: [quest('Biohazard')],
      },
      {
        description: 'Have Tindel Marchant identify a rusty sword for you.',
        notes: 'Bring a rusty sword and 100 coins. Extra swords are helpful in case the attempt fails.',
        requirements: [],
      },
      {
        description: 'Use the Ardougne lever to teleport to the Wilderness.',
        notes: 'This sends you to deep Wilderness, so travel light.',
        requirements: [],
      },
      {
        description: "View Aleck's Hunter Emporium shop in Yanille.",
        requirements: [],
      },
      {
        description: 'Check what pets you have insured with Probita in East Ardougne.',
        notes: 'Use the check option directly on Probita.',
        requirements: [],
      },
    ],
  },
  elite: {
    itemReward: 'Ardougne cloak 4',
    itemsRequired: [
      'A raw manta ray',
      'A lockpick',
      'Yew logs, a runite bar, a hammer, a knife, and sinew or a tree root',
      'A Salve amulet or enough Nightmare Zone points to imbue one',
      'A torstol seed, seed dibber, and rake',
      'Runes for Ice Barrage or blighted ancient ice sacks',
    ],
    questsRequired: ['Haunted Mine', 'Desert Treasure I'],
    rewards: {
      description: [
        {
          main: 'Ardougne cloak 4',
          other: ['Unlimited teleports to the Ardougne farming patch'],
        },
        {
          main: '1 Antique lamp worth 50,000 experience in any skill of at least level 70',
          other: [],
        },
        {
          main: 'Bert automatically sends 84 buckets of sand to your bank each day',
          other: [],
        },
        {
          main: 'Wizard Cromperty gives 250 free noted pure essence each day',
          other: [],
        },
        {
          main: '50% more fish from Fishing Trawler and 25% more marks of grace from the Ardougne Rooftop Course',
          other: [],
        },
        {
          main: 'Larger coin pouch capacity after completing the elite tier',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 50000, levelToUse: 70 }],
    },
    skillsRequired: [
      { boostable: false, level: 81, skill: 'fishing' },
      { boostable: true, level: 91, skill: 'cooking' },
      { boostable: true, level: 82, skill: 'thieving' },
      { boostable: true, level: 10, skill: 'crafting' },
      { boostable: true, level: 91, skill: 'smithing' },
      { boostable: true, level: 69, skill: 'fletching' },
      { boostable: true, level: 85, skill: 'farming' },
      { boostable: true, level: 90, skill: 'agility' },
      { boostable: true, level: 94, skill: 'magic' },
    ],
    tasks: [
      {
        description: 'Catch a manta ray in the Fishing Trawler and cook it in Port Khazard.',
        notes: 'Bring or catch a raw manta ray and cook it in Port Khazard without resetting the task chain.',
        requirements: [skill('fishing', 81, false), skill('cooking', 91)],
      },
      {
        description: 'Picklock the door to the basement of Yanille Agility Dungeon.',
        notes: 'Bring a lockpick.',
        requirements: [skill('thieving', 82)],
      },
      {
        description: 'Pickpocket a Hero.',
        requirements: [skill('thieving', 80)],
      },
      {
        description: 'Make a rune crossbow yourself from scratch within Witchaven or Yanille.',
        notes: 'Use the Witchaven spinning wheel for the string and the Yanille anvil for the limbs.',
        requirements: [skill('crafting', 10), skill('smithing', 91), skill('fletching', 69)],
      },
      {
        description: 'Imbue a Salve amulet at Nightmare Zone, or equip one that was imbued there.',
        notes: 'Use a Salve amulet(i)/(ei) from Nightmare Zone, or earn enough points there to imbue one.',
        requirements: [quest('Haunted Mine')],
      },
      {
        description: 'Pick some torstol from the herb patch north of Ardougne.',
        notes: 'Bring a torstol seed, seed dibber, and rake.',
        requirements: [skill('farming', 85)],
      },
      {
        description: "Complete a lap of Ardougne's rooftop agility course.",
        requirements: [skill('agility', 90)],
      },
      {
        description: 'Cast Ice Barrage on another player within Castle Wars.',
        notes: 'Bring runes for Ice Barrage or blighted ancient ice sacks and land the spell successfully.',
        requirements: [quest('Desert Treasure I'), skill('magic', 94)],
      },
    ],
  },
  hard: {
    itemReward: 'Ardougne cloak 3',
    itemsRequired: [
      'A skills necklace or combat bracelet with missing charges',
      'A lockpick',
      'A Karamjan monkey greegree',
      '2 earth runes and 2 law runes',
      'A rope and small fishing net',
      'A palm sapling and 15 papaya fruit',
      'A poison ivy seed, seed dibber, and rake',
      '5 mithril bars and a hammer',
      '25,000 coins to move your house to Yanille if needed',
      'Shield left half and shield right half',
      'Pure or daeyalt essence and Death Altar access',
    ],
    questsRequired: ["Legends' Quest", 'Monkey Madness I', 'Watchtower', 'Plague City', "Mourning's End Part II"],
    rewards: {
      description: [
        {
          main: 'Ardougne cloak 3',
          other: ['Five daily teleports to the Ardougne farming patch'],
        },
        {
          main: '1 Antique lamp worth 15,000 experience in any skill of at least level 50',
          other: [],
        },
        {
          main: 'Wizard Cromperty gives 150 free noted pure essence each day',
          other: [],
        },
        {
          main: 'Watchtower Teleport can be redirected to central Yanille',
          other: [],
        },
        {
          main: '10% increased pickpocket success anywhere in Gielinor and larger coin pouch capacity',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 15000, levelToUse: 50 }],
    },
    skillsRequired: [
      { boostable: true, level: 66, skill: 'magic' },
      { boostable: true, level: 72, skill: 'thieving' },
      { boostable: true, level: 59, skill: 'hunter' },
      { boostable: true, level: 70, skill: 'farming' },
      { boostable: true, level: 68, skill: 'smithing' },
      { boostable: false, level: 50, skill: 'construction' },
      { boostable: true, level: 65, skill: 'runecraft' },
    ],
    tasks: [
      {
        description: "Recharge some jewellery at the Totem pole in the Legends' Guild.",
        notes: 'Bring a not-fully-charged skills necklace or combat bracelet.',
        requirements: [quest("Legends' Quest")],
      },
      {
        description: 'Enter the Magic Guild.',
        requirements: [skill('magic', 66)],
      },
      {
        description: 'Attempt to steal from a chest in Ardougne Castle.',
        notes: 'A lockpick is recommended.',
        requirements: [skill('thieving', 72)],
      },
      {
        description: "Have a zookeeper put you in Ardougne Zoo's monkey cage.",
        notes: 'Bring a Karamjan monkey greegree.',
        requirements: [quest('Monkey Madness I')],
      },
      {
        description: 'Teleport to the Watchtower.',
        notes: 'Requires 2 earth runes and 2 law runes.',
        requirements: [quest('Watchtower'), skill('magic', 58)],
      },
      {
        description: 'Catch a Red Salamander.',
        notes: 'Bring at least one rope and a small fishing net.',
        requirements: [skill('hunter', 59)],
      },
      {
        description: 'Check the health of a palm tree near Tree Gnome Village.',
        notes: 'Bring a palm sapling and consider 15 papaya fruit for payment.',
        requirements: [skill('farming', 68)],
      },
      {
        description: 'Pick some poison ivy berries from the patch south of East Ardougne.',
        notes: 'Bring a poison ivy seed, seed dibber, and rake.',
        requirements: [skill('farming', 70)],
      },
      {
        description: 'Smith a Mithril platebody near Ardougne.',
        notes: 'Use the Port Khazard, Yanille, or West Ardougne anvil with 5 mithril bars and a hammer.',
        requirements: [skill('smithing', 68)],
      },
      {
        description: 'Enter your POH from Yanille.',
        notes: 'Move your house to Yanille if it is elsewhere.',
        requirements: [skill('construction', 50, false)],
      },
      {
        description: 'Smith a Dragon sq shield in West Ardougne.',
        notes: 'Bring both shield halves and a hammer.',
        requirements: [quest('Plague City'), skill('smithing', 60)],
      },
      {
        description: 'Craft some death runes at the Death altar.',
        notes: 'Use pure or daeyalt essence and access the Death Altar through the Abyss or Temple of Light route.',
        requirements: [quest("Mourning's End Part II"), skill('runecraft', 65)],
      },
    ],
  },
  itemReward: 'Ardougne cloak',
  medium: {
    itemReward: 'Ardougne cloak 2',
    itemsRequired: [
      'Dramen or Lunar staff',
      'Mith grapple and any crossbow',
      '3 strawberry seeds and farming tools',
      '2 water runes and 2 law runes',
      'A yew log, or 11 if the Castle Wars route is still locked',
      'A bucket for Bert if needed',
      'Fishing rod and bait or a small fishing net',
      'Any light source and the Skavid map',
      'A raw chicken and raw swordfish',
      "Iban's staff and 200,000 coins if upgrading it",
    ],
    questsRequired: [
      'Fairytale II - Cure a Queen',
      'Plague City',
      'Enlightened Journey',
      'The Hand in the Sand',
      'Sea Slug',
      'Watchtower',
      'Tower of Life',
      'Underground Pass',
    ],
    rewards: {
      description: [
        {
          main: 'Ardougne cloak 2',
          other: ['Three daily teleports to the Ardougne farming patch'],
        },
        {
          main: '1 Antique lamp worth 7,500 experience in any skill of at least level 40',
          other: [],
        },
        {
          main: 'Wizard Cromperty gives 100 free noted pure essence each day',
          other: [],
        },
        {
          main: 'Unicow, Newtroost, and Spidine drops are noted in the Tower of Life activity',
          other: [],
        },
        {
          main: '10% increased Ardougne pickpocket success rate and larger coin pouch capacity',
          other: [],
        },
        {
          main: 'Ability to retarget ring of life teleports to Ardougne and receive extra Ourania runes',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 7500, levelToUse: 40 }],
    },
    skillsRequired: [
      { boostable: true, level: 39, skill: 'agility' },
      { boostable: true, level: 38, skill: 'strength' },
      { boostable: true, level: 21, skill: 'ranged' },
      { boostable: true, level: 31, skill: 'farming' },
      { boostable: true, level: 51, skill: 'magic' },
      { boostable: true, level: 50, skill: 'firemaking' },
      { boostable: true, level: 38, skill: 'thieving' },
    ],
    tasks: [
      {
        description: 'Enter the unicorn pen in Ardougne Zoo using Fairy rings.',
        notes: 'Use fairy ring code BIS with a dramen or lunar staff.',
        requirements: [quest('Fairytale II - Cure a Queen')],
      },
      {
        description: "Grapple over Yanille's south wall and jump off.",
        notes: 'Bring a mith grapple and any crossbow.',
        requirements: [skill('agility', 39), skill('strength', 38), skill('ranged', 21)],
      },
      {
        description: 'Harvest some strawberries from the Ardougne farming patch.',
        notes: 'Bring three strawberry seeds and standard farming tools.',
        requirements: [skill('farming', 31)],
      },
      {
        description: 'Cast the Ardougne Teleport spell.',
        notes: 'Requires 2 water runes and 2 law runes.',
        requirements: [quest('Plague City'), skill('magic', 51)],
      },
      {
        description: 'Travel to Castle Wars by Hot Air Balloon.',
        notes: 'Bring a yew log, or 11 yew logs if the route is not unlocked yet.',
        requirements: [quest('Enlightened Journey'), skill('firemaking', 50)],
      },
      {
        description: 'Claim buckets of sand from Bert in Yanille.',
        notes: "Ultimate Ironmen instead fill a bucket at Bert's sand pit.",
        requirements: [quest('The Hand in the Sand')],
      },
      {
        description: 'Catch any fish on the Fishing Platform.',
        notes: 'You only need to have started Sea Slug. Bring a small fishing net or rod and bait.',
        requirements: [quest('Sea Slug')],
      },
      {
        description: 'Pickpocket the master farmer north of East Ardougne.',
        requirements: [skill('thieving', 38)],
      },
      {
        description: 'Collect some cave nightshade from the Skavid caves.',
        notes: 'Any light source and the Skavid map are recommended.',
        requirements: [quest('Watchtower')],
      },
      {
        description: 'Kill a swordchick in the Tower of Life.',
        notes: 'Bring a raw chicken, a raw swordfish, and a weapon.',
        requirements: [quest('Tower of Life')],
      },
      {
        description: "Equip an Iban's upgraded staff or upgrade an Iban's staff.",
        notes: "Bring Iban's staff and 200,000 coins if you need to upgrade it at the Dark Mage.",
        requirements: [quest('Underground Pass')],
      },
      {
        description: 'Visit the island east of the Necromancer Tower.',
        notes: 'Use fairy ring code AIR with a dramen or lunar staff.',
        requirements: [quest('Fairytale II - Cure a Queen')],
      },
    ],
  },
  name: 'Ardougne Diary',
};

export default ArdougneDiary;

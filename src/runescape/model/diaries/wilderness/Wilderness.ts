import { LevelRequirement, QuestRequirement } from '../../Requirement';
import type { Diary } from '../Diary';

const quest = (name: string) => new QuestRequirement(name);
const skill = (skillName: string, level: number, boostable = true) => new LevelRequirement(skillName, level, boostable);

/**
 * Wilderness Achievement Diary data, authored directly in TypeScript.
 *
 * Source: https://oldschool.runescape.wiki/w/Wilderness_Diary
 */
export const WildernessDiary: Diary = {
  easy: {
    itemReward: 'Wilderness sword 1',
    rewards: {
      description: [
        {
          main: 'Wilderness sword 1',
          other: [
            'Always slashes webs successfully',
            'You can now use the Wilderness lever to teleport to Edgeville',
            'Lundail offers 40 random runes for free every day',
          ],
        },
        {
          main: 'Antique lamp worth 2,500 experience in any skill of at least level 30',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 2500, levelToUse: 30 }],
    },
    tasks: [
      {
        description: 'Cast Low Alchemy at the Fountain of Rune.',
        requirements: [skill('Magic', 21)],
      },
      {
        description: 'Enter the Wilderness from the Ardougne or Edgeville lever.',
        requirements: [],
      },
      {
        description: 'Pray at the Chaos Altar in the Western Wilderness.',
        requirements: [],
      },
      {
        description: 'Enter the Chaos Runecrafting temple.',
        notes: 'Entering through the Tunnel of Chaos or Guardians of the Rift does not count.',
        requirements: [],
      },
      {
        description: 'Kill a Mammoth in the Wilderness.',
        notes: 'Mammoths are found south-east of Ferox Enclave.',
        requirements: [],
      },
      {
        description: 'Kill an Earth Warrior in the Wilderness beneath Edgeville.',
        requirements: [skill('Agility', 15)],
      },
      {
        description: 'Restore some prayer points at the demonic ruins.',
        requirements: [],
      },
      {
        description: "Enter the King Black Dragon's lair.",
        notes: 'This lair is located beneath the Lava Maze.',
        requirements: [],
      },
      {
        description: "Collect 5 Red spiders' eggs from the Wilderness.",
        notes: 'Found in the northern part of Edgeville Dungeon.',
        requirements: [],
      },
      {
        description: 'Mine some Iron ore in the Wilderness.',
        requirements: [skill('Mining', 15)],
      },
      {
        description: 'Have the Mage of Zamorak teleport you to the Abyss.',
        notes: 'The one-time teleport during Temple of the Eye does not count.',
        requirements: [quest('Enter the Abyss')],
      },
      {
        description: 'Equip any team cape in the Wilderness.',
        notes: 'Entering the Wilderness with one already equipped does not count.',
        requirements: [],
      },
    ],
  },
  elite: {
    itemReward: 'Wilderness sword 4',
    rewards: {
      description: [
        {
          main: 'Wilderness sword 4',
          other: [
            'Unlimited teleports to the Fountain of Rune',
            'Free access to the Resource Area',
            'Lundail offers 200 random runes for free every day',
            'Dragon bones from dragons killed in the Wilderness are now noted (excluding KBD)',
            'Catch rate of dark crabs increased by 112.5%',
          ],
        },
        {
          main: 'Antique lamp worth 50,000 experience in any skill of at least level 70',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 50000, levelToUse: 70 }],
    },
    tasks: [
      {
        description: "Kill Callisto, Venenatis & Vet'ion.",
        notes:
          "The lesser versions (Artio, Spindel, and Calvar'ion) also count. Bosses must be killed consecutively without completing other tasks in-between.",
        requirements: [],
      },
      {
        description: 'Teleport to Ghorrock.',
        requirements: [quest('Desert Treasure I'), skill('Magic', 96, false)],
      },
      {
        description: 'Fish and cook a Dark Crab in the Resource Area.',
        requirements: [skill('Fishing', 85), skill('Cooking', 90)],
      },
      {
        description: 'Smith a rune scimitar from scratch in the Resource Area.',
        notes:
          'Mine two runite ores, smelt two runite bars, then smith the scimitar. Steps must be done consecutively without completing other tasks.',
        requirements: [skill('Mining', 85), skill('Smithing', 90, false)],
      },
      {
        description: "Steal from the Rogues' chest.",
        notes: 'Must right-click the chest to search for traps.',
        requirements: [skill('Thieving', 84)],
      },
      {
        description: 'Slay a spiritual mage inside the Wilderness Godwars Dungeon.',
        notes: 'Requires Agility 60 OR Strength 60 to enter the dungeon.',
        requirements: [skill('Slayer', 83)],
      },
      {
        description: 'Cut and burn some magic logs in the Resource Area.',
        notes:
          'Logs burnt by an infernal axe do not count. Steps must be done consecutively without completing other tasks.',
        requirements: [skill('Woodcutting', 75), skill('Firemaking', 75)],
      },
    ],
  },

  hard: {
    itemReward: 'Wilderness sword 3',
    rewards: {
      description: [
        {
          main: 'Wilderness sword 3',
          other: [
            'One daily teleport to the Fountain of Rune',
            'Entrance fee for the Resource Area lowered to 3,750 coins',
            'Possess up to 5 ecumenical keys at a time',
            'Ecumenical keys can now be sold to the Lesser Fanatic in Edgeville for 61,500 coins each',
            'Lundail offers 120 random runes for free every day',
            '50% more lava shards from grinding lava scales',
            'Ability to select your destination when using Wilderness obelisks',
            'No teleport delay in Revenant Caves or Wilderness boss caves',
            'Wine of Zamorak taken from Chaos Temple and Deep Wilderness Dungeon will be noted',
            "Access to Spindel, Artio, and Calvar'ion",
          ],
        },
        {
          main: 'Antique lamp worth 15,000 experience in any skill of at least level 50',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 15000, levelToUse: 50 }],
    },
    tasks: [
      {
        description: 'Cast any of the 3 God spells against another player in the Wilderness.',
        notes:
          'God spells must first be cast 100 times inside the Mage Arena. The task is also completable inside the arena.',
        requirements: [quest('Mage Arena I'), skill('Magic', 60)],
      },
      {
        description: 'Charge an Air Orb.',
        requirements: [skill('Magic', 66)],
      },
      {
        description: 'Catch a Black Salamander in the Wilderness.',
        requirements: [skill('Hunter', 67)],
      },
      {
        description: 'Smith an Adamant scimitar in the Resource Area.',
        requirements: [skill('Smithing', 75, false)],
      },
      {
        description: 'Kill a Lava Dragon.',
        notes: 'Lava dragons are found on Lava Dragon Isle.',
        requirements: [],
      },
      {
        description: 'Kill the Chaos Elemental.',
        requirements: [],
      },
      {
        description: 'Kill the Crazy Archaeologist, Chaos Fanatic & Scorpia.',
        notes:
          'While these bosses can be killed in any order, completing or updating any other task in-between will reset progress.',
        requirements: [],
      },
      {
        description: 'Take the agility shortcut from Trollheim into the Wilderness.',
        notes: 'Not to be confused with the rocky shortcut further north. The shortcut goes in one direction only.',
        requirements: [quest('Troll Stronghold'), skill('Agility', 64)],
      },
      {
        description: 'Kill a Spiritual warrior in the Wilderness Godwars Dungeon.',
        notes: 'Requires Agility 60 OR Strength 60 to enter the dungeon.',
        requirements: [skill('Slayer', 68)],
      },
      {
        description: 'Fish some Raw Lava Eel in the Wilderness.',
        notes: 'Requires an oily fishing rod and fishing bait, and a slashing weapon.',
        requirements: [skill('Fishing', 53), skill('Herblore', 25, false)],
      },
    ],
  },

  itemReward: 'Wilderness sword',

  medium: {
    itemReward: 'Wilderness sword 2',
    rewards: {
      description: [
        {
          main: 'Wilderness sword 2',
          other: [
            'Entrance fee for the Resource Area lowered to 6,000 coins',
            'Possess up to 4 ecumenical keys at a time',
            'Lundail offers 80 random runes for free every day',
            'Access to the crevice shortcut in the Deep Wilderness Dungeon (with 46 Agility)',
            "Access to Callisto, Venenatis, and Vet'ion",
            '15% more chance to receive drops from cutting fallen ents',
            "Ability to obtain loot from chests in the Rogues' Castle",
          ],
        },
        {
          main: 'Antique lamp worth 7,500 experience in any skill of at least level 40',
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 7500, levelToUse: 40 }],
    },
    tasks: [
      {
        description: 'Mine some Mithril ore in the Wilderness.',
        requirements: [skill('Mining', 55)],
      },
      {
        description: 'Chop some yew logs from a fallen Ent.',
        notes:
          'Must be done within the Wilderness. Ents are found north and east of the chaos temple with the elder chaos druids.',
        requirements: [skill('Woodcutting', 61, false)],
      },
      {
        description: 'Enter the Wilderness Godwars Dungeon.',
        notes: 'Requires Agility 60 OR Strength 60.',
        requirements: [skill('Agility', 60)],
      },
      {
        description: 'Complete a lap of the Wilderness Agility course.',
        requirements: [skill('Agility', 52)],
      },
      {
        description: 'Kill a Green Dragon in the Wilderness.',
        requirements: [],
      },
      {
        description: 'Kill an Ankou in the Wilderness.',
        requirements: [],
      },
      {
        description: 'Charge an Earth Orb.',
        requirements: [skill('Magic', 60)],
      },
      {
        description: 'Kill a Bloodveld in the Wilderness Godwars Dungeon.',
        notes: 'Requires Agility 60 OR Strength 60 to enter the dungeon.',
        requirements: [skill('Slayer', 50)],
      },
      {
        description: 'Talk to the Emblem Trader in Edgeville about emblems.',
        notes: "He's just north of the bank.",
        requirements: [],
      },
      {
        description: 'Smith a Golden helmet in the Resource Area.',
        notes: 'Cannot do this while already having a gold helmet in your inventory or bank.',
        requirements: [quest('Between a Rock...'), skill('Smithing', 50, false)],
      },
      {
        description: 'Open the Muddy Chest in the lava maze.',
        notes: 'Requires a muddy key and a slashing weapon.',
        requirements: [],
      },
    ],
  },

  name: 'Wilderness Diary',
};

export default WildernessDiary;

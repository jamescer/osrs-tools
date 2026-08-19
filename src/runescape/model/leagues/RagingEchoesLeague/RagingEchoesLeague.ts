import { NotableDrop } from '../model';

export interface RagingEchoesLeagueArea {
  name: string;
  description: string;
  isStarting: boolean;
  isAccessible: boolean;
  unlocksAfterTasks?: number;
  notableSettlements: string[];
  notableActivities: string[];
  echoBoss?: string;
  autoCompletedQuests: string[];
  autoCompletedAchievements: string[];
  notableDrops?: NotableDrop[];
}

/**
 * Area definitions for the Raging Echoes League (Leagues V).
 *
 * The Raging Echoes League was the fifth League in Old School RuneScape.
 * It ran from 27 November 2024 to 22 January 2025, following the region-locking
 * format of Trailblazer League, with Varlamore as a new unlockable region and
 * Echo Bosses as a new mechanic.
 *
 * @see https://oldschool.runescape.wiki/w/Raging_Echoes_League
 */

export const RagingEchoesLeagueAreas: Record<string, RagingEchoesLeagueArea> = {
  asgarnia: {
    autoCompletedAchievements: [],
    autoCompletedQuests: [],
    description: 'The kingdom of Asgarnia, containing Falador, Burthorpe and the surrounding lands.',
    echoBoss: 'Cerberus (Echo)',
    isAccessible: false,
    isStarting: false,
    name: 'Asgarnia',
    notableActivities: ['Pest Control', 'God Wars Dungeon', 'Cerberus', 'Nex'],
    notableSettlements: ['Falador', 'Burthorpe', 'Port Sarim', 'Dwarven Mine', 'God Wars Dungeon'],
  },
  desert: {
    autoCompletedAchievements: [],
    autoCompletedQuests: [],
    description: 'The Kharidian Desert area, home to the Kalphite Queen, Tombs of Amascut and desert ruins.',
    echoBoss: 'Kalphite Queen (Echo)',
    isAccessible: false,
    isStarting: false,
    name: 'Kharidian Desert',
    notableActivities: ['Tombs of Amascut', 'Kalphite Queen', 'Pyramid Plunder', 'Tempoross'],
    notableSettlements: ['Nardah', 'Pollnivneach', 'Sophanem', 'Uzer Oasis', 'Bandit Camp'],
  },
  fremennik: {
    autoCompletedAchievements: [],
    autoCompletedQuests: [],
    description: 'The Fremennik Isles region, including Rellekka, Neitiznot and Waterbirth Island.',
    echoBoss: 'Dagannoth Kings (Echo)',
    isAccessible: false,
    isStarting: false,
    name: 'Fremennik Isles',
    notableActivities: ['Dagannoth Kings', 'Fremennik Trials', 'Ice Mountain', 'Pirate quests'],
    notableSettlements: ['Rellekka', 'Neitiznot', 'Waterbirth Island', 'Miscellania'],
  },
  kandarin: {
    autoCompletedAchievements: [],
    autoCompletedQuests: [],
    description: 'The kingdom of Kandarin, covering Ardougne, Camelot and the surrounding countryside.',
    echoBoss: 'Thermonuclear Smoke Devil (Echo)',
    isAccessible: false,
    isStarting: false,
    name: 'Kandarin',
    notableActivities: ['Thermonuclear Smoke Devil', 'Ardougne Diary', 'Temple Trekking', 'Fishing Guild'],
    notableSettlements: ['Ardougne', 'Camelot', "Seers' Village", 'Catherby', 'East Ardougne'],
  },
  karamja: {
    autoCompletedAchievements: [],
    autoCompletedQuests: [],
    description:
      'The tropical island of Karamja, including Brimhaven, Musa Point and the jungles surrounding the volcano.',
    isAccessible: true,
    isStarting: true,
    name: 'Karamja',
    notableActivities: ['TzHaar areas', 'Jungle quests', 'Fishing', 'Hunter'],
    notableSettlements: ['Brimhaven', 'Musa Point', 'Shilo Village', 'Tai Bwo Wannai', 'Crandor'],
  },
  kourend: {
    autoCompletedAchievements: [],
    autoCompletedQuests: [],
    description: 'The Kebos and Kourend area, covering the lands of Great Kourend, Hosidius and the Kebos Lowlands.',
    echoBoss: 'Hespori (Echo)',
    isAccessible: false,
    isStarting: false,
    name: 'Kourend and Kebos',
    notableActivities: ['Hespori', 'Tithe Farm', 'Farming', 'Slayer'],
    notableSettlements: ['Hosidius', 'Kourend Castle', 'Arceuus', 'Shayzien', 'Ape Atoll'],
  },
  misthalin: {
    autoCompletedAchievements: ['Wilderness Explorer'],
    autoCompletedQuests: ['Demon Slayer', "The Knight's Sword"],
    description: 'The kingdom of Misthalin, home to the city of Varrock and the Wilderness.',
    echoBoss: 'The Echo of Zamorak',
    isAccessible: true,
    isStarting: true,
    name: 'Misthalin',
    notableActivities: ['Wilderness Slayer', 'Wilderness Agility Course', 'Wilderness Resource Area'],
    notableDrops: [],
    notableSettlements: ['Varrock', 'Edgeville', 'Al Kharid'],
  },
  morytania: {
    autoCompletedAchievements: [],
    autoCompletedQuests: [],
    description: "The dark lands of Morytania, including Mort'ton, Canifis and the haunted swamps.",
    echoBoss: 'Grotesque Guardians (Echo)',
    isAccessible: false,
    isStarting: false,
    name: 'Morytania',
    notableActivities: ['Grotesque Guardians', 'Hallowed Sepulchre', 'Slayer', 'Temple Trekking'],
    notableSettlements: ["Mort'ton", 'Canifis', 'Meiyerditch', 'Fossil Island', 'Taverley'],
  },
  tirannwn: {
    autoCompletedAchievements: [],
    autoCompletedQuests: [],
    description: 'The elven lands of Tirannwn, including the Elf City and the Underground Pass.',
    echoBoss: 'Corrupted Hunllef (Echo)',
    isAccessible: false,
    isStarting: false,
    name: 'Tirannwn',
    notableActivities: ['Corrupted Hunllef', 'Elven quests', 'Agility', 'Fletching'],
    notableSettlements: ['Prifddinas', 'Tirannwn', 'Elf Camp', 'Temple of Light'],
  },
  varlamore: {
    autoCompletedAchievements: [],
    autoCompletedQuests: [],
    description:
      'The unlockable Varlamore region, including Amoxliatl, Hueycoatl, Mastering Mixology and Moons of Peril.',
    echoBoss: 'Sol Heredit (Echo)',
    isAccessible: false,
    isStarting: false,
    name: 'Varlamore',
    notableActivities: [
      'Amoxliatl',
      'Hueycoatl',
      'Mastering Mixology',
      'Moons of Peril',
      'Fortis Colosseum',
      'Hunter Guild',
    ],
    notableSettlements: ['Aldarin', 'Civitas illa Fortis', 'Sunken Isle', 'Fortis Colosseum'],
  },
  wilderness: {
    autoCompletedAchievements: [],
    autoCompletedQuests: [],
    description: 'The dangerous Wilderness region, where PvP, resource gathering and high-risk activities are found.',
    echoBoss: 'King Black Dragon (Echo)',
    isAccessible: false,
    isStarting: false,
    name: 'Wilderness',
    notableActivities: ['Wilderness Slayer', 'Wilderness Agility Course', 'Resource Area', 'PvP'],
    notableSettlements: ['Wilderness Volcano', 'Mage Arena', 'Chaos Temple', 'Edgeville'],
  },
};

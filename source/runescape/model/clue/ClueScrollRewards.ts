/**
 * Clue Scroll Reward Item Mappings
 * Organizes all clue scroll rewards by tier with their correct rarity tiers
 * Based on official OSRS Wiki data
 */

import { Item } from '../Item/Item';
import { AdamantPlatebody } from '../Item/all/AdamantPlatebody';
import { AdamantPlatelegs } from '../Item/all/AdamantPlatelegs';
import { AdamantShieldG } from '../Item/all/AdamantShieldG';
import { AirRune } from '../Item/all/AirRune';
import { AmuletOfMagic } from '../Item/all/AmuletOfMagic';
import { AmuletOfMagicT } from '../Item/all/AmuletOfMagicT';
import { AmuletOfPowerT } from '../Item/all/AmuletOfPowerT';
import { AmuletOfTheVoid } from '../Item/all/AmuletOfTheVoid';
import { AncestralRobeBottom } from '../Item/all/AncestralRobeBottom';
import { AncestralRobeTop } from '../Item/all/AncestralRobeTop';
import { BlackAxe } from '../Item/all/BlackAxe';
import { BlackBattleaxe } from '../Item/all/BlackBattleaxe';
import { BlackDagger } from '../Item/all/BlackDagger';
import { BlackFullHelm } from '../Item/all/BlackFullHelm';
import { BlackFullHelmT } from '../Item/all/BlackFullHelmT';
import { BlackLongsword } from '../Item/all/BlackLongsword';
import { BlackPlatebody } from '../Item/all/BlackPlatebody';
import { BlackPlatebodyT } from '../Item/all/BlackPlatebodyT';
import { BlackPlatelegs } from '../Item/all/BlackPlatelegs';
import { BlackPlatelegsT } from '../Item/all/BlackPlatelegsT';
import { BlackPickaxe } from '../Item/all/BlackPickaxe';
import { BodyRune } from '../Item/all/BodyRune';
import { BlueDHideBody } from '../Item/all/BlueDHideBody';
import { BlueDHideChaps } from '../Item/all/BlueDHideChaps';
import { CapeOfSkulls } from '../Item/all/CapeOfSkulls';
import { ChaosRune } from '../Item/all/ChaosRune';
import { Coins } from '../Item/all/Coins';
import { Coif } from '../Item/all/Coif';
import { CrawsBow } from '../Item/all/CrawsBow';
import { DragonBoots } from '../Item/all/DragonBoots';
import { DragonFullHelm } from '../Item/all/DragonFullHelm';
import { DragonMediumHelm } from '../Item/all/DragonMediumHelm';
import { DragonPlatebody } from '../Item/all/DragonPlatebody';
import { DragonPlatelegs } from '../Item/all/DragonPlatelegs';
import { EarthRune } from '../Item/all/EarthRune';
import { FireRune } from '../Item/all/FireRune';
import { FlaredTrousers } from '../Item/all/FlaredTrousersItem';
import { GildedFullHelm } from '../Item/all/GildedFullHelm';
import { GildedLegs } from '../Item/all/GildedLegs';
import { GildedPlatebody } from '../Item/all/GildedPlatebody';
import { GoldenApron } from '../Item/all/GoldenApron';
import { GoldenChefsHat } from '../Item/all/GoldenChefsHat';
import { GreenDHideBody } from '../Item/all/GreenDHideBody';
import { HamJoint } from '../Item/all/HamJoint';
import { IronBoots } from '../Item/all/IronBoots';
import { IronFullHelm } from '../Item/all/IronFullHelm';
import { IronFullHelmT } from '../Item/all/IronFullHelmT';
import { IronPlatebody } from '../Item/all/IronPlatebody';
import { IronPlatebodyT } from '../Item/all/IronPlatebodyT';
import { IronPlatelegs } from '../Item/all/IronPlatelegs';
import { LawRune } from '../Item/all/LawRune';
import { MasterScrollBookEmpty } from '../Item/all/MasterScrollBookEmpty';
import { MindRune } from '../Item/all/MindRune';
import { MithrilBoots } from '../Item/all/MithrilBoots';
import { MithrilFullHelm } from '../Item/all/MithrilFullHelm';
import { MithrilPlatebody } from '../Item/all/MithrilPlatebody';
import { MithrilPlatelegs } from '../Item/all/MithrilPlatelegs';
import { MithrilShieldT } from '../Item/all/MithrilShieldT';
import { MonksRobeG } from '../Item/all/MonksRobeG';
import { MonksRobeTopG } from '../Item/all/MonksRobeTopG';
import { NatureRune } from '../Item/all/NatureRune';
import { RainBow } from '../Item/all/RainBow';
import { RangerBoots } from '../Item/all/RangerBoots';
import { RangerGloves } from '../Item/all/RangerGloves';
import { RangerLegs } from '../Item/all/RangerLegs';
import { RangerTunic } from '../Item/all/RangerTunic';
import { RedDHideBody } from '../Item/all/RedDHideBody';
import { RedDHideChaps } from '../Item/all/RedDHideChaps';
import { RedElegantShirt } from '../Item/all/RedElegantShirt';
import { RuneFullHelm } from '../Item/all/RuneFullHelm';
import { RuneFullHelmT } from '../Item/all/RuneFullHelmT';
import { RuneMediumHelm } from '../Item/all/RuneMediumHelm';
import { RunePlatebody } from '../Item/all/RunePlatebody';
import { RunePlatebodyT } from '../Item/all/RunePlatebodyT';
import { RunePlatelegs } from '../Item/all/RunePlatelegs';
import { RuniteBar } from '../Item/all/RuniteBar';
import { Salmon } from '../Item/all/Salmon';
import { StaffOfAir } from '../Item/all/StaffOfAir';
import { StaffOfBobTheCat } from '../Item/all/StaffOfBobTheCat';
import { SteelBoots } from '../Item/all/SteelBoots';
import { SteelFullHelm } from '../Item/all/SteelFullHelm';
import { SteelFullHelmT } from '../Item/all/SteelFullHelmT';
import { SteelPickaxe } from '../Item/all/SteelPickaxe';
import { SteelPlatebody } from '../Item/all/SteelPlatebody';
import { SteelPlatebodyT } from '../Item/all/SteelPlatebodyT';
import { SteelPlatelegs } from '../Item/all/SteelPlatelegs';
import { StudiedBody } from '../Item/all/StudiedBody';
import { StuddedChaps } from '../Item/all/StuddedChaps';
import { TeamCapeI } from '../Item/all/TeamCapeI';
import { TeamCapeX } from '../Item/all/TeamCapeX';
import { TeamCapeZero } from '../Item/all/TeamCapeZero';
import { ThammaronsSceptre } from '../Item/all/ThammaronsSceptre';
import { ThirdAgeLongsword } from '../Item/all/ThirdAgeLongsword';
import { ThirdAgePlatebody } from '../Item/all/ThirdAgePlatebody';
import { ThirdAgePlatelegs } from '../Item/all/ThirdAgePlatelegs';
import { TreasonousRing } from '../Item/all/TreasonousRing';
import { Trout } from '../Item/all/Trout';
import { TwistedBow } from '../Item/all/TwistedBow';
import { UncutDiamond } from '../Item/all/UncutDiamond';
import { UncutEmerald } from '../Item/all/UncutEmerald';
import { UncutRuby } from '../Item/all/UncutRuby';
import { UncutSapphire } from '../Item/all/UncutSapphire';
import { WaterRune } from '../Item/all/WaterRune';
import { WillowCompBow } from '../Item/all/WillowCompBow';
import { WillowLongbow } from '../Item/all/WillowLongbow';
import { WillowShortbow } from '../Item/all/WillowShortbow';
import { WoodenShieldG } from '../Item/all/WoodenShieldG';

/**
 * Reward odds mapping for Beginner clue scrolls
 * Beginner caskets have a three-tier table structure based on wiki data:
 * https://oldschool.runescape.wiki/w/Reward_casket_(beginner)
 *
 * Key mechanics:
 * - Caskets contain 1-3 items (weighted towards 2)
 * - Unique/Cabbage roll: 1/12 (41/492)
 *   - 50% Cabbage (5-9 noted) at 1/24 overall
 *   - 50% Specific unique at 1/360 overall (1/15 items)
 * - Black items table: 11/492 (18 items at 1/805.1 each, or 11/8856)
 * - Common items: 440/492 (weapons, armor, runes, misc food)
 *
 * Average loot value per roll: 1,427 gp
 * Average casket value: 2,854 gp (2 rolls average)
 * Average clues for all uniques: 597
 */

interface RewardTable {
  [itemName: string]: { item: Item; rarity: number };
}

/**
 * Unique items table - rolled 1/12 chance, then 1/15 of unique portion
 * Overall rarity per item: 1/360
 * Source: https://oldschool.runescape.wiki/w/Reward_casket_(beginner)#Beginner_clue_uniques
 */
const BEGINNER_UNIQUE_ITEMS: RewardTable = {
  'Mole slippers': { item: UncutDiamond, rarity: 360 }, // Placeholder - 154,996 gp
  'Frog slippers': { item: UncutDiamond, rarity: 360 }, // Placeholder - 36,505 gp
  'Bear feet': { item: UncutDiamond, rarity: 360 }, // Placeholder - 19,600 gp
  'Demon feet': { item: UncutDiamond, rarity: 360 }, // Placeholder - 31,406 gp
  'Jester cape': { item: UncutDiamond, rarity: 360 }, // Placeholder - 15,561 gp
  'Shoulder parrot': { item: UncutDiamond, rarity: 360 }, // Placeholder - 84,055 gp
  "Monk's robe top (t)": { item: UncutDiamond, rarity: 360 }, // Placeholder - 20,771 gp
  "Monk's robe (t)": { item: UncutDiamond, rarity: 360 }, // Placeholder - 8,358 gp
  'Amulet of defence (t)': { item: UncutDiamond, rarity: 360 }, // Placeholder - 2,468 gp
  'Sandwich lady hat': { item: UncutDiamond, rarity: 360 }, // Placeholder - 5,089 gp
  'Sandwich lady top': { item: UncutDiamond, rarity: 360 }, // Placeholder - 4,397 gp
  'Sandwich lady bottom': { item: UncutDiamond, rarity: 360 }, // Placeholder - 2,435 gp
  'Rune scimitar ornament kit (guthix)': { item: UncutDiamond, rarity: 360 }, // Placeholder - 3,499 gp
  'Rune scimitar ornament kit (saradomin)': { item: UncutDiamond, rarity: 360 }, // Placeholder - 3,361 gp
  'Rune scimitar ornament kit (zamorak)': { item: UncutDiamond, rarity: 360 }, // Placeholder - 5,262 gp
};

/**
 * Cabbage from unique roll (50% chance when hitting 1/12 unique table)
 * Overall rarity: 1/24
 */
const BEGINNER_CABBAGE_TABLE: RewardTable = {
  'Cabbage': { item: UncutDiamond, rarity: 24 }, // Placeholder
};

/**
 * Black items table - 11/492 chance to roll, then 1/18 for each item
 * Overall rarity per item: 1/805.1 (11/8856)
 * Source: https://oldschool.runescape.wiki/w/Reward_casket_(beginner)#Black_items_table
 */
const BEGINNER_BLACK_ITEMS_TABLE: RewardTable = {
  'Black 2h sword': { item: BlackAxe, rarity: 805 }, // Placeholder
  'Black axe': { item: BlackAxe, rarity: 805 },
  'Black battleaxe': { item: BlackBattleaxe, rarity: 805 },
  'Black chainbody': { item: BlackDagger, rarity: 805 }, // Placeholder
  'Black dagger': { item: BlackDagger, rarity: 805 },
  'Black full helm': { item: BlackFullHelm, rarity: 805 },
  'Black kiteshield': { item: BlackPickaxe, rarity: 805 }, // Placeholder
  'Black longsword': { item: BlackLongsword, rarity: 805 },
  'Black mace': { item: BlackBattleaxe, rarity: 805 }, // Placeholder
  'Black med helm': { item: BlackFullHelm, rarity: 805 }, // Placeholder
  'Black pickaxe': { item: BlackPickaxe, rarity: 805 },
  'Black platebody': { item: BlackPlatebody, rarity: 805 },
  'Black plateskirt': { item: BlackPlatelegs, rarity: 805 }, // Placeholder
  'Black platelegs': { item: BlackPlatelegs, rarity: 805 },
  'Black sq shield': { item: BlackPickaxe, rarity: 805 }, // Placeholder
  'Black scimitar': { item: BlackLongsword, rarity: 805 }, // Placeholder
  'Black sword': { item: BlackLongsword, rarity: 805 }, // Placeholder
  'Black warhammer': { item: BlackBattleaxe, rarity: 805 }, // Placeholder
};

/**
 * Common items table - 440/492 of all rolls
 * Includes weapons, armor, runes, ammunition, and food
 * Source: https://oldschool.runescape.wiki/w/Reward_casket_(beginner)#Weapons_and_armour
 */
const BEGINNER_COMMON_ITEMS_TABLE: RewardTable = {
  // Weapons
  'Shortbow': { item: WillowShortbow, rarity: 45 }, // Placeholder
  'Longbow': { item: WillowLongbow, rarity: 45 }, // Placeholder
  'Oak shortbow': { item: WillowShortbow, rarity: 45 }, // Placeholder
  'Oak longbow': { item: WillowLongbow, rarity: 45 }, // Placeholder
  'Iron pickaxe': { item: SteelPickaxe, rarity: 45 }, // Placeholder
  'Staff of air': { item: StaffOfAir, rarity: 45 },
  'Staff of water': { item: StaffOfAir, rarity: 45 }, // Placeholder
  'Staff of earth': { item: StaffOfAir, rarity: 45 }, // Placeholder
  'Staff of fire': { item: StaffOfAir, rarity: 45 }, // Placeholder

  // Steel armor
  'Steel full helm': { item: SteelFullHelm, rarity: 45 },
  'Steel platebody': { item: SteelPlatebody, rarity: 45 },
  'Steel platelegs': { item: SteelPlatelegs, rarity: 45 },
  'Steel plateskirt': { item: SteelPlatelegs, rarity: 45 }, // Placeholder
  'Steel longsword': { item: BlackLongsword, rarity: 45 }, // Placeholder
  'Steel dagger': { item: BlackDagger, rarity: 45 }, // Placeholder
  'Steel axe': { item: BlackAxe, rarity: 45 }, // Placeholder
  'Steel battleaxe': { item: BlackBattleaxe, rarity: 45 },

  // Leather armor
  'Leather cowl': { item: Coif, rarity: 45 }, // Placeholder
  'Leather body': { item: Coif, rarity: 45 }, // Placeholder
  'Leather chaps': { item: StuddedChaps, rarity: 45 }, // Placeholder
  'Leather vambraces': { item: Coif, rarity: 45 }, // Placeholder
  'Hardleather body': { item: StudiedBody, rarity: 45 }, // Placeholder

  // Wizard robes
  'Blue wizard hat': { item: Coif, rarity: 45 }, // Placeholder
  'Blue wizard robe': { item: StudiedBody, rarity: 45 }, // Placeholder
  'Wizard hat': { item: Coif, rarity: 45 }, // Placeholder
  'Black robe': { item: StudiedBody, rarity: 45 }, // Placeholder

  // Runes - quantities vary (15-35 or 2-9 or 2-7 noted)
  'Air rune': { item: AirRune, rarity: 45 },
  'Mind rune': { item: MindRune, rarity: 45 },
  'Water rune': { item: WaterRune, rarity: 45 },
  'Earth rune': { item: EarthRune, rarity: 45 },
  'Fire rune': { item: FireRune, rarity: 45 },
  'Body rune': { item: BodyRune, rarity: 45 },
  'Chaos rune': { item: ChaosRune, rarity: 45 },
  'Nature rune': { item: NatureRune, rarity: 45 },
  'Law rune': { item: LawRune, rarity: 45 },

  // Ammunition
  'Bronze arrow': { item: WillowShortbow, rarity: 45 }, // Placeholder
  'Iron arrow': { item: WillowShortbow, rarity: 45 }, // Placeholder

  // Food
  'Shrimps': { item: Salmon, rarity: 45 }, // Placeholder
  'Sardine': { item: Salmon, rarity: 45 }, // Placeholder
  'Herring': { item: Salmon, rarity: 45 }, // Placeholder
};

/**
 * Beginner rewards organized by table structure
 * Table weights define the probability of selecting each table per roll
 *
 * Weights represent proportions that sum to 492:
 * - Unique/Cabbage: 41 weight = 1/12 chance (41/492)
 * - Black items: 11 weight = 11/492 chance
 * - Common items: 440 weight = 440/492 chance
 */
export const BEGINNER_REWARDS = {
  tables: [
    {
      name: 'unique',
      weight: 41, // 1/12 overall chance
      items: {
        ...BEGINNER_UNIQUE_ITEMS,
        ...BEGINNER_CABBAGE_TABLE,
      },
      description: 'Unique items and cabbage table (1/12)',
    },
    {
      name: 'black',
      weight: 11, // 11/492 chance
      items: BEGINNER_BLACK_ITEMS_TABLE,
      description: 'Black items table',
    },
    {
      name: 'common',
      weight: 440, // 440/492 chance
      items: BEGINNER_COMMON_ITEMS_TABLE,
      description: 'Weapons, armor, runes, and food',
    },
  ] as Array<{
    name: string;
    weight: number;
    items: RewardTable;
    description?: string;
  }>,
  // Flattened view for backward compatibility
  flattened: {
    ...BEGINNER_UNIQUE_ITEMS,
    ...BEGINNER_CABBAGE_TABLE,
    ...BEGINNER_BLACK_ITEMS_TABLE,
    ...BEGINNER_COMMON_ITEMS_TABLE,
  },
};

/**
 * Reward odds mapping for Easy clue scrolls
 * Easy caskets have a three-tier table structure based on wiki data:
 * https://oldschool.runescape.wiki/w/Reward_casket_(easy)
 *
 * Key mechanics:
 * - Caskets contain 2-4 items (weighted distribution)
 * - Easy clue uniques: 122 items with probabilities 247/1080 (22.9%)
 * - Standard table: Weapons, armor, runes, food
 * - Shared items: Pages, blessings, firelighters, teleports
 * - Master clue scroll: 1/50 chance (adds 18,997 gp expected value)
 * - Average per roll value: 11,095 gp
 * - Average casket value (3 rolls): 33,287 gp → 52,285 gp with master clue odds
 */

/**
 * Easy clue unique items table
 * 122 unique items at various rarities
 * Overall unique probability: 247/1080 (22.9%)
 * Source: https://oldschool.runescape.wiki/w/Reward_casket_(easy)#Easy_clue_uniques
 */
const EASY_UNIQUE_ITEMS: RewardTable = {
  'Willow comp bow': { item: WillowCompBow, rarity: 360 },
  'Amulet of magic (t)': { item: AmuletOfMagicT, rarity: 360 },
  // 1/1404 items (using placeholders for missing classes)
  'Wooden shield (g)': { item: WoodenShieldG, rarity: 1404 },
  'Black full helm (t)': { item: BlackFullHelmT, rarity: 1404 },
  'Black platebody (t)': { item: BlackPlatebodyT, rarity: 1404 },
  'Black platelegs (t)': { item: BlackPlatelegsT, rarity: 1404 },
  'Steel full helm (t)': { item: SteelFullHelmT, rarity: 1404 },
  'Steel platebody (t)': { item: SteelPlatebodyT, rarity: 1404 },
  'Iron full helm (t)': { item: IronFullHelmT, rarity: 1404 },
  'Iron platebody (t)': { item: IronPlatebodyT, rarity: 1404 },
  // Additional 1/1404 items (using placeholders)
  'Black full helm (g)': { item: BlackFullHelm, rarity: 1404 },
  'Black platebody (g)': { item: BlackPlatebody, rarity: 1404 },
  'Black platelegs (g)': { item: BlackPlatelegs, rarity: 1404 },
  'Black shield (h1)': { item: BlackPickaxe, rarity: 1404 },
  'Black helm (h1)': { item: BlackFullHelm, rarity: 1404 },
  'Flared trousers': { item: FlaredTrousers, rarity: 1404 },
  'Black cane': { item: BlackLongsword, rarity: 1404 },
  'Staff of bob the cat': { item: StaffOfBobTheCat, rarity: 1404 },
  'Amulet of power (t)': { item: AmuletOfPowerT, rarity: 1404 },
  'Ham joint': { item: HamJoint, rarity: 1404 },
  'Rain bow': { item: RainBow, rarity: 1404 },
  'Leather body (g)': { item: StudiedBody, rarity: 1404 },
  'Blue wizard hat (g)': { item: Coif, rarity: 1404 },
  'Blue wizard robe (g)': { item: StudiedBody, rarity: 1404 },
  'Black wizard hat (g)': { item: Coif, rarity: 1404 },
  'Black wizard robe (g)': { item: StudiedBody, rarity: 1404 },
  'Saradomin robe top': { item: StudiedBody, rarity: 1404 },
  'Guthix robe top': { item: StudiedBody, rarity: 1404 },
  'Zamorak robe top': { item: StudiedBody, rarity: 1404 },
  'Ancient robe top': { item: StudiedBody, rarity: 1404 },
  'Armadyl robe top': { item: StudiedBody, rarity: 1404 },
  'Bandos robe top': { item: StudiedBody, rarity: 1404 },
  'Bob\'s red shirt': { item: StudiedBody, rarity: 1404 },
  'Highwayman mask': { item: Coif, rarity: 1404 },
  'Blue beret': { item: Coif, rarity: 1404 },
  'Black beret': { item: Coif, rarity: 1404 },
  'A powdered wig': { item: Coif, rarity: 1404 },
  'Beanie': { item: Coif, rarity: 1404 },
  'Imp mask': { item: Coif, rarity: 1404 },
  'Goblin mask': { item: Coif, rarity: 1404 },
  'Sleeping cap': { item: Coif, rarity: 1404 },
  // 1/2808 items
  'Golden chef\'s hat': { item: GoldenChefsHat, rarity: 2808 },
  'Golden apron': { item: GoldenApron, rarity: 2808 },
  'Red elegant shirt': { item: RedElegantShirt, rarity: 2808 },
  // 1/5616 items
  'Team cape zero': { item: TeamCapeZero, rarity: 5616 },
  'Team cape i': { item: TeamCapeI, rarity: 5616 },
  'Team cape x': { item: TeamCapeX, rarity: 5616 },
  'Cape of skulls': { item: CapeOfSkulls, rarity: 5616 },
  // 1/14040 items
  'Monk\'s robe top (g)': { item: MonksRobeTopG, rarity: 14040 },
  'Monk\'s robe (g)': { item: MonksRobeG, rarity: 14040 },
};

/**
 * Standard table for easy clues
 * Weapons, armor, runes, and food
 * Rarity: 1/36 (11/396)
 * Source: https://oldschool.runescape.wiki/w/Reward_casket_(easy)#Standard_table
 */
const EASY_STANDARD_TABLE: RewardTable = {
  // Weapons and armor
  'Black full helm': { item: BlackFullHelm, rarity: 36 },
  'Black platebody': { item: BlackPlatebody, rarity: 36 },
  'Black platelegs': { item: BlackPlatelegs, rarity: 36 },
  'Black longsword': { item: BlackLongsword, rarity: 36 },
  'Black battleaxe': { item: BlackBattleaxe, rarity: 36 },
  'Black axe': { item: BlackAxe, rarity: 36 },
  'Black dagger': { item: BlackDagger, rarity: 36 },
  'Steel pickaxe': { item: SteelPickaxe, rarity: 36 },
  'Black pickaxe': { item: BlackPickaxe, rarity: 36 },
  'Coif': { item: Coif, rarity: 36 },
  'Studded body': { item: StudiedBody, rarity: 36 },
  'Studded chaps': { item: StuddedChaps, rarity: 36 },
  'Willow shortbow': { item: WillowShortbow, rarity: 36 },
  'Staff of air': { item: StaffOfAir, rarity: 36 },
  // Higher rarity weapons
  'Willow longbow': { item: WillowLongbow, rarity: 40 },
  'Amulet of magic': { item: AmuletOfMagic, rarity: 40 },
  // Runes
  'Air rune': { item: AirRune, rarity: 36 },
  'Mind rune': { item: MindRune, rarity: 36 },
  'Water rune': { item: WaterRune, rarity: 36 },
  'Earth rune': { item: EarthRune, rarity: 36 },
  'Fire rune': { item: FireRune, rarity: 36 },
  'Body rune': { item: BodyRune, rarity: 36 },
  'Chaos rune': { item: ChaosRune, rarity: 36 },
  'Nature rune': { item: NatureRune, rarity: 36 },
  'Law rune': { item: LawRune, rarity: 36 },
  // Food
  'Trout': { item: Trout, rarity: 36 },
  'Salmon': { item: Salmon, rarity: 36 },
};

/**
 * Shared treasure trail items
 * Items shared across multiple clue tiers
 * Various rarities from 1/36 to 1/14040
 */
const EASY_SHARED_ITEMS: RewardTable = {
  'Coins': { item: Coins, rarity: 36 },
  'Purple sweets': { item: Coins, rarity: 36 }, // Placeholder for sweets
  'Master scroll book (empty)': { item: MasterScrollBookEmpty, rarity: 792 },
  // Pages (all at 1/864 when on standard table)
  'Saradomin page 1': { item: Coins, rarity: 864 }, // Placeholder
  'Zamorak page 1': { item: Coins, rarity: 864 }, // Placeholder
  'Guthix page 1': { item: Coins, rarity: 864 }, // Placeholder
  'Bandos page 1': { item: Coins, rarity: 864 }, // Placeholder
  'Armadyl page 1': { item: Coins, rarity: 864 }, // Placeholder
  'Ancient page 1': { item: Coins, rarity: 864 }, // Placeholder
};

/**
 * Master clue scroll
 * 1/50 chance per casket opening
 * Tertiary reward, not part of main loot table
 */
const EASY_MASTER_CLUE: RewardTable = {
  'Clue scroll (master)': { item: Coins, rarity: 50 }, // Placeholder for master clue
};

/**
 * Easy rewards organized by table structure
 * Table weights represent the proportion of rolls hitting each table
 *
 * Beginner uses 1080 total weight units:
 * - Unique/standard items dominate
 * - Master clue is separate 1/50 mechanic
 */
export const EASY_REWARDS = {
  tables: [
    {
      name: 'unique',
      weight: 247, // ~23% of rolls hit unique items (247/1080)
      items: EASY_UNIQUE_ITEMS,
      description: 'Easy clue unique items (122 items)',
    },
    {
      name: 'standard',
      weight: 833, // Standard weapons, armor, runes, food (remaining weight)
      items: EASY_STANDARD_TABLE,
      description: 'Standard weapons, armor, runes, food (1/36 base)',
    },
    {
      name: 'shared',
      weight: 0, // Blended into other tables
      items: EASY_SHARED_ITEMS,
      description: 'Shared treasure trail items (pages, blessings, etc)',
    },
    {
      name: 'master',
      weight: 0, // Separate 1/50 roll
      items: EASY_MASTER_CLUE,
      description: 'Master clue scroll (1/50 special roll)',
    },
  ] as Array<{
    name: string;
    weight: number;
    items: RewardTable;
    description?: string;
  }>,
  // Flattened view for backward compatibility
  flattened: {
    ...EASY_UNIQUE_ITEMS,
    ...EASY_STANDARD_TABLE,
    ...EASY_SHARED_ITEMS,
    ...EASY_MASTER_CLUE,
  },
};

/**
 * Reward odds mapping for Medium clue scrolls
 * https://oldschool.runescape.wiki/w/Reward_casket_(medium)
 *
 * Key mechanics:
 * - Caskets contain 3-5 items (weighted distribution)
 * - Medium clue uniques: 1/10 per reward roll (100+ items)
 * - Standard table: Weapons, armor, runes, food (1/34.1 base rarity)
 * - Shared items: Coins, purple sweets, scrolls, teleports, blessings, pages
 * - Master clue scroll: 1/30 chance (adds 31,662 gp expected value)
 * - Average loot per roll: 30,860 gp
 * - Average casket value (4 rolls): 123,443 gp → 155,106 gp with master scroll odds
 */

/**
 * Medium clue unique items table
 * 100+ unique items at various rarities
 * Overall unique probability: 1/10 per reward roll
 * Source: https://oldschool.runescape.wiki/w/Reward_casket_(medium)#Medium_clue_uniques
 */
const MEDIUM_UNIQUE_ITEMS: RewardTable = {
  'Gnomish firelighter': { item: UncutDiamond, rarity: 341 },
  'Yew comp bow': { item: RainBow, rarity: 341 },
  'Strength amulet (t)': { item: AmuletOfMagicT, rarity: 341 },
  'Ranger boots': { item: RangerBoots, rarity: 1133 },
  'Wizard boots': { item: IronBoots, rarity: 1133 },
  'Holy sandals': { item: IronBoots, rarity: 1133 },
  'Spiked manacles': { item: IronBoots, rarity: 1133 },
  'Climbing boots (g)': { item: IronBoots, rarity: 1133 },
  'Adamant full helm (t)': { item: AdamantShieldG, rarity: 1133 },
  'Adamant platebody (t)': { item: AdamantPlatebody, rarity: 1133 },
  'Adamant platelegs (t)': { item: AdamantPlatelegs, rarity: 1133 },
  'Adamant plateskirt (t)': { item: AdamantPlatelegs, rarity: 1133 },
  'Adamant kiteshield (t)': { item: AdamantShieldG, rarity: 1133 },
  'Adamant full helm (g)': { item: AdamantShieldG, rarity: 1133 },
  'Adamant platebody (g)': { item: AdamantPlatebody, rarity: 1133 },
  'Adamant platelegs (g)': { item: AdamantPlatelegs, rarity: 1133 },
  'Adamant plateskirt (g)': { item: AdamantPlatelegs, rarity: 1133 },
  'Adamant kiteshield (g)': { item: AdamantShieldG, rarity: 1133 },
  'Adamant shield (h1)': { item: AdamantShieldG, rarity: 1133 },
  'Adamant shield (h2)': { item: AdamantShieldG, rarity: 1133 },
  'Adamant shield (h3)': { item: AdamantShieldG, rarity: 1133 },
  'Adamant shield (h4)': { item: AdamantShieldG, rarity: 1133 },
  'Adamant shield (h5)': { item: AdamantShieldG, rarity: 1133 },
  'Adamant helm (h1)': { item: AdamantShieldG, rarity: 1133 },
  'Adamant helm (h2)': { item: AdamantShieldG, rarity: 1133 },
  'Adamant helm (h3)': { item: AdamantShieldG, rarity: 1133 },
  'Adamant helm (h4)': { item: AdamantShieldG, rarity: 1133 },
  'Adamant helm (h5)': { item: AdamantShieldG, rarity: 1133 },
  'Adamant platebody (h1)': { item: AdamantPlatebody, rarity: 1133 },
  'Adamant platebody (h2)': { item: AdamantPlatebody, rarity: 1133 },
  'Adamant platebody (h3)': { item: AdamantPlatebody, rarity: 1133 },
  'Adamant platebody (h4)': { item: AdamantPlatebody, rarity: 1133 },
  'Adamant platebody (h5)': { item: AdamantPlatebody, rarity: 1133 },
  'Mithril full helm (g)': { item: MithrilFullHelm, rarity: 1133 },
  'Mithril platebody (g)': { item: MithrilPlatebody, rarity: 1133 },
  'Mithril platelegs (g)': { item: MithrilPlatelegs, rarity: 1133 },
  'Mithril plateskirt (g)': { item: MithrilPlatelegs, rarity: 1133 },
  'Mithril kiteshield (g)': { item: MithrilShieldT, rarity: 1133 },
  'Mithril full helm (t)': { item: MithrilFullHelm, rarity: 1133 },
  'Mithril platebody (t)': { item: MithrilPlatebody, rarity: 1133 },
  'Mithril platelegs (t)': { item: MithrilPlatelegs, rarity: 1133 },
  'Mithril plateskirt (t)': { item: MithrilPlatelegs, rarity: 1133 },
  'Mithril kiteshield (t)': { item: MithrilShieldT, rarity: 1133 },
  'Green d\'hide body (g)': { item: GreenDHideBody, rarity: 1133 },
  'Green d\'hide body (t)': { item: GreenDHideBody, rarity: 1133 },
  'Green d\'hide chaps (g)': { item: GreenDHideBody, rarity: 1133 },
  'Green d\'hide chaps (t)': { item: GreenDHideBody, rarity: 1133 },
  'Saradomin mitre': { item: UncutDiamond, rarity: 1133 },
  'Saradomin cloak': { item: UncutDiamond, rarity: 1133 },
  'Guthix mitre': { item: UncutDiamond, rarity: 1133 },
  'Guthix cloak': { item: UncutDiamond, rarity: 1133 },
  'Zamorak mitre': { item: UncutDiamond, rarity: 1133 },
  'Zamorak cloak': { item: UncutDiamond, rarity: 1133 },
  'Ancient mitre': { item: UncutDiamond, rarity: 1133 },
  'Ancient cloak': { item: UncutDiamond, rarity: 1133 },
  'Ancient stole': { item: UncutDiamond, rarity: 1133 },
  'Ancient crozier': { item: UncutDiamond, rarity: 1133 },
  'Armadyl mitre': { item: UncutDiamond, rarity: 1133 },
  'Armadyl cloak': { item: UncutDiamond, rarity: 1133 },
  'Armadyl stole': { item: UncutDiamond, rarity: 1133 },
  'Armadyl crozier': { item: UncutDiamond, rarity: 1133 },
  'Bandos mitre': { item: UncutDiamond, rarity: 1133 },
  'Bandos cloak': { item: UncutDiamond, rarity: 1133 },
  'Bandos stole': { item: UncutDiamond, rarity: 1133 },
  'Bandos crozier': { item: UncutDiamond, rarity: 1133 },
  'Red boater': { item: UncutDiamond, rarity: 1133 },
  'Green boater': { item: UncutDiamond, rarity: 1133 },
  'Orange boater': { item: UncutDiamond, rarity: 1133 },
  'Black boater': { item: UncutDiamond, rarity: 1133 },
  'Blue boater': { item: UncutDiamond, rarity: 1133 },
  'Pink boater': { item: UncutDiamond, rarity: 1133 },
  'Purple boater': { item: UncutDiamond, rarity: 1133 },
  'White boater': { item: UncutDiamond, rarity: 1133 },
  'Red headband': { item: UncutDiamond, rarity: 1133 },
  'Black headband': { item: UncutDiamond, rarity: 1133 },
  'Brown headband': { item: UncutDiamond, rarity: 1133 },
  'White headband': { item: UncutDiamond, rarity: 1133 },
  'Blue headband': { item: UncutDiamond, rarity: 1133 },
  'Gold headband': { item: UncutDiamond, rarity: 1133 },
  'Pink headband': { item: UncutDiamond, rarity: 1133 },
  'Green headband': { item: UncutDiamond, rarity: 1133 },
  'Crier hat': { item: UncutDiamond, rarity: 1133 },
  'Crier coat': { item: UncutDiamond, rarity: 1133 },
  'Crier bell': { item: UncutDiamond, rarity: 1133 },
  'Adamant cane': { item: UncutDiamond, rarity: 1133 },
  'Arceuus banner': { item: UncutDiamond, rarity: 1133 },
  'Piscarilius banner': { item: UncutDiamond, rarity: 1133 },
  'Hosidius banner': { item: UncutDiamond, rarity: 1133 },
  'Shayzien banner': { item: UncutDiamond, rarity: 1133 },
  'Lovakengj banner': { item: UncutDiamond, rarity: 1133 },
  'Cabbage round shield': { item: UncutDiamond, rarity: 1133 },
  'Cat mask': { item: UncutDiamond, rarity: 1133 },
  'Penguin mask': { item: UncutDiamond, rarity: 1133 },
  'Leprechaun hat': { item: UncutDiamond, rarity: 1133 },
  'Black leprechaun hat': { item: UncutDiamond, rarity: 1133 },
  'Wolf mask': { item: UncutDiamond, rarity: 1133 },
  'Wolf cloak': { item: UncutDiamond, rarity: 1133 },
  'Black unicorn mask': { item: UncutDiamond, rarity: 2266 },
  'White unicorn mask': { item: UncutDiamond, rarity: 2266 },
};

/**
 * Medium tier standard table
 * Weapons, armor, runes, food at 1/34.1 base rarity
 */
const MEDIUM_STANDARD_TABLE: RewardTable = {
  'Adamant full helm': { item: AdamantShieldG, rarity: 34 },
  'Adamant platebody': { item: AdamantPlatebody, rarity: 34 },
  'Adamant platelegs': { item: AdamantPlatelegs, rarity: 34 },
  'Adamant longsword': { item: BlackLongsword, rarity: 34 },
  'Adamant dagger': { item: BlackDagger, rarity: 34 },
  'Adamant battleaxe': { item: BlackBattleaxe, rarity: 34 },
  'Adamant axe': { item: BlackAxe, rarity: 34 },
  'Adamant pickaxe': { item: UncutDiamond, rarity: 34 },
  'Green d\'hide body': { item: GreenDHideBody, rarity: 34 },
  'Green d\'hide chaps': { item: GreenDHideBody, rarity: 34 },
  'Yew shortbow': { item: WillowShortbow, rarity: 34 },
  'Fire battlestaff': { item: StaffOfAir, rarity: 34 },
  'Yew longbow': { item: WillowLongbow, rarity: 38 },
  'Amulet of power': { item: AmuletOfMagic, rarity: 38 },
  'Air rune': { item: AirRune, rarity: 34 },
  'Mind rune': { item: MindRune, rarity: 34 },
  'Water rune': { item: WaterRune, rarity: 34 },
  'Earth rune': { item: EarthRune, rarity: 34 },
  'Fire rune': { item: FireRune, rarity: 34 },
  'Chaos rune': { item: ChaosRune, rarity: 34 },
  'Nature rune': { item: NatureRune, rarity: 34 },
  'Law rune': { item: LawRune, rarity: 34 },
  'Lobster': { item: HamJoint, rarity: 34 },
  'Swordfish': { item: Salmon, rarity: 34 },
};

/**
 * Medium tier shared treasure trail items
 * Coins, purple sweets, scrolls, teleports, blessings, pages at various rarities
 */
const MEDIUM_SHARED_ITEMS: RewardTable = {
  'Coins': { item: Coins, rarity: 34 },
  'Purple sweets': { item: UncutDiamond, rarity: 97 },
  'Red firelighter': { item: UncutDiamond, rarity: 189 },
  'Green firelighter': { item: UncutDiamond, rarity: 189 },
  'Blue firelighter': { item: UncutDiamond, rarity: 189 },
  'Purple firelighter': { item: UncutDiamond, rarity: 189 },
  'White firelighter': { item: UncutDiamond, rarity: 189 },
  'Charge dragonstone jewellery scroll': { item: MasterScrollBookEmpty, rarity: 429 },
  'Nardah teleport': { item: MasterScrollBookEmpty, rarity: 429 },
  'Mos le\'harmless teleport': { item: MasterScrollBookEmpty, rarity: 429 },
  'Mort\'ton teleport': { item: MasterScrollBookEmpty, rarity: 429 },
  'Feldip hills teleport': { item: MasterScrollBookEmpty, rarity: 429 },
  'Lunar isle teleport': { item: MasterScrollBookEmpty, rarity: 429 },
  'Digsite teleport': { item: MasterScrollBookEmpty, rarity: 429 },
  'Piscatoris teleport': { item: MasterScrollBookEmpty, rarity: 429 },
  'Pest control teleport': { item: MasterScrollBookEmpty, rarity: 429 },
  'Tai bwo wannai teleport': { item: MasterScrollBookEmpty, rarity: 429 },
  'Lumberyard teleport': { item: MasterScrollBookEmpty, rarity: 429 },
  'Iorwerth camp teleport': { item: MasterScrollBookEmpty, rarity: 429 },
  'Holy blessing': { item: UncutDiamond, rarity: 682 },
  'Unholy blessing': { item: UncutDiamond, rarity: 682 },
  'Peaceful blessing': { item: UncutDiamond, rarity: 682 },
  'War blessing': { item: UncutDiamond, rarity: 682 },
  'Honourable blessing': { item: UncutDiamond, rarity: 682 },
  'Ancient blessing': { item: UncutDiamond, rarity: 682 },
  'Master scroll book (empty)': { item: MasterScrollBookEmpty, rarity: 750 },
  'Saradomin page 1': { item: UncutDiamond, rarity: 818 },
  'Saradomin page 2': { item: UncutDiamond, rarity: 818 },
  'Saradomin page 3': { item: UncutDiamond, rarity: 818 },
  'Saradomin page 4': { item: UncutDiamond, rarity: 818 },
  'Zamorak page 1': { item: UncutDiamond, rarity: 818 },
  'Zamorak page 2': { item: UncutDiamond, rarity: 818 },
  'Zamorak page 3': { item: UncutDiamond, rarity: 818 },
  'Zamorak page 4': { item: UncutDiamond, rarity: 818 },
  'Guthix page 1': { item: UncutDiamond, rarity: 818 },
  'Guthix page 2': { item: UncutDiamond, rarity: 818 },
  'Guthix page 3': { item: UncutDiamond, rarity: 818 },
  'Guthix page 4': { item: UncutDiamond, rarity: 818 },
  'Bandos page 1': { item: UncutDiamond, rarity: 818 },
  'Bandos page 2': { item: UncutDiamond, rarity: 818 },
  'Bandos page 3': { item: UncutDiamond, rarity: 818 },
  'Bandos page 4': { item: UncutDiamond, rarity: 818 },
  'Armadyl page 1': { item: UncutDiamond, rarity: 818 },
  'Armadyl page 2': { item: UncutDiamond, rarity: 818 },
  'Armadyl page 3': { item: UncutDiamond, rarity: 818 },
  'Armadyl page 4': { item: UncutDiamond, rarity: 818 },
  'Ancient page 1': { item: UncutDiamond, rarity: 818 },
  'Ancient page 2': { item: UncutDiamond, rarity: 818 },
};

/**
 * Medium tier master clue scroll
 * 1/30 chance when opening a medium casket
 */
const MEDIUM_MASTER_CLUE: RewardTable = {
  'Clue scroll (master)': { item: Coins, rarity: 30 },
};

/**
 * Medium clue rewards with table-based structure
 * Weighted table system for accurate probability distribution
 */
export const MEDIUM_REWARDS = {
  tables: [
    {
      name: 'unique',
      weight: 341, // ~10% of rolls hit unique items (1/10 per roll)
      items: MEDIUM_UNIQUE_ITEMS,
      description: 'Medium clue unique items (100+ items at 1/341 base)',
    },
    {
      name: 'standard',
      weight: 306, // Standard weapons, armor, runes, food (1/34.1 base)
      items: MEDIUM_STANDARD_TABLE,
      description: 'Standard weapons, armor, runes, food (1/34.1 base)',
    },
    {
      name: 'shared',
      weight: 0, // Blended into other tables
      items: MEDIUM_SHARED_ITEMS,
      description: 'Shared treasure trail items (coins, scrolls, teleports, blessings, pages)',
    },
    {
      name: 'master',
      weight: 0, // Separate 1/30 roll
      items: MEDIUM_MASTER_CLUE,
      description: 'Master clue scroll (1/30 chance)',
    },
  ] as Array<{
    name: string;
    weight: number;
    items: RewardTable;
    description?: string;
  }>,
  // Flattened view for backward compatibility
  flattened: {
    ...MEDIUM_UNIQUE_ITEMS,
    ...MEDIUM_STANDARD_TABLE,
    ...MEDIUM_SHARED_ITEMS,
    ...MEDIUM_MASTER_CLUE,
  },
};

/**
 * Hard tier unique items
 * Major rare table items at 1/1,625 or 1/12,765 rarity
 */
const HARD_UNIQUE_ITEMS: RewardTable = {
  'Magic comp bow': { item: RainBow, rarity: 271 },
  'Amulet of glory (t4)': { item: AmuletOfMagicT, rarity: 1625 },
  'Robin hood hat': { item: UncutDiamond, rarity: 1625 },
  'Enchanted hat': { item: UncutDiamond, rarity: 1625 },
  'Enchanted top': { item: UncutDiamond, rarity: 1625 },
  'Enchanted robe': { item: UncutDiamond, rarity: 1625 },
  'Dragon boots ornament kit': { item: UncutDiamond, rarity: 1625 },
  'Rune full helm (t)': { item: RuneFullHelmT, rarity: 1625 },
  'Rune platebody (t)': { item: RunePlatebodyT, rarity: 1625 },
  'Rune platelegs (t)': { item: RunePlatelegs, rarity: 1625 },
  'Rune plateskirt (t)': { item: RunePlatelegs, rarity: 1625 },
  'Rune kiteshield (t)': { item: UncutDiamond, rarity: 1625 },
  'Rune full helm (g)': { item: RuneFullHelm, rarity: 1625 },
  'Rune platebody (g)': { item: RunePlatebody, rarity: 1625 },
  'Rune platelegs (g)': { item: RunePlatelegs, rarity: 1625 },
  'Rune plateskirt (g)': { item: RunePlatelegs, rarity: 1625 },
  'Rune kiteshield (g)': { item: UncutDiamond, rarity: 1625 },
  'Rune shield (h1)': { item: UncutDiamond, rarity: 1625 },
  'Rune shield (h2)': { item: UncutDiamond, rarity: 1625 },
  'Rune shield (h3)': { item: UncutDiamond, rarity: 1625 },
  'Rune shield (h4)': { item: UncutDiamond, rarity: 1625 },
  'Rune shield (h5)': { item: UncutDiamond, rarity: 1625 },
  'Rune helm (h1)': { item: RuneFullHelm, rarity: 1625 },
  'Rune helm (h2)': { item: RuneFullHelm, rarity: 1625 },
  'Rune helm (h3)': { item: RuneFullHelm, rarity: 1625 },
  'Rune helm (h4)': { item: RuneFullHelm, rarity: 1625 },
  'Rune helm (h5)': { item: RuneFullHelm, rarity: 1625 },
  'Saradomin full helm': { item: RuneFullHelm, rarity: 1625 },
  'Saradomin platebody': { item: RunePlatebody, rarity: 1625 },
  'Saradomin platelegs': { item: RunePlatelegs, rarity: 1625 },
  'Saradomin kiteshield': { item: UncutDiamond, rarity: 1625 },
  'Zamorak full helm': { item: RuneFullHelm, rarity: 1625 },
  'Zamorak platebody': { item: RunePlatebody, rarity: 1625 },
  'Zamorak platelegs': { item: RunePlatelegs, rarity: 1625 },
  'Zamorak kiteshield': { item: UncutDiamond, rarity: 1625 },
  'Guthix full helm': { item: RuneFullHelm, rarity: 1625 },
  'Guthix platebody': { item: RunePlatebody, rarity: 1625 },
  'Guthix platelegs': { item: RunePlatelegs, rarity: 1625 },
  'Guthix kiteshield': { item: UncutDiamond, rarity: 1625 },
  'Ancient full helm': { item: RuneFullHelm, rarity: 1625 },
  'Ancient platebody': { item: RunePlatebody, rarity: 1625 },
  'Ancient platelegs': { item: RunePlatelegs, rarity: 1625 },
  'Ancient kiteshield': { item: UncutDiamond, rarity: 1625 },
  'Armadyl full helm': { item: RuneFullHelm, rarity: 1625 },
  'Armadyl platebody': { item: RunePlatebody, rarity: 1625 },
  'Armadyl platelegs': { item: RunePlatelegs, rarity: 1625 },
  'Armadyl kiteshield': { item: UncutDiamond, rarity: 1625 },
  'Bandos full helm': { item: RuneFullHelm, rarity: 1625 },
  'Bandos platebody': { item: RunePlatebody, rarity: 1625 },
  'Bandos platelegs': { item: RunePlatelegs, rarity: 1625 },
  'Bandos kiteshield': { item: UncutDiamond, rarity: 1625 },
  'Red d\'hide body (g)': { item: RedDHideBody, rarity: 1625 },
  'Red d\'hide body (t)': { item: RedDHideBody, rarity: 1625 },
  'Red d\'hide chaps (g)': { item: RedDHideChaps, rarity: 1625 },
  'Red d\'hide chaps (t)': { item: RedDHideChaps, rarity: 1625 },
  'Blue d\'hide body (g)': { item: BlueDHideBody, rarity: 1625 },
  'Blue d\'hide body (t)': { item: BlueDHideBody, rarity: 1625 },
  'Blue d\'hide chaps (g)': { item: BlueDHideChaps, rarity: 1625 },
  'Blue d\'hide chaps (t)': { item: BlueDHideChaps, rarity: 1625 },
  'Saradomin coif': { item: UncutDiamond, rarity: 1625 },
  'Saradomin d\'hide body': { item: UncutDiamond, rarity: 1625 },
  'Saradomin chaps': { item: UncutDiamond, rarity: 1625 },
  'Saradomin bracers': { item: UncutDiamond, rarity: 1625 },
  'Saradomin d\'hide boots': { item: UncutDiamond, rarity: 1625 },
  'Guthix coif': { item: UncutDiamond, rarity: 1625 },
  'Guthix d\'hide body': { item: UncutDiamond, rarity: 1625 },
  'Guthix chaps': { item: UncutDiamond, rarity: 1625 },
  'Guthix bracers': { item: UncutDiamond, rarity: 1625 },
  'Guthix d\'hide boots': { item: UncutDiamond, rarity: 1625 },
  'Zamorak coif': { item: UncutDiamond, rarity: 1625 },
  'Zamorak d\'hide body': { item: UncutDiamond, rarity: 1625 },
  'Zamorak chaps': { item: UncutDiamond, rarity: 1625 },
  'Zamorak bracers': { item: UncutDiamond, rarity: 1625 },
  'Zamorak d\'hide boots': { item: UncutDiamond, rarity: 1625 },
  'Bandos coif': { item: UncutDiamond, rarity: 1625 },
  'Bandos d\'hide body': { item: UncutDiamond, rarity: 1625 },
  'Bandos chaps': { item: UncutDiamond, rarity: 1625 },
  'Bandos bracers': { item: UncutDiamond, rarity: 1625 },
  'Bandos d\'hide boots': { item: UncutDiamond, rarity: 1625 },
  'Armadyl coif': { item: UncutDiamond, rarity: 1625 },
  'Armadyl d\'hide body': { item: UncutDiamond, rarity: 1625 },
  'Armadyl chaps': { item: UncutDiamond, rarity: 1625 },
  'Armadyl bracers': { item: UncutDiamond, rarity: 1625 },
  'Armadyl d\'hide boots': { item: UncutDiamond, rarity: 1625 },
  'Ancient coif': { item: UncutDiamond, rarity: 1625 },
  'Ancient d\'hide body': { item: UncutDiamond, rarity: 1625 },
  'Ancient chaps': { item: UncutDiamond, rarity: 1625 },
  'Ancient bracers': { item: UncutDiamond, rarity: 1625 },
  'Ancient d\'hide boots': { item: UncutDiamond, rarity: 1625 },
  'Pirate\'s hat': { item: UncutDiamond, rarity: 1625 },
  'Red cavalier': { item: UncutDiamond, rarity: 1625 },
  'White cavalier': { item: UncutDiamond, rarity: 1625 },
  'Navy cavalier': { item: UncutDiamond, rarity: 1625 },
  'Tan cavalier': { item: UncutDiamond, rarity: 1625 },
  'Dark cavalier': { item: UncutDiamond, rarity: 1625 },
  'Black cavalier': { item: UncutDiamond, rarity: 1625 },
  'Green dragon mask': { item: UncutDiamond, rarity: 1625 },
  'Blue dragon mask': { item: UncutDiamond, rarity: 1625 },
  'Red dragon mask': { item: UncutDiamond, rarity: 1625 },
  'Black dragon mask': { item: UncutDiamond, rarity: 1625 },
  'Rune platebody (h1)': { item: RunePlatebody, rarity: 8125 },
  'Rune platebody (h2)': { item: RunePlatebody, rarity: 8125 },
  'Rune platebody (h3)': { item: RunePlatebody, rarity: 8125 },
  'Rune platebody (h4)': { item: RunePlatebody, rarity: 8125 },
  'Rune platebody (h5)': { item: RunePlatebody, rarity: 8125 },
  'Saradomin d\'hide shield': { item: UncutDiamond, rarity: 9750 },
  'Guthix d\'hide shield': { item: UncutDiamond, rarity: 9750 },
  'Zamorak d\'hide shield': { item: UncutDiamond, rarity: 9750 },
  'Bandos d\'hide shield': { item: UncutDiamond, rarity: 9750 },
  'Armadyl d\'hide shield': { item: UncutDiamond, rarity: 9750 },
  'Ancient d\'hide shield': { item: UncutDiamond, rarity: 9750 },
};

/**
 * Hard tier standard table
 * Common weapons, armor, runes, food at 1/27.1 base rarity
 */
const HARD_STANDARD_TABLE: RewardTable = {
  'Rune full helm': { item: RuneFullHelm, rarity: 27 },
  'Rune platebody': { item: RunePlatebody, rarity: 27 },
  'Rune platelegs': { item: RunePlatelegs, rarity: 27 },
  'Rune plateskirt': { item: RunePlatelegs, rarity: 27 },
  'Rune kiteshield': { item: UncutDiamond, rarity: 27 },
  'Rune longsword': { item: BlackLongsword, rarity: 27 },
  'Rune dagger': { item: BlackDagger, rarity: 27 },
  'Rune battleaxe': { item: BlackBattleaxe, rarity: 27 },
  'Rune axe': { item: BlackAxe, rarity: 27 },
  'Rune pickaxe': { item: UncutDiamond, rarity: 27 },
  'Black d\'hide body': { item: BlackFullHelm, rarity: 27 },
  'Black d\'hide chaps': { item: BlueDHideChaps, rarity: 27 },
  'Magic shortbow': { item: WillowShortbow, rarity: 27 },
  'Magic longbow': { item: WillowLongbow, rarity: 30 },
  'Nature rune': { item: NatureRune, rarity: 27 },
  'Law rune': { item: LawRune, rarity: 27 },
  'Blood rune': { item: FireRune, rarity: 27 },
  'Lobster': { item: HamJoint, rarity: 27 },
  'Shark': { item: Salmon, rarity: 27 },
};

/**
 * Hard tier shared treasure trail items
 * Coins, purple sweets, scrolls, teleports, blessings, pages
 */
const HARD_SHARED_ITEMS: RewardTable = {
  'Coins': { item: Coins, rarity: 27 },
  'Purple sweets': { item: UncutDiamond, rarity: 77 },
  'Red firelighter': { item: UncutDiamond, rarity: 135 },
  'Green firelighter': { item: UncutDiamond, rarity: 135 },
  'Blue firelighter': { item: UncutDiamond, rarity: 135 },
  'Purple firelighter': { item: UncutDiamond, rarity: 135 },
  'White firelighter': { item: UncutDiamond, rarity: 135 },
  'Charge dragonstone jewellery scroll': { item: MasterScrollBookEmpty, rarity: 341 },
  'Nardah teleport': { item: MasterScrollBookEmpty, rarity: 341 },
  'Mos le\'harmless teleport': { item: MasterScrollBookEmpty, rarity: 341 },
  'Mort\'ton teleport': { item: MasterScrollBookEmpty, rarity: 341 },
  'Feldip hills teleport': { item: MasterScrollBookEmpty, rarity: 341 },
  'Lunar isle teleport': { item: MasterScrollBookEmpty, rarity: 341 },
  'Digsite teleport': { item: MasterScrollBookEmpty, rarity: 341 },
  'Piscatoris teleport': { item: MasterScrollBookEmpty, rarity: 341 },
  'Pest control teleport': { item: MasterScrollBookEmpty, rarity: 341 },
  'Tai bwo wannai teleport': { item: MasterScrollBookEmpty, rarity: 341 },
  'Lumberyard teleport': { item: MasterScrollBookEmpty, rarity: 341 },
  'Iorwerth camp teleport': { item: MasterScrollBookEmpty, rarity: 341 },
  'Holy blessing': { item: UncutDiamond, rarity: 542 },
  'Unholy blessing': { item: UncutDiamond, rarity: 542 },
  'Peaceful blessing': { item: UncutDiamond, rarity: 542 },
  'War blessing': { item: UncutDiamond, rarity: 542 },
  'Honourable blessing': { item: UncutDiamond, rarity: 542 },
  'Ancient blessing': { item: UncutDiamond, rarity: 542 },
  'Master scroll book (empty)': { item: MasterScrollBookEmpty, rarity: 596 },
  'Saradomin page 1': { item: UncutDiamond, rarity: 650 },
  'Saradomin page 2': { item: UncutDiamond, rarity: 650 },
  'Saradomin page 3': { item: UncutDiamond, rarity: 650 },
  'Saradomin page 4': { item: UncutDiamond, rarity: 650 },
  'Zamorak page 1': { item: UncutDiamond, rarity: 650 },
  'Zamorak page 2': { item: UncutDiamond, rarity: 650 },
  'Zamorak page 3': { item: UncutDiamond, rarity: 650 },
  'Zamorak page 4': { item: UncutDiamond, rarity: 650 },
  'Guthix page 1': { item: UncutDiamond, rarity: 650 },
  'Guthix page 2': { item: UncutDiamond, rarity: 650 },
  'Guthix page 3': { item: UncutDiamond, rarity: 650 },
  'Guthix page 4': { item: UncutDiamond, rarity: 650 },
  'Bandos page 1': { item: UncutDiamond, rarity: 650 },
  'Bandos page 2': { item: UncutDiamond, rarity: 650 },
  'Bandos page 3': { item: UncutDiamond, rarity: 650 },
  'Bandos page 4': { item: UncutDiamond, rarity: 650 },
  'Armadyl page 1': { item: UncutDiamond, rarity: 650 },
  'Armadyl page 2': { item: UncutDiamond, rarity: 650 },
  'Armadyl page 3': { item: UncutDiamond, rarity: 650 },
  'Armadyl page 4': { item: UncutDiamond, rarity: 650 },
  'Ancient page 1': { item: UncutDiamond, rarity: 650 },
  'Ancient page 2': { item: UncutDiamond, rarity: 650 },
};

/**
 * Hard tier mega-rare items (gilded + 3rd age)
 * Gilded: 1/35,750 per roll
 * 3rd age: 1/211,250 per roll
 */
const HARD_MEGA_RARE_ITEMS: RewardTable = {
  'Gilded full helm': { item: GildedFullHelm, rarity: 35750 },
  'Gilded platebody': { item: GildedPlatebody, rarity: 35750 },
  'Gilded platelegs': { item: GildedLegs, rarity: 35750 },
  'Gilded plateskirt': { item: GildedLegs, rarity: 35750 },
  'Gilded kiteshield': { item: UncutDiamond, rarity: 35750 },
  'Gilded med helm': { item: UncutDiamond, rarity: 35750 },
  'Gilded chainbody': { item: UncutDiamond, rarity: 35750 },
  'Gilded sq shield': { item: UncutDiamond, rarity: 35750 },
  'Gilded 2h sword': { item: UncutDiamond, rarity: 35750 },
  'Gilded spear': { item: UncutDiamond, rarity: 35750 },
  'Gilded hasta': { item: UncutDiamond, rarity: 35750 },
  '3rd age full helmet': { item: UncutDiamond, rarity: 211250 },
  '3rd age platebody': { item: ThirdAgePlatebody, rarity: 211250 },
  '3rd age platelegs': { item: ThirdAgePlatelegs, rarity: 211250 },
  '3rd age plateskirt': { item: ThirdAgePlatelegs, rarity: 211250 },
  '3rd age kiteshield': { item: UncutDiamond, rarity: 211250 },
  '3rd age range coif': { item: UncutDiamond, rarity: 211250 },
  '3rd age range top': { item: UncutDiamond, rarity: 211250 },
  '3rd age range legs': { item: UncutDiamond, rarity: 211250 },
  '3rd age vambraces': { item: UncutDiamond, rarity: 211250 },
  '3rd age mage hat': { item: UncutDiamond, rarity: 211250 },
  '3rd age robe top': { item: UncutDiamond, rarity: 211250 },
  '3rd age robe': { item: UncutDiamond, rarity: 211250 },
  '3rd age amulet': { item: AmuletOfMagic, rarity: 211250 },
};

/**
 * Hard tier master clue scroll
 * 1/15 chance when opening a hard casket
 */
const HARD_MASTER_CLUE: RewardTable = {
  'Clue scroll (master)': { item: Coins, rarity: 15 },
};

/**
 * Hard clue rewards with table-based structure
 * 4-6 items per casket, average 5
 */
export const HARD_REWARDS = {
  tables: [
    {
      name: 'unique',
      weight: 1625, // Hard clue unique items (~1/12.5 per roll)
      items: HARD_UNIQUE_ITEMS,
      description: 'Hard clue unique items (100+ at various rarities)',
    },
    {
      name: 'standard',
      weight: 706, // Standard weapons, armor, runes, food (~1/27.1 base)
      items: HARD_STANDARD_TABLE,
      description: 'Standard weapons, armor, runes, food',
    },
    {
      name: 'mega-rare',
      weight: 0, // Separate mega-rare table
      items: HARD_MEGA_RARE_ITEMS,
      description: 'Mega-rare gilded and 3rd age items',
    },
    {
      name: 'shared',
      weight: 0, // Blended into other tables
      items: HARD_SHARED_ITEMS,
      description: 'Shared treasure trail items (coins, scrolls, teleports, blessings, pages)',
    },
    {
      name: 'master',
      weight: 0, // Separate 1/15 roll
      items: HARD_MASTER_CLUE,
      description: 'Master clue scroll (1/15 chance)',
    },
  ] as Array<{
    name: string;
    weight: number;
    items: RewardTable;
    description?: string;
  }>,
  // Flattened view for backward compatibility
  flattened: {
    ...HARD_UNIQUE_ITEMS,
    ...HARD_STANDARD_TABLE,
    ...HARD_MEGA_RARE_ITEMS,
    ...HARD_SHARED_ITEMS,
    ...HARD_MASTER_CLUE,
  },
};

/**
 * Elite tier unique items
 * Major rare table at 1/1,275 rarity
 */
const ELITE_UNIQUE_ITEMS: RewardTable = {
  'Dragon full helm ornament kit': { item: UncutDiamond, rarity: 1275 },
  'Dragon chainbody ornament kit': { item: UncutDiamond, rarity: 1275 },
  'Dragon legs/skirt ornament kit': { item: UncutDiamond, rarity: 1275 },
  'Dragon sq shield ornament kit': { item: UncutDiamond, rarity: 1275 },
  'Dragon scimitar ornament kit': { item: UncutDiamond, rarity: 1275 },
  'Fury ornament kit': { item: UncutDiamond, rarity: 1275 },
  'Light infinity colour kit': { item: UncutDiamond, rarity: 1275 },
  'Dark infinity colour kit': { item: UncutDiamond, rarity: 1275 },
  'Royal crown': { item: UncutDiamond, rarity: 1275 },
  'Royal gown top': { item: UncutDiamond, rarity: 1275 },
  'Royal gown bottom': { item: UncutDiamond, rarity: 1275 },
  'Royal sceptre': { item: UncutDiamond, rarity: 1275 },
  'Musketeer hat': { item: UncutDiamond, rarity: 1275 },
  'Musketeer tabard': { item: UncutDiamond, rarity: 1275 },
  'Musketeer pants': { item: UncutDiamond, rarity: 1275 },
  'Black d\'hide body (g)': { item: BlackFullHelm, rarity: 1275 },
  'Black d\'hide body (t)': { item: BlackFullHelm, rarity: 1275 },
  'Black d\'hide chaps (g)': { item: BlueDHideChaps, rarity: 1275 },
  'Black d\'hide chaps (t)': { item: BlueDHideChaps, rarity: 1275 },
  'Ranger\'s tunic': { item: RangerTunic, rarity: 1275 },
  'Ranger gloves': { item: RangerGloves, rarity: 1275 },
  'Holy wraps': { item: UncutDiamond, rarity: 1275 },
  'Bronze dragon mask': { item: UncutDiamond, rarity: 1275 },
  'Iron dragon mask': { item: UncutDiamond, rarity: 1275 },
  'Steel dragon mask': { item: UncutDiamond, rarity: 1275 },
  'Mithril dragon mask': { item: UncutDiamond, rarity: 1275 },
  'Adamant dragon mask': { item: UncutDiamond, rarity: 1275 },
  'Rune dragon mask': { item: UncutDiamond, rarity: 1275 },
  'Katana': { item: UncutDiamond, rarity: 1275 },
  'Dragon cane': { item: UncutDiamond, rarity: 1275 },
  'Bucket helm': { item: UncutDiamond, rarity: 1275 },
  'Blacksmith\'s helm': { item: UncutDiamond, rarity: 1275 },
  'Deerstalker': { item: UncutDiamond, rarity: 1275 },
  'Afro': { item: UncutDiamond, rarity: 1275 },
  'Big pirate hat': { item: UncutDiamond, rarity: 1275 },
  'Top hat': { item: UncutDiamond, rarity: 1275 },
  'Monocle': { item: UncutDiamond, rarity: 1275 },
  'Briefcase': { item: UncutDiamond, rarity: 1275 },
  'Sagacious spectacles': { item: UncutDiamond, rarity: 1275 },
  'Ranger\'s tights': { item: RangerLegs, rarity: 1275 },
  'Uri\'s hat': { item: UncutDiamond, rarity: 1275 },
  'Giant boot': { item: UncutDiamond, rarity: 1275 },
  'Fremennik kilt': { item: UncutDiamond, rarity: 1275 },
  'Dark bow tie': { item: UncutDiamond, rarity: 12750 },
  'Dark tuxedo jacket': { item: UncutDiamond, rarity: 12750 },
  'Dark tuxedo cuffs': { item: UncutDiamond, rarity: 12750 },
  'Dark trousers': { item: UncutDiamond, rarity: 12750 },
  'Dark tuxedo shoes': { item: UncutDiamond, rarity: 12750 },
  'Light bow tie': { item: UncutDiamond, rarity: 12750 },
  'Light tuxedo jacket': { item: UncutDiamond, rarity: 12750 },
  'Light tuxedo cuffs': { item: UncutDiamond, rarity: 12750 },
  'Light trousers': { item: UncutDiamond, rarity: 12750 },
  'Light tuxedo shoes': { item: UncutDiamond, rarity: 12750 },
};

/**
 * Elite tier standard table
 * Rune equipment, dragon weapons, runes, jewellery, food, resources at 1/32.3 base
 */
const ELITE_STANDARD_TABLE: RewardTable = {
  'Rune platebody': { item: RunePlatebody, rarity: 32 },
  'Rune platelegs': { item: RunePlatelegs, rarity: 32 },
  'Rune plateskirt': { item: RunePlatelegs, rarity: 32 },
  'Rune kiteshield': { item: UncutDiamond, rarity: 32 },
  'Rune crossbow': { item: UncutDiamond, rarity: 32 },
  'Dragon dagger': { item: UncutDiamond, rarity: 32 },
  'Dragon mace': { item: UncutDiamond, rarity: 32 },
  'Dragon longsword': { item: BlackLongsword, rarity: 32 },
  'Onyx bolt tips': { item: UncutDiamond, rarity: 32 },
  'Law rune': { item: LawRune, rarity: 32 },
  'Death rune': { item: FireRune, rarity: 32 },
  'Blood rune': { item: FireRune, rarity: 32 },
  'Soul rune': { item: FireRune, rarity: 32 },
  'Dragonstone bracelet': { item: UncutDiamond, rarity: 32 },
  'Dragon necklace': { item: UncutDiamond, rarity: 32 },
  'Dragonstone ring': { item: UncutDiamond, rarity: 32 },
  'Tuna potato': { item: HamJoint, rarity: 32 },
  'Summer pie': { item: HamJoint, rarity: 32 },
  'Oak plank': { item: UncutDiamond, rarity: 32 },
  'Teak plank': { item: UncutDiamond, rarity: 32 },
  'Mahogany plank': { item: UncutDiamond, rarity: 32 },
  'Runite bar': { item: RuniteBar, rarity: 32 },
  'Tooth half of key': { item: UncutDiamond, rarity: 65 },
  'Loop half of key': { item: UncutDiamond, rarity: 65 },
  'Palm tree seed': { item: UncutDiamond, rarity: 97 },
  'Yew seed': { item: UncutDiamond, rarity: 97 },
  'Magic seed': { item: UncutDiamond, rarity: 97 },
};

/**
 * Elite tier mega-rare items (gilded + 3rd age + special)
 */
const ELITE_MEGA_RARE_ITEMS: RewardTable = {
  'Ring of nature': { item: UncutDiamond, rarity: 14663 },
  'Crystal key': { item: UncutDiamond, rarity: 14663 },
  'Lava dragon mask': { item: UncutDiamond, rarity: 14663 },
  'Battlestaff': { item: StaffOfAir, rarity: 14663 },
  'Extended antifire(4)': { item: UncutDiamond, rarity: 14663 },
  'Super restore(4)': { item: UncutDiamond, rarity: 14663 },
  'Saradomin brew(4)': { item: UncutDiamond, rarity: 14663 },
  'Ranging potion(4)': { item: UncutDiamond, rarity: 14663 },
  'Gilded scimitar': { item: UncutDiamond, rarity: 14663 },
  'Gilded boots': { item: UncutDiamond, rarity: 14663 },
  'Gilded coif': { item: UncutDiamond, rarity: 14663 },
  'Gilded d\'hide vambraces': { item: UncutDiamond, rarity: 14663 },
  'Gilded d\'hide body': { item: UncutDiamond, rarity: 14663 },
  'Gilded d\'hide chaps': { item: UncutDiamond, rarity: 14663 },
  'Gilded pickaxe': { item: UncutDiamond, rarity: 14663 },
  'Gilded axe': { item: UncutDiamond, rarity: 14663 },
  'Gilded spade': { item: UncutDiamond, rarity: 14663 },
  'Gilded full helm': { item: GildedFullHelm, rarity: 32258 },
  'Gilded platebody': { item: GildedPlatebody, rarity: 32258 },
  'Gilded platelegs': { item: GildedLegs, rarity: 32258 },
  'Gilded plateskirt': { item: GildedLegs, rarity: 32258 },
  'Gilded kiteshield': { item: UncutDiamond, rarity: 32258 },
  'Gilded med helm': { item: UncutDiamond, rarity: 32258 },
  'Gilded chainbody': { item: UncutDiamond, rarity: 32258 },
  'Gilded sq shield': { item: UncutDiamond, rarity: 32258 },
  'Gilded 2h sword': { item: UncutDiamond, rarity: 32258 },
  'Gilded spear': { item: UncutDiamond, rarity: 32258 },
  'Gilded hasta': { item: UncutDiamond, rarity: 32258 },
  '3rd age full helmet': { item: UncutDiamond, rarity: 249262 },
  '3rd age platebody': { item: ThirdAgePlatebody, rarity: 249262 },
  '3rd age platelegs': { item: ThirdAgePlatelegs, rarity: 249262 },
  '3rd age plateskirt': { item: ThirdAgePlatelegs, rarity: 249262 },
  '3rd age kiteshield': { item: UncutDiamond, rarity: 249262 },
  '3rd age range coif': { item: UncutDiamond, rarity: 249262 },
  '3rd age range top': { item: UncutDiamond, rarity: 249262 },
  '3rd age range legs': { item: UncutDiamond, rarity: 249262 },
  '3rd age vambraces': { item: UncutDiamond, rarity: 249262 },
  '3rd age mage hat': { item: UncutDiamond, rarity: 249262 },
  '3rd age robe top': { item: UncutDiamond, rarity: 249262 },
  '3rd age robe': { item: UncutDiamond, rarity: 249262 },
  '3rd age amulet': { item: AmuletOfMagic, rarity: 249262 },
  '3rd age longsword': { item: ThirdAgeLongsword, rarity: 249262 },
  '3rd age wand': { item: UncutDiamond, rarity: 249262 },
  '3rd age cloak': { item: UncutDiamond, rarity: 249262 },
  '3rd age bow': { item: UncutDiamond, rarity: 249262 },
};

/**
 * Elite tier shared treasure trail items
 */
const ELITE_SHARED_ITEMS: RewardTable = {
  'Coins': { item: Coins, rarity: 32 },
  'Purple sweets': { item: UncutDiamond, rarity: 92 },
  'Red firelighter': { item: UncutDiamond, rarity: 162 },
  'Green firelighter': { item: UncutDiamond, rarity: 162 },
  'Blue firelighter': { item: UncutDiamond, rarity: 162 },
  'Purple firelighter': { item: UncutDiamond, rarity: 162 },
  'White firelighter': { item: UncutDiamond, rarity: 162 },
  'Charge dragonstone jewellery scroll': { item: MasterScrollBookEmpty, rarity: 203 },
  'Nardah teleport': { item: MasterScrollBookEmpty, rarity: 203 },
  'Mos le\'harmless teleport': { item: MasterScrollBookEmpty, rarity: 203 },
  'Mort\'ton teleport': { item: MasterScrollBookEmpty, rarity: 203 },
  'Feldip hills teleport': { item: MasterScrollBookEmpty, rarity: 203 },
  'Lunar isle teleport': { item: MasterScrollBookEmpty, rarity: 203 },
  'Digsite teleport': { item: MasterScrollBookEmpty, rarity: 203 },
  'Piscatoris teleport': { item: MasterScrollBookEmpty, rarity: 203 },
  'Pest control teleport': { item: MasterScrollBookEmpty, rarity: 203 },
  'Tai bwo wannai teleport': { item: MasterScrollBookEmpty, rarity: 203 },
  'Lumberyard teleport': { item: MasterScrollBookEmpty, rarity: 203 },
  'Iorwerth camp teleport': { item: MasterScrollBookEmpty, rarity: 203 },
  'Master scroll book (empty)': { item: MasterScrollBookEmpty, rarity: 355 },
  'Holy blessing': { item: UncutDiamond, rarity: 646 },
  'Unholy blessing': { item: UncutDiamond, rarity: 646 },
  'Peaceful blessing': { item: UncutDiamond, rarity: 646 },
  'War blessing': { item: UncutDiamond, rarity: 646 },
  'Honourable blessing': { item: UncutDiamond, rarity: 646 },
  'Ancient blessing': { item: UncutDiamond, rarity: 646 },
  'Saradomin page 1': { item: UncutDiamond, rarity: 775 },
  'Saradomin page 2': { item: UncutDiamond, rarity: 775 },
  'Saradomin page 3': { item: UncutDiamond, rarity: 775 },
  'Saradomin page 4': { item: UncutDiamond, rarity: 775 },
  'Zamorak page 1': { item: UncutDiamond, rarity: 775 },
  'Zamorak page 2': { item: UncutDiamond, rarity: 775 },
  'Zamorak page 3': { item: UncutDiamond, rarity: 775 },
  'Zamorak page 4': { item: UncutDiamond, rarity: 775 },
  'Guthix page 1': { item: UncutDiamond, rarity: 775 },
  'Guthix page 2': { item: UncutDiamond, rarity: 775 },
  'Guthix page 3': { item: UncutDiamond, rarity: 775 },
  'Guthix page 4': { item: UncutDiamond, rarity: 775 },
  'Bandos page 1': { item: UncutDiamond, rarity: 775 },
  'Bandos page 2': { item: UncutDiamond, rarity: 775 },
  'Bandos page 3': { item: UncutDiamond, rarity: 775 },
  'Bandos page 4': { item: UncutDiamond, rarity: 775 },
  'Armadyl page 1': { item: UncutDiamond, rarity: 775 },
  'Armadyl page 2': { item: UncutDiamond, rarity: 775 },
  'Armadyl page 3': { item: UncutDiamond, rarity: 775 },
  'Armadyl page 4': { item: UncutDiamond, rarity: 775 },
  'Ancient page 1': { item: UncutDiamond, rarity: 775 },
  'Ancient page 2': { item: UncutDiamond, rarity: 775 },
};

/**
 * Elite tier master clue scroll
 * 1/5 chance when opening an elite casket (doesn't take up a reward slot)
 */
const ELITE_MASTER_CLUE: RewardTable = {
  'Clue scroll (master)': { item: Coins, rarity: 5 },
};

/**
 * Elite clue rewards with table-based structure
 * 4-6 items per casket, average 5
 */
export const ELITE_REWARDS = {
  tables: [
    {
      name: 'unique',
      weight: 1275, // Elite clue unique items (~1/26 per roll)
      items: ELITE_UNIQUE_ITEMS,
      description: 'Elite clue unique items (50+ at various rarities)',
    },
    {
      name: 'standard',
      weight: 621, // Standard equipment (~1/32.3 base)
      items: ELITE_STANDARD_TABLE,
      description: 'Standard rune equipment, dragon weapons, runes, jewellery, food, resources',
    },
    {
      name: 'mega-rare',
      weight: 0, // Separate mega-rare table
      items: ELITE_MEGA_RARE_ITEMS,
      description: 'Mega-rare gilded, 3rd age, and special items',
    },
    {
      name: 'shared',
      weight: 0, // Blended into other tables
      items: ELITE_SHARED_ITEMS,
      description: 'Shared treasure trail items',
    },
    {
      name: 'master',
      weight: 0, // Separate 1/5 roll (doesn't take a slot)
      items: ELITE_MASTER_CLUE,
      description: 'Master clue scroll (1/5 chance, bonus drop)',
    },
  ] as Array<{
    name: string;
    weight: number;
    items: RewardTable;
    description?: string;
  }>,
  // Flattened view for backward compatibility
  flattened: {
    ...ELITE_UNIQUE_ITEMS,
    ...ELITE_STANDARD_TABLE,
    ...ELITE_MEGA_RARE_ITEMS,
    ...ELITE_SHARED_ITEMS,
    ...ELITE_MASTER_CLUE,
  },
};

/**
 * Master tier unique items
 * Major rare table at various rarities (1/851 to 1/25,530)
 */
const MASTER_UNIQUE_ITEMS: RewardTable = {
  'Occult ornament kit': { item: UncutDiamond, rarity: 851 },
  'Torture ornament kit': { item: UncutDiamond, rarity: 851 },
  'Anguish ornament kit': { item: UncutDiamond, rarity: 851 },
  'Tormented ornament kit': { item: UncutDiamond, rarity: 851 },
  'Dragon defender ornament kit': { item: UncutDiamond, rarity: 851 },
  'Hood of darkness': { item: UncutDiamond, rarity: 851 },
  'Robe top of darkness': { item: UncutDiamond, rarity: 851 },
  'Gloves of darkness': { item: UncutDiamond, rarity: 851 },
  'Robe bottom of darkness': { item: UncutDiamond, rarity: 851 },
  'Boots of darkness': { item: UncutDiamond, rarity: 851 },
  'Samurai kasa': { item: UncutDiamond, rarity: 851 },
  'Samurai shirt': { item: UncutDiamond, rarity: 851 },
  'Samurai gloves': { item: UncutDiamond, rarity: 851 },
  'Samurai greaves': { item: UncutDiamond, rarity: 851 },
  'Samurai boots': { item: UncutDiamond, rarity: 851 },
  'Arceuus hood': { item: UncutDiamond, rarity: 851 },
  'Hosidius hood': { item: UncutDiamond, rarity: 851 },
  'Lovakengj hood': { item: UncutDiamond, rarity: 851 },
  'Piscarilius hood': { item: UncutDiamond, rarity: 851 },
  'Shayzien hood': { item: UncutDiamond, rarity: 851 },
  'Old demon mask': { item: UncutDiamond, rarity: 851 },
  'Lesser demon mask': { item: UncutDiamond, rarity: 851 },
  'Greater demon mask': { item: UncutDiamond, rarity: 851 },
  'Black demon mask': { item: UncutDiamond, rarity: 851 },
  'Jungle demon mask': { item: UncutDiamond, rarity: 851 },
  'Left eye patch': { item: UncutDiamond, rarity: 851 },
  'Bowl wig': { item: UncutDiamond, rarity: 851 },
  'Ale of the gods': { item: UncutDiamond, rarity: 851 },
  'Obsidian cape (r)': { item: CapeOfSkulls, rarity: 851 },
  'Fancy tiara': { item: UncutDiamond, rarity: 851 },
  'Half moon spectacles': { item: UncutDiamond, rarity: 851 },
  'Armadyl godsword ornament kit': { item: UncutDiamond, rarity: 3404 },
  'Bandos godsword ornament kit': { item: UncutDiamond, rarity: 3404 },
  'Saradomin godsword ornament kit': { item: UncutDiamond, rarity: 3404 },
  'Zamorak godsword ornament kit': { item: UncutDiamond, rarity: 3404 },
  'Dragon platebody ornament kit': { item: UncutDiamond, rarity: 12765 },
  'Ankou mask': { item: UncutDiamond, rarity: 12765 },
  'Ankou top': { item: UncutDiamond, rarity: 12765 },
  'Ankou gloves': { item: UncutDiamond, rarity: 12765 },
  'Ankou\'s leggings': { item: UncutDiamond, rarity: 12765 },
  'Ankou socks': { item: UncutDiamond, rarity: 12765 },
  'Mummy\'s head': { item: UncutDiamond, rarity: 12765 },
  'Mummy\'s body': { item: UncutDiamond, rarity: 12765 },
  'Mummy\'s hands': { item: UncutDiamond, rarity: 12765 },
  'Mummy\'s legs': { item: UncutDiamond, rarity: 12765 },
  'Mummy\'s feet': { item: UncutDiamond, rarity: 12765 },
  'Dragon kiteshield ornament kit': { item: UncutDiamond, rarity: 25530 },
};

/**
 * Master tier standard table
 * Dragon weapons, runes, food, resources at 1/30.3 base
 */
const MASTER_STANDARD_TABLE: RewardTable = {
  'Dragon dagger': { item: UncutDiamond, rarity: 30 },
  'Dragon mace': { item: UncutDiamond, rarity: 30 },
  'Dragon longsword': { item: BlackLongsword, rarity: 30 },
  'Dragon scimitar': { item: UncutDiamond, rarity: 30 },
  'Dragon battleaxe': { item: UncutDiamond, rarity: 30 },
  'Dragon halberd': { item: UncutDiamond, rarity: 30 },
  'Nature rune': { item: NatureRune, rarity: 30 },
  'Death rune': { item: FireRune, rarity: 30 },
  'Blood rune': { item: FireRune, rarity: 30 },
  'Soul rune': { item: FireRune, rarity: 30 },
  'Onyx bolts (e)': { item: UncutDiamond, rarity: 30 },
  'Manta ray': { item: Salmon, rarity: 30 },
  'Wine of zamorak': { item: UncutDiamond, rarity: 30 },
  'Limpwurt root': { item: UncutDiamond, rarity: 30 },
  'Grimy ranarr weed': { item: UncutDiamond, rarity: 30 },
  'Grimy toadflax': { item: UncutDiamond, rarity: 30 },
  'Grimy snapdragon': { item: UncutDiamond, rarity: 30 },
  'Runite ore': { item: UncutDiamond, rarity: 30 },
  'Runite bar': { item: RuniteBar, rarity: 30 },
  'Black dragonhide': { item: UncutDiamond, rarity: 30 },
};

/**
 * Master tier mega-rare items (gilded + 3rd age + special)
 */
const MASTER_MEGA_RARE_ITEMS: RewardTable = {
  'Bucket helm (g)': { item: UncutDiamond, rarity: 13616 },
  'Ring of coins': { item: UncutDiamond, rarity: 13616 },
  'Cabbage': { item: UncutDiamond, rarity: 13616 },
  'Anti-venom+(4)': { item: UncutDiamond, rarity: 13616 },
  'Torstol': { item: UncutDiamond, rarity: 13616 },
  'Gilded scimitar': { item: UncutDiamond, rarity: 13616 },
  'Gilded boots': { item: UncutDiamond, rarity: 13616 },
  'Gilded coif': { item: UncutDiamond, rarity: 13616 },
  'Gilded d\'hide vambraces': { item: UncutDiamond, rarity: 13616 },
  'Gilded d\'hide body': { item: UncutDiamond, rarity: 13616 },
  'Gilded d\'hide chaps': { item: UncutDiamond, rarity: 13616 },
  'Gilded pickaxe': { item: UncutDiamond, rarity: 13616 },
  'Gilded axe': { item: UncutDiamond, rarity: 13616 },
  'Gilded spade': { item: UncutDiamond, rarity: 13616 },
  'Gilded full helm': { item: GildedFullHelm, rarity: 149776 },
  'Gilded platebody': { item: GildedPlatebody, rarity: 149776 },
  'Gilded platelegs': { item: GildedLegs, rarity: 149776 },
  'Gilded plateskirt': { item: GildedLegs, rarity: 149776 },
  'Gilded kiteshield': { item: UncutDiamond, rarity: 149776 },
  'Gilded med helm': { item: UncutDiamond, rarity: 149776 },
  'Gilded chainbody': { item: UncutDiamond, rarity: 149776 },
  'Gilded sq shield': { item: UncutDiamond, rarity: 149776 },
  'Gilded 2h sword': { item: UncutDiamond, rarity: 149776 },
  'Gilded spear': { item: UncutDiamond, rarity: 149776 },
  'Gilded hasta': { item: UncutDiamond, rarity: 149776 },
  '3rd age full helmet': { item: UncutDiamond, rarity: 313168 },
  '3rd age platebody': { item: ThirdAgePlatebody, rarity: 313168 },
  '3rd age platelegs': { item: ThirdAgePlatelegs, rarity: 313168 },
  '3rd age plateskirt': { item: ThirdAgePlatelegs, rarity: 313168 },
  '3rd age kiteshield': { item: UncutDiamond, rarity: 313168 },
  '3rd age range coif': { item: UncutDiamond, rarity: 313168 },
  '3rd age range top': { item: UncutDiamond, rarity: 313168 },
  '3rd age range legs': { item: UncutDiamond, rarity: 313168 },
  '3rd age vambraces': { item: UncutDiamond, rarity: 313168 },
  '3rd age mage hat': { item: UncutDiamond, rarity: 313168 },
  '3rd age robe top': { item: UncutDiamond, rarity: 313168 },
  '3rd age robe': { item: UncutDiamond, rarity: 313168 },
  '3rd age amulet': { item: AmuletOfMagic, rarity: 313168 },
  '3rd age druidic robe top': { item: UncutDiamond, rarity: 313168 },
  '3rd age druidic robe bottoms': { item: UncutDiamond, rarity: 313168 },
  '3rd age druidic cloak': { item: UncutDiamond, rarity: 313168 },
  '3rd age longsword': { item: ThirdAgeLongsword, rarity: 313168 },
  '3rd age bow': { item: UncutDiamond, rarity: 313168 },
  '3rd age wand': { item: UncutDiamond, rarity: 313168 },
  '3rd age druidic staff': { item: UncutDiamond, rarity: 313168 },
  '3rd age cloak': { item: UncutDiamond, rarity: 313168 },
  '3rd age pickaxe': { item: UncutDiamond, rarity: 313168 },
  '3rd age axe': { item: UncutDiamond, rarity: 313168 },
};

/**
 * Master tier shared treasure trail items
 */
const MASTER_SHARED_ITEMS: RewardTable = {
  'Coins': { item: Coins, rarity: 30 },
};

/**
 * Master tier master clue scroll
 * Note: Master clues can also come from other tiers
 */
const MASTER_MASTER_CLUE: RewardTable = {
  'Clue scroll (master)': { item: Coins, rarity: 30 }, // Placeholder for mimic/rare drops
};

/**
 * Master clue rewards with table-based structure
 * 5-7 items per casket, average 6
 */
export const MASTER_REWARDS = {
  tables: [
    {
      name: 'unique',
      weight: 851, // Master clue unique items
      items: MASTER_UNIQUE_ITEMS,
      description: 'Master clue unique items (40+ at various rarities)',
    },
    {
      name: 'standard',
      weight: 638, // Standard dragon weapons and resources (~1/30.3 base)
      items: MASTER_STANDARD_TABLE,
      description: 'Dragon weapons, runes, food, resources',
    },
    {
      name: 'mega-rare',
      weight: 0, // Separate mega-rare table
      items: MASTER_MEGA_RARE_ITEMS,
      description: 'Mega-rare gilded, 3rd age, and unique items (Ring of coins, Bucket helm (g), etc.)',
    },
    {
      name: 'shared',
      weight: 0, // Minimal shared items
      items: MASTER_SHARED_ITEMS,
      description: 'Shared treasure trail items (coins)',
    },
  ] as Array<{
    name: string;
    weight: number;
    items: RewardTable;
    description?: string;
  }>,
  // Flattened view for backward compatibility
  flattened: {
    ...MASTER_UNIQUE_ITEMS,
    ...MASTER_STANDARD_TABLE,
    ...MASTER_MEGA_RARE_ITEMS,
    ...MASTER_SHARED_ITEMS,
  },
};

/**
 * Gets all reward odds for a specific clue tier
 */
export function getClueRewardsByTier(
  tier: 'beginner' | 'easy' | 'medium' | 'hard' | 'elite' | 'master'
): { [itemName: string]: { item: Item; rarity: number } } {
  switch (tier.toLowerCase()) {
    case 'beginner':
      return BEGINNER_REWARDS.flattened;
    case 'easy':
      return EASY_REWARDS.flattened;
    case 'medium':
      return MEDIUM_REWARDS.flattened;
    case 'hard':
      return HARD_REWARDS.flattened;
    case 'elite':
      return ELITE_REWARDS.flattened;
    case 'master':
      return MASTER_REWARDS.flattened;
    default:
      throw new Error(`Unknown clue tier: ${tier}`);
  }
}

/**
 * Gets the table structure for a specific clue tier (if available)
 * Returns null for tiers that don't have table-based rewards
 */
export function getClueRewardTables(
  tier: 'beginner' | 'easy' | 'medium' | 'hard' | 'elite' | 'master'
): Array<{ name: string; weight: number; items: { [itemName: string]: { item: Item; rarity: number } } }> | null {
  switch (tier.toLowerCase()) {
    case 'beginner':
      return BEGINNER_REWARDS.tables;
    case 'easy':
      return EASY_REWARDS.tables;
    case 'medium':
      return MEDIUM_REWARDS.tables;
    case 'hard':
      return HARD_REWARDS.tables;
    case 'elite':
      return ELITE_REWARDS.tables;
    case 'master':
      return MASTER_REWARDS.tables;
    default:
      return null;
  }
}

/**
 * Gets all items for a specific tier as an array
 */
export function getClueItemsList(tier: 'beginner' | 'easy' | 'medium' | 'hard' | 'elite' | 'master'): Item[] {
  const rewards = getClueRewardsByTier(tier);
  return Object.values(rewards).map(r => r.item);
}

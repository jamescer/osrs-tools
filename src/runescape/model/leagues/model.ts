/**
 * Represents a League Region in Old School RuneScape, which is a specific area or continent that is relevant to certain leagues and their associated content. Each League Region has a name and a wiki URL that provides more information about the region, its geography, lore, and any league-specific mechanics or content that may be associated with it. This type is used to categorize and reference different regions in the context of leagues, particularly for the Hunter Guild rumours that are only available in certain regions during specific leagues.
 */
export interface LeagueRegion {
  name: string;
  wikiUrl: string;
}

/**
 * Represents a notable drop that can be obtained in a specific area of the Demonic Pacts League. Each notable drop includes information about the item, its source, base rarity, and how its drop rate is affected by the 2x and 5x drop rate multipliers that are active during the league. The category field can be used to group drops into different types (e.g., "Weapon", "Armor", "Consumable") for easier reference and organization.
 */
export interface NotableDrop {
  item: string;
  source: string;
  baseRarity: string;
  dropMultiplier2x: string;
  dropMultiplier5x: string;
  category?: string;
}

export enum GenericLeagueRegion {
  ASGARNIA = 'Asgarnia',
  DESERT = 'Desert',
  FREMENNIK = 'Fremennik',
  KANDARIN = 'Kandarin',
  KARAMJA = 'Karamja',
  KOUREND = 'Kourend',
  MISTHALIN = 'Misthalin',
  MORYTANIA = 'Morytania',
  TIRANNWN = 'Tirannwn',
  VARLAMORE = 'Varlamore',
  WILDERNESS = 'Wilderness',
}

/**
 * All six Old School RuneScape leagues, in chronological order.
 * Source: https://oldschool.runescape.wiki/w/Leagues
 */
export const Leagues: Record<string, string> = {
  TWISTED_LEAGUE: 'Twisted League',
  TRAILBLAZER: 'Trailblazer League',
  SHATTERED_RELICS: 'Shattered Relics League',
  TRAILBLAZER_RELOADED: 'Trailblazer Reloaded League',
  RAGING_ECHOES: 'Raging Echoes League',
  DEMONIC_PACTS: 'Demonic Pacts League',
};

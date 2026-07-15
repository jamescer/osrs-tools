/**
 * Represents a location where a rumour can be found in Gielinor.
 * Each location has a name and a corresponding wiki URL for more information. This class is used to provide players with details about where they can find specific rumours within the guild, helping them to navigate and complete their tasks more efficiently.
 */
export interface RumourLocation {
  readonly name: string; // The name of the location where the rumour can be found.
  readonly wikiUrl: string; // A URL to the RuneScape Wiki page that provides more information about the location, including how to access it and any relevant details for players.
}

// Predefined RumourLocation instances for commonly referenced locations in Hunter Guild rumours.
// These can be reused across multiple rumours that share the same location, ensuring consistency and reducing redundancy in the codebase.

export const FELDIP_HUNTER_AREA: RumourLocation = {
  name: 'Feldip Hunter Area',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Feldip_Hunter_Area',
};
export const THE_GREAT_CONCH: RumourLocation = {
  name: 'The Great Conch',
  wikiUrl: 'https://oldschool.runescape.wiki/w/The_Great_Conch',
};
export const TLATI_RAINFOREST: RumourLocation = {
  name: 'Tlati Rainforest',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Tlati_Rainforest',
};
export const PISCATORIS_HUNTER_AREA: RumourLocation = {
  name: 'Piscatoris Hunter Area',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Piscatoris_Hunter_Area',
};
export const AUBURNVALE: RumourLocation = {
  name: 'Auburnvale',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Auburnvale',
};
export const FOSSIL_ISLAND_HUNTER_AREA: RumourLocation = {
  name: 'Fossil Island Hunter Area',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Fossil_Island_Hunter_Area',
};
export const MOSS_GIANT_ISLAND: RumourLocation = {
  name: 'Moss Giant Island',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Moss_Giant_Island',
};
export const MOS_LE_HARMLESS_ISLAND: RumourLocation = {
  name: "Mos Le'Harmless",
  wikiUrl: 'https://oldschool.runescape.wiki/w/Mos_Le%27Harmless',
};
export const WATERBIRTH_ISLAND: RumourLocation = {
  name: 'Waterbirth Island',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Waterbirth_Island',
};
export const CATHERBY: RumourLocation = { name: 'Catherby', wikiUrl: 'https://oldschool.runescape.w/wiki/Catherby' };
export const MISCELLANIA: RumourLocation = {
  name: 'Miscellania',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Miscellania',
};
export const RELLEKKA_HUNTER_AREA: RumourLocation = {
  name: 'Rellekka Hunter Area',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Rellekka_Hunter_Area',
};
export const FARMING_GUILD: RumourLocation = {
  name: 'Farming Guild',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Farming_Guild',
};
export const PISCATORIS_FALCONRY_AREA: RumourLocation = {
  name: 'Piscatoris falconry area',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Piscatoris_Falconry_Area',
};
export const AVIUM_SAVANNAH: RumourLocation = {
  name: 'Avium Savannah',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Avium_Savannah',
};
export const MONS_GRATIA: RumourLocation = {
  name: 'Mons Gratia',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Mons_Gratia',
};
export const NEYPOTZLI: RumourLocation = { name: 'Neypotzli', wikiUrl: 'https://oldschool.runescape.wiki/w/Neypotzli' };
export const THE_BURROW: RumourLocation = {
  name: 'The Burrow',
  wikiUrl: 'https://oldschool.runescape.wiki/w/The_Burrow',
};
export const CANIFIS_HUNTER_AREA: RumourLocation = {
  name: 'Canifis Hunter area',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Canifis_Hunter_Area',
};
export const NORTH_WEST_OF_SLEPE: RumourLocation = {
  name: 'North-west of Slepe',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Swamp_lizard',
};
export const WEISS: RumourLocation = { name: 'Weiss', wikiUrl: 'https://oldschool.runescape.wiki/w/Snowy_knight' };
export const WEST_OF_HUNTER_GUILD: RumourLocation = {
  name: 'West of Hunter Guild',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Embertailed_jerboa',
};
export const NORTH_WEST_OF_THE_LOCUS_OASIS: RumourLocation = {
  name: 'North-west of the Locus Oasis',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Embertailed_jerboa',
};
export const CRYPT_OF_TONALI_HUNTER_AREA: RumourLocation = {
  name: 'Crypt of Tonali hunter area',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Black_warlock',
};
export const SHIMMERING_ATOLL: RumourLocation = {
  name: 'Shimmering Atoll',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Black_warlock',
};
export const UZER_HUNTER_AREA: RumourLocation = {
  name: 'Uzer Hunter area',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Orange_salamander',
};
export const NECROPOLIS_HUNTER_AREA: RumourLocation = {
  name: 'Necropolis Hunter area',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Orange_salamander',
};
export const KARAMJA_HUNTER_AREA: RumourLocation = {
  name: 'Karamja Hunter area',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Horned_graahk',
};
export const OURANIA_HUNTER_AREA: RumourLocation = {
  name: 'Ourania Hunter area',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Red_salamander',
};
export const CHARRED_ISLAND: RumourLocation = {
  name: 'Charred Island',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Red_salamander',
};
export const CHINCHOMPA_ISLAND: RumourLocation = {
  name: 'Chinchompa Island',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Red_chinchompa',
};
export const GWENITH_HUNTER_AREA: RumourLocation = {
  name: 'Gwenith Hunter area',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Red_chinchompa',
};
export const RED_CHINCHOMPA_HUNTING_GROUND: RumourLocation = {
  name: 'Red chinchompa hunting ground',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Red_chinchompa',
};
export const KOUREND_WOODLAND: RumourLocation = {
  name: 'Kourend Woodland',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Grey_chinchompa',
};
export const ISLE_OF_SOULS: RumourLocation = {
  name: 'Isle of Souls',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Grey_chinchompa',
};
export const RALOS_RISE: RumourLocation = {
  name: "Ralos' Rise",
  wikiUrl: 'https://oldschool.runescape.wiki/w/Tecu_salamander',
};
export const MUSHROOM_FOREST_ON_FOSSIL_ISLAND: RumourLocation = {
  name: 'Mushroom Forest on Fossil Island',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Herbiboar',
};
export const RUINS_OF_TAPOYAUIP: RumourLocation = {
  name: 'Ruins of Tapoyauik',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Moonlight_moth',
};
export const TONALI_CAVERN: RumourLocation = {
  name: 'Tonali Cavern',
  wikiUrl: 'https://oldschool.runescape.wiki/w/Moonlight_moth',
};
// Additional locations can be added here as needed, following the same structure.

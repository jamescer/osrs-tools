import { HunterRumour } from "./HunterRumour";
import * as RumourLocation from "./RumourLocation";
import { HunterGuildMasterName } from "./HunterGuildMasterName";
import { GenericLeagueRegion } from "../../leagues";
import { HunterRumourDefinition } from "./types";

const TropicalWagtail: HunterRumourDefinition = {
  id: 'tropical-wagtail',
  creature: 'Tropical wagtail',
  method: 'Bird snare',
  locations: [RumourLocation.FELDIP_HUNTER_AREA, RumourLocation.THE_GREAT_CONCH, RumourLocation.TLATI_RAINFOREST],
  requiredHunterLevel: 19,
  tier: 'Novice',
  masterNames: [HunterGuildMasterName.GILMAN.name],
  leagueRegions: [GenericLeagueRegion.KANDARIN, GenericLeagueRegion.VARLAMORE],
};

const WildKebbit: HunterRumourDefinition = {
  id: 'wild-kebbit',
  creature: 'Wild kebbit',
  method: 'Deadfall',
  locations: [RumourLocation.PISCATORIS_HUNTER_AREA, RumourLocation.AUBURNVALE],
  requiredHunterLevel: 23,
  tier: 'Novice',
  masterNames: [HunterGuildMasterName.GILMAN.name],
  leagueRegions: [GenericLeagueRegion.KANDARIN, GenericLeagueRegion.VARLAMORE],
};

const SapphireGlacialis: HunterRumourDefinition = {
  id: 'sapphire-glacialis',
  creature: 'Sapphire glacialis',
  method: 'Butterfly net',
  locations: [RumourLocation.RELLEKKA_HUNTER_AREA, RumourLocation.FARMING_GUILD, RumourLocation.MONS_GRATIA],
  requiredHunterLevel: 25,
  tier: 'Novice',
  masterNames: [HunterGuildMasterName.GILMAN.name],
  leagueRegions: [GenericLeagueRegion.FREMENNIK, GenericLeagueRegion.KOUREND, GenericLeagueRegion.VARLAMORE],
};

const SwampLizard: HunterRumourDefinition = {
  id: 'swamp-lizard',
  creature: 'Swamp lizard',
  method: 'Net trap',
  locations: [RumourLocation.CANIFIS_HUNTER_AREA, RumourLocation.NORTH_WEST_OF_SLEPE],
  requiredHunterLevel: 29,
  tier: 'Adept',
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.CERVUS.name],
  leagueRegions: [GenericLeagueRegion.MORYTANIA],
};

const SpinedLarupia: HunterRumourDefinition = {
  id: 'spined-larupia',
  creature: 'Spined larupia',
  method: 'Spiked pit',
  locations: [RumourLocation.FELDIP_HUNTER_AREA,],
  requiredHunterLevel: 31,
  tier: 'Expert',
  masterNames: [HunterGuildMasterName.GILMAN.name, 'Aco'],
  leagueRegions: [GenericLeagueRegion.KANDARIN],
};

const BarbTailedKebbit: HunterRumourDefinition = {
  id: 'barb-tailed-kebbit',
  creature: 'Barb-tailed kebbit',
  method: 'Deadfall',
  locations: [RumourLocation.FELDIP_HUNTER_AREA],
  requiredHunterLevel: 33,
  tier: 'Novice',
  masterNames: [HunterGuildMasterName.GILMAN.name],
  leagueRegions: [GenericLeagueRegion.KANDARIN],
};

const SnowyKnight: HunterRumourDefinition = {
  id: 'snowy-knight',
  creature: 'Snowy knight',
  method: 'Butterfly net',
  locations: [RumourLocation.FELDIP_HUNTER_AREA, RumourLocation.WEISS, RumourLocation.FARMING_GUILD, RumourLocation.MONS_GRATIA],
  requiredHunterLevel: 35,
  tier: 'Expert',
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.ACO.name],
  leagueRegions: [GenericLeagueRegion.FREMENNIK, GenericLeagueRegion.KANDARIN, GenericLeagueRegion.KOUREND, GenericLeagueRegion.VARLAMORE],
};

const PricklyKebbit: HunterRumourDefinition = {
  id: 'prickly-kebbit',
  creature: 'Prickly kebbit',
  method: 'Deadfall',
  locations: [RumourLocation.PISCATORIS_HUNTER_AREA],
  requiredHunterLevel: 37,
  tier: 'Novice',
  masterNames: [HunterGuildMasterName.GILMAN.name],
  leagueRegions: [GenericLeagueRegion.KANDARIN],
};

const RazorBackedKebbit: HunterRumourDefinition = {
  id: 'razor-backed-kebbit',
  creature: 'Razor-backed kebbit',
  method: 'Tracking',
  locations: [RumourLocation.PISCATORIS_HUNTER_AREA],
  requiredHunterLevel: 49,
  tier: 'Adept',
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.CERVUS.name],
  leagueRegions: [GenericLeagueRegion.KANDARIN],
};

const SabreToothedKebbit: HunterRumourDefinition = {
  id: 'sabre-toothed-kebbit',
  creature: 'Sabre-toothed kebbit',
  method: 'Deadfall',
  locations: [RumourLocation.RELLEKKA_HUNTER_AREA],
  requiredHunterLevel: 51,
  tier: 'Expert',
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.CERVUS.name, HunterGuildMasterName.ORNUS.name],
  leagueRegions: [GenericLeagueRegion.FREMENNIK],
};

const GreyChinchompa: HunterRumourDefinition = {
  id: 'grey-chinchompa',
  creature: 'Grey chinchompa',
  method: 'Box trap',
  locations: [RumourLocation.PISCATORIS_HUNTER_AREA, RumourLocation.KOUREND_WOODLAND, RumourLocation.ISLE_OF_SOULS],
  requiredHunterLevel: 53,
  tier: 'Expert',
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.CERVUS.name, HunterGuildMasterName.ACO.name, HunterGuildMasterName.TECO.name],
  leagueRegions: [GenericLeagueRegion.KANDARIN, GenericLeagueRegion.KOUREND, GenericLeagueRegion.MISTHALIN],
};

const SabreToothedKyatt: HunterRumourDefinition = {
  id: 'sabre-toothed-kyatt',
  creature: 'Sabre-toothed kyatt',
  method: 'Spiked pit',
  locations: [RumourLocation.RELLEKKA_HUNTER_AREA],
  requiredHunterLevel: 55,
  tier: 'Expert',
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.ORNUS.name, HunterGuildMasterName.ACO.name, HunterGuildMasterName.TECO.name],
  leagueRegions: [GenericLeagueRegion.FREMENNIK],
};

const DarkKebbit: HunterRumourDefinition = {
  id: 'dark-kebbit',
  creature: 'Dark kebbit',
  method: 'Falconry',
  locations: [RumourLocation.PISCATORIS_FALCONRY_AREA],
  requiredHunterLevel: 57,
  tier: 'Expert',
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.CERVUS.name, HunterGuildMasterName.ACO.name, HunterGuildMasterName.TECO.name],
  leagueRegions: [GenericLeagueRegion.KANDARIN],
};

const PyreFox: HunterRumourDefinition = {
  id: 'pyre-fox',
  creature: 'Pyre fox',
  method: 'Deadfall',
  locations: [RumourLocation.AVIUM_SAVANNAH],
  requiredHunterLevel: 57,
  tier: 'Expert',
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.CERVUS.name, HunterGuildMasterName.ORNUS.name],
  leagueRegions: [GenericLeagueRegion.VARLAMORE],
};

const RedSalamander: HunterRumourDefinition = {
  id: 'red-salamander',
  creature: 'Red salamander',
  method: 'Net trap',
  locations: [RumourLocation.OURANIA_HUNTER_AREA, RumourLocation.CHARRED_ISLAND],
  requiredHunterLevel: 59,
  tier: 'Master',
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.ACO.name, HunterGuildMasterName.TECO.name, HunterGuildMasterName.WOLF.name],
  leagueRegions: [GenericLeagueRegion.KANDARIN],
};

const RedChinchompa: HunterRumourDefinition = {
  id: 'red-chinchompa',
  creature: 'Red chinchompa',
  method: 'Box trap',
  locations: [RumourLocation.CHINCHOMPA_ISLAND, RumourLocation.FELDIP_HUNTER_AREA, RumourLocation.THE_GREAT_CONCH, RumourLocation.GWENITH_HUNTER_AREA, RumourLocation.RED_CHINCHOMPA_HUNTING_GROUND, RumourLocation.TLATI_RAINFOREST],
  requiredHunterLevel: 63,
  tier: 'Master',
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.CERVUS.name, HunterGuildMasterName.ORNUS.name, HunterGuildMasterName.ACO.name, HunterGuildMasterName.TECO.name, HunterGuildMasterName.WOLF.name],
  leagueRegions: [GenericLeagueRegion.KANDARIN, GenericLeagueRegion.TIRANNWN, GenericLeagueRegion.VARLAMORE],
};

const DashingKebbit: HunterRumourDefinition = {
  id: 'dashing-kebbit',
  creature: 'Dashing kebbit',
  method: 'Falconry',
  locations: [RumourLocation.PISCATORIS_FALCONRY_AREA],
  requiredHunterLevel: 69,
  tier: 'Master',
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.ACO.name, HunterGuildMasterName.TECO.name, HunterGuildMasterName.WOLF.name],
  leagueRegions: [GenericLeagueRegion.KANDARIN],
};

const SunlightAntelope: HunterRumourDefinition = {
  id: 'sunlight-antelope',
  creature: 'Sunlight antelope',
  method: 'Spiked pit',
  locations: [RumourLocation.AVIUM_SAVANNAH],
  requiredHunterLevel: 72,
  tier: 'Master',
  masterNames: ['Aco', 'Teco', 'Wolf'],
  leagueRegions: [GenericLeagueRegion.VARLAMORE],
};

const SunlightMoth: HunterRumourDefinition = {
  id: 'sunlight-moth',
  creature: 'Sunlight moth',
  method: 'Butterfly net',
  locations: [RumourLocation.AVIUM_SAVANNAH, RumourLocation.NEYPOTZLI],
  requiredHunterLevel: 75,
  tier: 'Master',
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.CERVUS.name, HunterGuildMasterName.TECO.name],
  leagueRegions: [GenericLeagueRegion.VARLAMORE],
};

const TecuSalamander: HunterRumourDefinition = {
  id: 'tecu-salamander',
  creature: 'Tecu salamander',
  method: 'Net trap',
  locations: [RumourLocation.RALOS_RISE],
  requiredHunterLevel: 79,
  tier: 'Master',
  masterNames: ['Aco', 'Wolf'],
  leagueRegions: [GenericLeagueRegion.VARLAMORE],
};

const Herbiboar: HunterRumourDefinition = {
  id: 'herbiboar',
  creature: 'Herbiboar',
  method: 'Tracking',
  locations: [RumourLocation.MUSHROOM_FOREST_ON_FOSSIL_ISLAND],
  requiredHunterLevel: 80,
  tier: 'Master',
  masterNames: ['Teco', 'Wolf'],
  questRequirements: ['Bone Voyage'],
  notes: 'Also requires Herblore 31',
  leagueRegions: [GenericLeagueRegion.MISTHALIN],
};

const EmbertailedJerboa: HunterRumourDefinition = {
  id: 'embertailed-jerboa',
  creature: 'Embertailed jerboa',
  method: 'Box trap',
  locations: [RumourLocation.WEST_OF_HUNTER_GUILD, RumourLocation.NORTH_WEST_OF_THE_LOCUS_OASIS],
  requiredHunterLevel: 39,
  tier: 'Expert',
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.ACO.name],
  leagueRegions: [GenericLeagueRegion.VARLAMORE],
};

const HornedGraahk: HunterRumourDefinition = {
  id: 'horned-graahk',
  creature: 'Horned graahk',
  method: 'Spiked pit',
  locations: [RumourLocation.KARAMJA_HUNTER_AREA],
  requiredHunterLevel: 41,
  tier: 'Adept',
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.CERVUS.name],
  leagueRegions: [GenericLeagueRegion.KARAMJA],
};

const SpottedKebbit: HunterRumourDefinition = {
  id: 'spotted-kebbit',
  creature: 'Spotted kebbit',
  method: 'Falconry',
  locations: [RumourLocation.PISCATORIS_FALCONRY_AREA],
  requiredHunterLevel: 43,
  tier: 'Adept',
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.CERVUS.name, HunterGuildMasterName.ORNUS.name],
  leagueRegions: [GenericLeagueRegion.KANDARIN],
};

const BlackWarlock: HunterRumourDefinition = {
  id: 'black-warlock',
  creature: 'Black warlock',
  method: 'Butterfly net',
  locations: [RumourLocation.FELDIP_HUNTER_AREA, RumourLocation.FARMING_GUILD, RumourLocation.TLATI_RAINFOREST, RumourLocation.SHIMMERING_ATOLL, RumourLocation.CRYPT_OF_TONALI_HUNTER_AREA, RumourLocation.UZER_HUNTER_AREA, RumourLocation.NECROPOLIS_HUNTER_AREA],
  requiredHunterLevel: 45,
  tier: 'Adept',
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.CERVUS.name],
  leagueRegions: [GenericLeagueRegion.KANDARIN, GenericLeagueRegion.KOUREND, GenericLeagueRegion.VARLAMORE],
};

const OrangeSalamander: HunterRumourDefinition = {
  id: 'orange-salamander',
  creature: 'Orange salamander',
  method: 'Net trap',
  locations: [RumourLocation.THE_GREAT_CONCH, RumourLocation.UZER_HUNTER_AREA, RumourLocation.NECROPOLIS_HUNTER_AREA],
  requiredHunterLevel: 47,
  tier: 'Expert',
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.CERVUS.name, HunterGuildMasterName.ORNUS.name],
  leagueRegions: [GenericLeagueRegion.DESERT],
};

const MoonlightMoth: HunterRumourDefinition = {
  id: 'moonlight-moth',
  creature: 'Moonlight moth',
  method: 'Butterfly net',
  locations: [RumourLocation.THE_BURROW, RumourLocation.NEYPOTZLI, RumourLocation.TONALI_CAVERN],
  requiredHunterLevel: 85,
  tier: 'Master',
  masterNames: ['Aco', 'Wolf'],
  leagueRegions: [GenericLeagueRegion.VARLAMORE],
};

const MoonlightAntelope: HunterRumourDefinition = {
  id: 'moonlight-antelope',
  creature: 'Moonlight antelope',
  method: 'Spiked pit',
  locations: [RumourLocation.THE_BURROW],
  requiredHunterLevel: 91,
  tier: 'Master',
  masterNames: ['Wolf'],
  questRequirements: ['At First Light'],
  leagueRegions: [GenericLeagueRegion.VARLAMORE],
};


/**
 * Registry of all the Rumours in the Hunter Guild, along with their properties such as the creature they pertain to,
 * the method of hunting,
 *  locations where the creature can be found, required Hunter level, tier, which masters can assign them,
 *  and any quest requirements or notes.
 * This registry serves as the central source of truth for all Hunter Rumours and is used by the HunterGuildMaster
 *  class to determine which rumours can be assigned to players based on their eligibility.
 */
export const HUNTER_RUMOUR_REGISTRY: HunterRumour[] = [
  new HunterRumour(TropicalWagtail),
  new HunterRumour(WildKebbit),
  new HunterRumour(SapphireGlacialis),
  new HunterRumour(SwampLizard),
  new HunterRumour(SpinedLarupia),
  new HunterRumour(BarbTailedKebbit),
  new HunterRumour(SnowyKnight),
  new HunterRumour(PricklyKebbit),
  new HunterRumour(EmbertailedJerboa),
  new HunterRumour(HornedGraahk),
  new HunterRumour(SpottedKebbit),
  new HunterRumour(BlackWarlock),
  new HunterRumour(OrangeSalamander),
  new HunterRumour(RazorBackedKebbit),
  new HunterRumour(SabreToothedKebbit),
  new HunterRumour(GreyChinchompa),
  new HunterRumour(SabreToothedKyatt),
  new HunterRumour(DarkKebbit),
  new HunterRumour(PyreFox),
  new HunterRumour(RedSalamander),
  new HunterRumour(RedChinchompa),
  new HunterRumour(DashingKebbit),
  new HunterRumour(SunlightAntelope),
  new HunterRumour(SunlightMoth),
  new HunterRumour(TecuSalamander),
  new HunterRumour(Herbiboar),
  new HunterRumour(MoonlightMoth),
  new HunterRumour(MoonlightAntelope),
];

import { GenericLeagueRegion } from '../../leagues';
import { HunterGuildMasterName } from './HunterGuildMasterName';
import { HunterRumour } from './HunterRumour';
import * as RumourLocation from './RumourLocation';
import { HunterRumourDefinition } from './types';

const TropicalWagtail: HunterRumourDefinition = {
  creature: 'Tropical wagtail',
  id: 'tropical-wagtail',
  leagueRegions: [GenericLeagueRegion.KANDARIN, GenericLeagueRegion.VARLAMORE],
  locations: [RumourLocation.FELDIP_HUNTER_AREA, RumourLocation.THE_GREAT_CONCH, RumourLocation.TLATI_RAINFOREST],
  masterNames: [HunterGuildMasterName.GILMAN.name],
  method: 'Bird snare',
  requiredHunterLevel: 19,
  tier: 'Novice',
};

const WildKebbit: HunterRumourDefinition = {
  creature: 'Wild kebbit',
  id: 'wild-kebbit',
  leagueRegions: [GenericLeagueRegion.KANDARIN, GenericLeagueRegion.VARLAMORE],
  locations: [RumourLocation.PISCATORIS_HUNTER_AREA, RumourLocation.AUBURNVALE],
  masterNames: [HunterGuildMasterName.GILMAN.name],
  method: 'Deadfall',
  requiredHunterLevel: 23,
  tier: 'Novice',
};

const SapphireGlacialis: HunterRumourDefinition = {
  creature: 'Sapphire glacialis',
  id: 'sapphire-glacialis',
  leagueRegions: [GenericLeagueRegion.FREMENNIK, GenericLeagueRegion.KOUREND, GenericLeagueRegion.VARLAMORE],
  locations: [RumourLocation.RELLEKKA_HUNTER_AREA, RumourLocation.FARMING_GUILD, RumourLocation.MONS_GRATIA],
  masterNames: [HunterGuildMasterName.GILMAN.name],
  method: 'Butterfly net',
  requiredHunterLevel: 25,
  tier: 'Novice',
};

const SwampLizard: HunterRumourDefinition = {
  creature: 'Swamp lizard',
  id: 'swamp-lizard',
  leagueRegions: [GenericLeagueRegion.MORYTANIA],
  locations: [RumourLocation.CANIFIS_HUNTER_AREA, RumourLocation.NORTH_WEST_OF_SLEPE],
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.CERVUS.name],
  method: 'Net trap',
  requiredHunterLevel: 29,
  tier: 'Adept',
};

const SpinedLarupia: HunterRumourDefinition = {
  creature: 'Spined larupia',
  id: 'spined-larupia',
  leagueRegions: [GenericLeagueRegion.KANDARIN],
  locations: [RumourLocation.FELDIP_HUNTER_AREA],
  masterNames: [HunterGuildMasterName.GILMAN.name, 'Aco'],
  method: 'Spiked pit',
  requiredHunterLevel: 31,
  tier: 'Expert',
};

const BarbTailedKebbit: HunterRumourDefinition = {
  creature: 'Barb-tailed kebbit',
  id: 'barb-tailed-kebbit',
  leagueRegions: [GenericLeagueRegion.KANDARIN],
  locations: [RumourLocation.FELDIP_HUNTER_AREA],
  masterNames: [HunterGuildMasterName.GILMAN.name],
  method: 'Deadfall',
  requiredHunterLevel: 33,
  tier: 'Novice',
};

const SnowyKnight: HunterRumourDefinition = {
  creature: 'Snowy knight',
  id: 'snowy-knight',
  leagueRegions: [
    GenericLeagueRegion.FREMENNIK,
    GenericLeagueRegion.KANDARIN,
    GenericLeagueRegion.KOUREND,
    GenericLeagueRegion.VARLAMORE,
  ],
  locations: [
    RumourLocation.FELDIP_HUNTER_AREA,
    RumourLocation.WEISS,
    RumourLocation.FARMING_GUILD,
    RumourLocation.MONS_GRATIA,
  ],
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.ACO.name],
  method: 'Butterfly net',
  requiredHunterLevel: 35,
  tier: 'Expert',
};

const PricklyKebbit: HunterRumourDefinition = {
  creature: 'Prickly kebbit',
  id: 'prickly-kebbit',
  leagueRegions: [GenericLeagueRegion.KANDARIN],
  locations: [RumourLocation.PISCATORIS_HUNTER_AREA],
  masterNames: [HunterGuildMasterName.GILMAN.name],
  method: 'Deadfall',
  requiredHunterLevel: 37,
  tier: 'Novice',
};

const RazorBackedKebbit: HunterRumourDefinition = {
  creature: 'Razor-backed kebbit',
  id: 'razor-backed-kebbit',
  leagueRegions: [GenericLeagueRegion.KANDARIN],
  locations: [RumourLocation.PISCATORIS_HUNTER_AREA],
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.CERVUS.name],
  method: 'Tracking',
  requiredHunterLevel: 49,
  tier: 'Adept',
};

const SabreToothedKebbit: HunterRumourDefinition = {
  creature: 'Sabre-toothed kebbit',
  id: 'sabre-toothed-kebbit',
  leagueRegions: [GenericLeagueRegion.FREMENNIK],
  locations: [RumourLocation.RELLEKKA_HUNTER_AREA],
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.CERVUS.name, HunterGuildMasterName.ORNUS.name],
  method: 'Deadfall',
  requiredHunterLevel: 51,
  tier: 'Expert',
};

const GreyChinchompa: HunterRumourDefinition = {
  creature: 'Grey chinchompa',
  id: 'grey-chinchompa',
  leagueRegions: [GenericLeagueRegion.KANDARIN, GenericLeagueRegion.KOUREND, GenericLeagueRegion.MISTHALIN],
  locations: [RumourLocation.PISCATORIS_HUNTER_AREA, RumourLocation.KOUREND_WOODLAND, RumourLocation.ISLE_OF_SOULS],
  masterNames: [
    HunterGuildMasterName.GILMAN.name,
    HunterGuildMasterName.CERVUS.name,
    HunterGuildMasterName.ACO.name,
    HunterGuildMasterName.TECO.name,
  ],
  method: 'Box trap',
  requiredHunterLevel: 53,
  tier: 'Expert',
};

const SabreToothedKyatt: HunterRumourDefinition = {
  creature: 'Sabre-toothed kyatt',
  id: 'sabre-toothed-kyatt',
  leagueRegions: [GenericLeagueRegion.FREMENNIK],
  locations: [RumourLocation.RELLEKKA_HUNTER_AREA],
  masterNames: [
    HunterGuildMasterName.GILMAN.name,
    HunterGuildMasterName.ORNUS.name,
    HunterGuildMasterName.ACO.name,
    HunterGuildMasterName.TECO.name,
  ],
  method: 'Spiked pit',
  requiredHunterLevel: 55,
  tier: 'Expert',
};

const DarkKebbit: HunterRumourDefinition = {
  creature: 'Dark kebbit',
  id: 'dark-kebbit',
  leagueRegions: [GenericLeagueRegion.KANDARIN],
  locations: [RumourLocation.PISCATORIS_FALCONRY_AREA],
  masterNames: [
    HunterGuildMasterName.GILMAN.name,
    HunterGuildMasterName.CERVUS.name,
    HunterGuildMasterName.ACO.name,
    HunterGuildMasterName.TECO.name,
  ],
  method: 'Falconry',
  requiredHunterLevel: 57,
  tier: 'Expert',
};

const PyreFox: HunterRumourDefinition = {
  creature: 'Pyre fox',
  id: 'pyre-fox',
  leagueRegions: [GenericLeagueRegion.VARLAMORE],
  locations: [RumourLocation.AVIUM_SAVANNAH],
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.CERVUS.name, HunterGuildMasterName.ORNUS.name],
  method: 'Deadfall',
  requiredHunterLevel: 57,
  tier: 'Expert',
};

const RedSalamander: HunterRumourDefinition = {
  creature: 'Red salamander',
  id: 'red-salamander',
  leagueRegions: [GenericLeagueRegion.KANDARIN],
  locations: [RumourLocation.OURANIA_HUNTER_AREA, RumourLocation.CHARRED_ISLAND],
  masterNames: [
    HunterGuildMasterName.GILMAN.name,
    HunterGuildMasterName.ACO.name,
    HunterGuildMasterName.TECO.name,
    HunterGuildMasterName.WOLF.name,
  ],
  method: 'Net trap',
  requiredHunterLevel: 59,
  tier: 'Master',
};

const RedChinchompa: HunterRumourDefinition = {
  creature: 'Red chinchompa',
  id: 'red-chinchompa',
  leagueRegions: [GenericLeagueRegion.KANDARIN, GenericLeagueRegion.TIRANNWN, GenericLeagueRegion.VARLAMORE],
  locations: [
    RumourLocation.CHINCHOMPA_ISLAND,
    RumourLocation.FELDIP_HUNTER_AREA,
    RumourLocation.THE_GREAT_CONCH,
    RumourLocation.GWENITH_HUNTER_AREA,
    RumourLocation.RED_CHINCHOMPA_HUNTING_GROUND,
    RumourLocation.TLATI_RAINFOREST,
  ],
  masterNames: [
    HunterGuildMasterName.GILMAN.name,
    HunterGuildMasterName.CERVUS.name,
    HunterGuildMasterName.ORNUS.name,
    HunterGuildMasterName.ACO.name,
    HunterGuildMasterName.TECO.name,
    HunterGuildMasterName.WOLF.name,
  ],
  method: 'Box trap',
  requiredHunterLevel: 63,
  tier: 'Master',
};

const DashingKebbit: HunterRumourDefinition = {
  creature: 'Dashing kebbit',
  id: 'dashing-kebbit',
  leagueRegions: [GenericLeagueRegion.KANDARIN],
  locations: [RumourLocation.PISCATORIS_FALCONRY_AREA],
  masterNames: [
    HunterGuildMasterName.GILMAN.name,
    HunterGuildMasterName.ACO.name,
    HunterGuildMasterName.TECO.name,
    HunterGuildMasterName.WOLF.name,
  ],
  method: 'Falconry',
  requiredHunterLevel: 69,
  tier: 'Master',
};

const SunlightAntelope: HunterRumourDefinition = {
  creature: 'Sunlight antelope',
  id: 'sunlight-antelope',
  leagueRegions: [GenericLeagueRegion.VARLAMORE],
  locations: [RumourLocation.AVIUM_SAVANNAH],
  masterNames: ['Aco', 'Teco', 'Wolf'],
  method: 'Spiked pit',
  requiredHunterLevel: 72,
  tier: 'Master',
};

const SunlightMoth: HunterRumourDefinition = {
  creature: 'Sunlight moth',
  id: 'sunlight-moth',
  leagueRegions: [GenericLeagueRegion.VARLAMORE],
  locations: [RumourLocation.AVIUM_SAVANNAH, RumourLocation.NEYPOTZLI],
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.CERVUS.name, HunterGuildMasterName.TECO.name],
  method: 'Butterfly net',
  requiredHunterLevel: 75,
  tier: 'Master',
};

const TecuSalamander: HunterRumourDefinition = {
  creature: 'Tecu salamander',
  id: 'tecu-salamander',
  leagueRegions: [GenericLeagueRegion.VARLAMORE],
  locations: [RumourLocation.RALOS_RISE],
  masterNames: ['Aco', 'Wolf'],
  method: 'Net trap',
  requiredHunterLevel: 79,
  tier: 'Master',
};

const Herbiboar: HunterRumourDefinition = {
  creature: 'Herbiboar',
  id: 'herbiboar',
  leagueRegions: [GenericLeagueRegion.MISTHALIN],
  locations: [RumourLocation.MUSHROOM_FOREST_ON_FOSSIL_ISLAND],
  masterNames: ['Teco', 'Wolf'],
  method: 'Tracking',
  notes: 'Also requires Herblore 31',
  questRequirements: ['Bone Voyage'],
  requiredHunterLevel: 80,
  tier: 'Master',
};

const EmbertailedJerboa: HunterRumourDefinition = {
  creature: 'Embertailed jerboa',
  id: 'embertailed-jerboa',
  leagueRegions: [GenericLeagueRegion.VARLAMORE],
  locations: [RumourLocation.WEST_OF_HUNTER_GUILD, RumourLocation.NORTH_WEST_OF_THE_LOCUS_OASIS],
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.ACO.name],
  method: 'Box trap',
  requiredHunterLevel: 39,
  tier: 'Expert',
};

const HornedGraahk: HunterRumourDefinition = {
  creature: 'Horned graahk',
  id: 'horned-graahk',
  leagueRegions: [GenericLeagueRegion.KARAMJA],
  locations: [RumourLocation.KARAMJA_HUNTER_AREA],
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.CERVUS.name],
  method: 'Spiked pit',
  requiredHunterLevel: 41,
  tier: 'Adept',
};

const SpottedKebbit: HunterRumourDefinition = {
  creature: 'Spotted kebbit',
  id: 'spotted-kebbit',
  leagueRegions: [GenericLeagueRegion.KANDARIN],
  locations: [RumourLocation.PISCATORIS_FALCONRY_AREA],
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.CERVUS.name, HunterGuildMasterName.ORNUS.name],
  method: 'Falconry',
  requiredHunterLevel: 43,
  tier: 'Adept',
};

const BlackWarlock: HunterRumourDefinition = {
  creature: 'Black warlock',
  id: 'black-warlock',
  leagueRegions: [GenericLeagueRegion.KANDARIN, GenericLeagueRegion.KOUREND, GenericLeagueRegion.VARLAMORE],
  locations: [
    RumourLocation.FELDIP_HUNTER_AREA,
    RumourLocation.FARMING_GUILD,
    RumourLocation.TLATI_RAINFOREST,
    RumourLocation.SHIMMERING_ATOLL,
    RumourLocation.CRYPT_OF_TONALI_HUNTER_AREA,
    RumourLocation.UZER_HUNTER_AREA,
    RumourLocation.NECROPOLIS_HUNTER_AREA,
  ],
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.CERVUS.name],
  method: 'Butterfly net',
  requiredHunterLevel: 45,
  tier: 'Adept',
};

const OrangeSalamander: HunterRumourDefinition = {
  creature: 'Orange salamander',
  id: 'orange-salamander',
  leagueRegions: [GenericLeagueRegion.DESERT],
  locations: [RumourLocation.THE_GREAT_CONCH, RumourLocation.UZER_HUNTER_AREA, RumourLocation.NECROPOLIS_HUNTER_AREA],
  masterNames: [HunterGuildMasterName.GILMAN.name, HunterGuildMasterName.CERVUS.name, HunterGuildMasterName.ORNUS.name],
  method: 'Net trap',
  requiredHunterLevel: 47,
  tier: 'Expert',
};

const MoonlightMoth: HunterRumourDefinition = {
  creature: 'Moonlight moth',
  id: 'moonlight-moth',
  leagueRegions: [GenericLeagueRegion.VARLAMORE],
  locations: [RumourLocation.THE_BURROW, RumourLocation.NEYPOTZLI, RumourLocation.TONALI_CAVERN],
  masterNames: ['Aco', 'Wolf'],
  method: 'Butterfly net',
  requiredHunterLevel: 85,
  tier: 'Master',
};

const MoonlightAntelope: HunterRumourDefinition = {
  creature: 'Moonlight antelope',
  id: 'moonlight-antelope',
  leagueRegions: [GenericLeagueRegion.VARLAMORE],
  locations: [RumourLocation.THE_BURROW],
  masterNames: ['Wolf'],
  method: 'Spiked pit',
  questRequirements: ['At First Light'],
  requiredHunterLevel: 91,
  tier: 'Master',
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

import { OsrsAccount } from '../account/OsrsAccount';
import { type EligibilityResult, evaluateRequirements } from '../eligibility/RequirementEvaluator';
import {
  CombatLevelRequirement,
  LevelRequirement,
  QuestPointRequirement,
  QuestRequirement,
  Requirement,
  RequirementType,
  SlayerLevelRequirement,
} from '../Requirement';
import { getMaxSkillBoost } from '../skills/SkillBoosts';
// Import all quests for registry
import AKingdomDivided from './all/AKingdomDivided';
import AlfredGrimhandsBarcrawl from './all/AlfredGrimhandsBarcrawl';
import ANightAtTheTheatre from './all/ANightAtTheTheatre';
import AnimalMagnetism from './all/AnimalMagnetism';
import AnotherSliceOfHAM from './all/AnotherSliceOfHAM';
import APorcineOfInterest from './all/APorcineOfInterest';
import ARuffSituation from './all/ARuffSituation';
import ASoulsBane from './all/ASoulsBane';
import ATailOfTwoCats from './all/ATailOfTwoCats';
import ATasteOfHope from './all/ATasteOfHope';
import AtFirstLight from './all/AtFirstLight';
import ATheatreOfBlood from './all/ATheatreOfBlood';
import BarbarianTraining from './all/BarbarianTraining';
import BearYourSoul from './all/BearYourSoul';
import BelowIceMountain from './all/BelowIceMountain';
import BeneathCursedSands from './all/BeneathCursedSands';
import BetweenARock from './all/BetweenARock';
import BigChompyBirdHunting from './all/BigChompyBirdHunting';
import Biohazard from './all/Biohazard';
import BlackKnightsFortress from './all/BlackKnightsFortress';
import BoneVoyage from './all/BoneVoyage';
import CabinFever from './all/CabinFever';
import ChildrenOfTheSun from './all/ChildrenOfTheSun';
import ClientOfKourend from './all/ClientOfKourend';
import ClockTower from './all/ClockTower';
import ColdWar from './all/ColdWar';
import Contact from './all/Contact';
import CooksAssistant from './all/CooksAssistant';
import CrabQuest from './all/CrabQuest';
import CreatureOfFenkenstrain from './all/CreatureOfFenkenstrain';
import CurrentAffairs from './all/CurrentAffairs';
import CurseOfTheEmptyLord from './all/CurseOfTheEmptyLord';
import DaddysHome from './all/DaddysHome';
import DarknessOfHallowvale from './all/DarknessOfHallowvale';
import DeathOnTheIsle from './all/DeathOnTheIsle';
import DeathPlateau from './all/DeathPlateau';
import DeathToTheDorgeshuun from './all/DeathToTheDorgeshuun';
import DefenderOfVarrock from './all/DefenderOfVarrock';
import DemonSlayer from './all/DemonSlayer';
import DesertTreasure from './all/DesertTreasure';
import DesertTreasureIITheFallenEmpire from './all/DesertTreasureIITheFallenEmpire';
import DeviousMinds from './all/DeviousMinds';
import DoricQuest from './all/DoricQuest';
import DragonSlayerI from './all/DragonSlayerI';
import DragonSlayerII from './all/DragonSlayerII';
import DreamMentor from './all/DreamMentor';
import DruidicRitual from './all/DruidicRitual';
import DwarfCannon from './all/DwarfCannon';
import EadgarsRuse from './all/EadgarsRuse';
import EaglesPeak from './all/EaglesPeak';
import ElementalWorkshopI from './all/ElementalWorkshopI';
import ElementalWorkshopII from './all/ElementalWorkshopII';
import EnakhrasLament from './all/EnakhrasLament';
import EnlightenedJourney from './all/EnlightenedJourney';
import EnterTheAbyss from './all/EnterTheAbyss';
import ErnestTheChicken from './all/ErnestTheChicken';
import EthicallyAcquiredAntiquities from './all/EthicallyAcquiredAntiquities';
import FairytaleIGrowingPains from './all/FairytaleIGrowingPains';
import FairytaleIICureAQueen from './all/FairytaleIICureAQueen';
import FallenFromGrace from './all/FallenFromGrace';
import FamilyCrest from './all/FamilyCrest';
import FamilyPest from './all/FamilyPest';
import FightArena from './all/FightArena';
import FishingContest from './all/FishingContest';
import ForgettableTale from './all/ForgettableTale';
import GardenOfTranquillity from './all/GardenOfTranquillity';
import GertrudesCat from './all/GertrudesCat';
import GettingAhead from './all/GettingAhead';
import GhostsAhoy from './all/GhostsAhoy';
import GoblinDiplomacy from './all/GoblinDiplomacy';
import GrimTales from './all/GrimTales';
import HauntedMine from './all/HauntedMine';
import HazeelCult from './all/HazeelCult';
import HeroesQuest from './all/HeroesQuest';
import HisFaithfulServants from './all/HisFaithfulServants';
import HolyGrail from './all/HolyGrail';
import HopespearsWill from './all/HopespearsWill';
import HorrorFromTheDeep from './all/HorrorFromTheDeep';
import IcthlarinsLittleHelper from './all/IcthlarinsLittleHelper';
import ImpCatcher from './all/ImpCatcher';
import InAidOfTheMyreque from './all/InAidOfTheMyreque';
import InSearchOfKnowledge from './all/InSearchOfKnowledge';
import InSearchOfTheMyreque from './all/InSearchOfTheMyreque';
import IntoTheTombs from './all/IntoTheTombs';
import JunglePotion from './all/JunglePotion';
import KingsRansom from './all/KingsRansom';
import LairOfTarnRazorlor from './all/LairOfTarnRazorlor';
import LandOfTheGoblins from './all/LandOfTheGoblins';
import LearningTheRopes from './all/LearningTheRopes';
import LegendsQuest from './all/LegendsQuest';
import LostCity from './all/LostCity';
import LunarDiplomacy from './all/LunarDiplomacy';
import MageArenaI from './all/MageArenaI';
import MageArenaII from './all/MageArenaII';
import MakingFriendsWithMyArm from './all/MakingFriendsWithMyArm';
import MakingHistory from './all/MakingHistory';
import MeatAndGreet from './all/MeatAndGreet';
import MerlinsCrystal from './all/MerlinsCrystal';
import MisthalinMystery from './all/MisthalinMystery';
import MonkeyMadness from './all/MonkeyMadness';
import MonkeyMadnessII from './all/MonkeyMadnessII';
import MonksFriend from './all/MonksFriend';
import MountainDaughter from './all/MountainDaughter';
import MourningsEndPartI from './all/MourningsEndPartI';
import MourningsEndPartII from './all/MourningsEndPartII';
import MurderMystery from './all/MurderMystery';
import MyArmsBigAdventure from './all/MyArmsBigAdventure';
import NatureSpirit from './all/NatureSpirit';
import ObservatoryQuest from './all/ObservatoryQuest';
import OlafsQuest from './all/OlafsQuest';
import OneSmallFavour from './all/OneSmallFavour';
import Pandemonium from './all/Pandemonium';
import PerilousMoons from './all/PerilousMoons';
import PiratesTreasure from './all/PiratesTreasure';
import PlagueCity from './all/PlagueCity';
import PriestInPeril from './all/PriestInPeril';
import PrinceAliRescue from './all/PrinceAliRescue';
import PryingTimes from './all/PryingTimes';
import RagAndBoneMan from './all/RagAndBoneMan';
import RagAndBoneManII from './all/RagAndBoneManII';
import Ratcatchers from './all/Ratcatchers';
import RecipeForDisaster from './all/RecipeForDisaster';
import RecruitmentDrive from './all/RecruitmentDrive';
import Regicide from './all/Regicide';
import RomeoAndJuliet from './all/RomeoAndJuliet';
import RovingElves from './all/RovingElves';
import RoyalTrouble from './all/RoyalTrouble';
import RumDeal from './all/RumDeal';
import RuneMysteries from './all/RuneMysteries';
import ScorpionCatcher from './all/ScorpionCatcher';
import Scrambled from './all/Scrambled';
import SeaSlug from './all/SeaSlug';
import SecretsOfTheNorth from './all/SecretsOfTheNorth';
import ShadesOfMortton from './all/ShadesOfMortton';
import ShadowOfTheStorm from './all/ShadowOfTheStorm';
import ShadowsOfCustodia from './all/ShadowsOfCustodia';
import SheepHerder from './all/SheepHerder';
import SheepShearer from './all/SheepShearer';
import ShieldOfArrav from './all/ShieldOfArrav';
import ShiloVillage from './all/ShiloVillage';
import SinsOfTheFather from './all/SinsOfTheFather';
import SkippyAndTheMogres from './all/SkippyAndTheMogres';
import SleepingGiants from './all/SleepingGiants';
import SongOfTheElves from './all/SongOfTheElves';
import SpiritsOfTheElid from './all/SpiritsOfTheElid';
import SwanSong from './all/SwanSong';
import TaiBwoWannaiTrio from './all/TaiBwoWannaiTrio';
import TearsOfGuthix from './all/TearsOfGuthix';
import TempleOfTheEye from './all/TempleOfTheEye';
import TheAscentOfArceuus from './all/TheAscentOfArceuus';
import TheBloodMoonRises from './all/TheBloodMoonRises';
import TheCorsairCurse from './all/TheCorsairCurse';
import TheCurseOfArrav from './all/TheCurseOfArrav';
import TheDepthsOfDespair from './all/TheDepthsOfDespair';
import TheDigSite from './all/TheDigSite';
import TheEnchantedKey from './all/TheEnchantedKey';
import TheEyesOfGlouphrie from './all/TheEyesOfGlouphrie';
import TheFeud from './all/TheFeud';
import TheFinalDawn from './all/TheFinalDawn';
import TheForsakenTower from './all/TheForsakenTower';
import TheFremennikExiles from './all/TheFremennikExiles';
import TheFremennikIsles from './all/TheFremennikIsles';
import TheFremennikTrials from './all/TheFremennikTrials';
import TheFrozenDoor from './all/TheFrozenDoor';
import TheGardenOfDeath from './all/TheGardenOfDeath';
import TheGeneralsShadow from './all/TheGeneralsShadow';
import TheGiantDwarf from './all/TheGiantDwarf';
import TheGolem from './all/TheGolem';
import TheGrandTree from './all/TheGrandTree';
import TheGreatBrainRobbery from './all/TheGreatBrainRobbery';
import TheHandInTheSand from './all/TheHandInTheSand';
import TheHeartOfDarkness from './all/TheHeartOfDarkness';
import TheIdesOfMilk from './all/TheIdesOfMilk';
import TheKnightsSword from './all/TheKnightsSword';
import TheLostTribe from './all/TheLostTribe';
import ThePathOfGlouphrie from './all/ThePathOfGlouphrie';
import TheQueenOfThieves from './all/TheQueenOfThieves';
import TheRedReef from './all/TheRedReef';
import TheRestlessGhost from './all/TheRestlessGhost';
import TheRibbitingTaleOfALilyPadLabourDispute from './all/TheRibbitingTaleOfALilyPadLabourDispute';
import TheSlugMenace from './all/TheSlugMenace';
import TheTaleOfTheRighteous from './all/TheTaleOfTheRighteous';
import TheTempleOfIkov from './all/TheTempleOfIkov';
import TheTouristTrap from './all/TheTouristTrap';
import ThroneOfMiscellania from './all/ThroneOfMiscellania';
import TowerOfLife from './all/TowerOfLife';
import TreeGnomeVillage from './all/TreeGnomeVillage';
import TribalTotem from './all/TribalTotem';
import TrollRomance from './all/TrollRomance';
import TrollStronghold from './all/TrollStronghold';
import TroubledTortugans from './all/TroubledTortugans';
import TwilightsPromise from './all/TwilightsPromise';
import UndergroundPass from './all/UndergroundPass';
import ValeTotems from './all/ValeTotems';
import VampyreSlayer from './all/VampyreSlayer';
import Wanted from './all/Wanted';
import Watchtower from './all/Watchtower';
import WaterfallQuest from './all/WaterfallQuest';
import WhatLiesBelow from './all/WhatLiesBelow';
import WhileGuthixSleeps from './all/WhileGuthixSleeps';
import WitchesPotion from './all/WitchesPotion';
import WitchsHouse from './all/WitchsHouse';
import XMarksTheSpot from './all/XMarksTheSpot';
import ZogreFleshEaters from './all/ZogreFleshEaters';
import { MiniQuestList } from './MiniQuestList';
import { Quest } from './Quest';
import { QuestList } from './QuestList';
/**
 * OSRS Quest utility tool
 *
 * @description A tool to help with quest-related operations, such as checking if an account can complete a quest.
 * @author James Cerniglia
 */
class QuestTool {
  private osrsAccount: OsrsAccount | undefined;

  constructor(account?: OsrsAccount) {
    this.osrsAccount = account;
  }

  /**
   * Set the account to be used in this quest tool
   * @param  {OsrsAccount} acc1 The osrs Account to be associated with this class object.
   */
  setOsrsAccount(acc1: OsrsAccount): boolean {
    if (acc1) {
      this.osrsAccount = acc1;
      return true;
    }
    return false;
  }

  /**
   * Get the osrs account associated with this quest tool
   * @return  {OsrsAccount | undefined} The osrs Account associated with this class object.
   */
  getOsrsAccount(): OsrsAccount | undefined {
    return this.osrsAccount;
  }

  /**
   * Determine if the account can complete a quest, including recursively checking quest requirements.
   * @param quest The quest to check (must be a Quest instance)
   * @param visited (internal) Set of quest names already checked to prevent infinite recursion
   */
  canCompleteQuest(quest: Quest | undefined, visited: Set<string> = new Set()): boolean {
    if (!this.osrsAccount) return false;
    if (!quest) return false;
    if (visited.has(quest.name)) return true; // Prevent infinite loops
    visited.add(quest.name);

    // check requirements
    if (!quest.requirements || quest.requirements.length === 0) return true;
    for (const req of quest.requirements) {
      if (req.type === RequirementType.Quest) {
        // Recursively check quest requirements
        const questReq = req as QuestRequirement;
        if (!questReq || !this.canCompleteQuest(QuestTool.getQuestByName(questReq.questName), visited)) {
          return false;
        }
      } else if (req.type === RequirementType.Level) {
        // Check if the account meets the level requirement
        const levelReq = req as LevelRequirement;
        const skill = this.osrsAccount.getSkill(levelReq.skillName);
        if (!skill) {
          return false; // Skill not found in account
        }
        // If the skill is boostable, we can check if the current level + max boost is enough
        if (levelReq.boostable) {
          if (skill.level + QuestTool.getMaxSkillBoost(levelReq.skillName) < levelReq.level) {
            return false;
          }
        } else if (skill.level < levelReq.level) {
          return false;
        }
      } else if (req.type === RequirementType.CombatLevel) {
        // Check combat level requirement (never boostable for quest access)
        const combatReq = req as CombatLevelRequirement;
        if (this.osrsAccount.combatLevel < combatReq.level) {
          return false;
        }
      } else if (req.type === RequirementType.QuestPoint) {
        // Check quest point total requirement
        const qpReq = req as QuestPointRequirement;
        if (this.osrsAccount.questPoints < qpReq.amount) {
          return false;
        }
      } else if (req.type === RequirementType.SlayerLevel) {
        // Check Slayer level requirement
        const slayerReq = req as SlayerLevelRequirement;
        const slayerSkill = this.osrsAccount.getSkill('Slayer');
        if (!slayerSkill || slayerSkill.level < slayerReq.level) {
          return false;
        }
      }
      // Item, Location, and SlayerUnlock requirements cannot be verified from
      // hiscores data alone; we conservatively skip them (assume met).
    }
    return true;
  }

  public static getAllQuests(): Quest[] {
    return QuestList.map(name => QuestTool.getQuestByName(name)).filter((q): q is Quest => q !== undefined);
  }

  public static getAllMiniQuests(): Quest[] {
    return MiniQuestList.map(name => QuestTool.getQuestByName(name)).filter((q): q is Quest => q !== undefined);
  }

  /**
   * All quest objects available in this library.
   * Adding a new quest file only requires: importing it above and appending it here.
   */
  private static readonly QUEST_OBJECTS: Quest[] = [
    AKingdomDivided,
    ANightAtTheTheatre,
    APorcineOfInterest,
    ARuffSituation,
    ASoulsBane,
    ATailOfTwoCats,
    ATasteOfHope,
    ATheatreOfBlood,
    AnimalMagnetism,
    AnotherSliceOfHAM,
    AtFirstLight,
    BelowIceMountain,
    BeneathCursedSands,
    BetweenARock,
    BigChompyBirdHunting,
    Biohazard,
    BlackKnightsFortress,
    BoneVoyage,
    CabinFever,
    ChildrenOfTheSun,
    ClientOfKourend,
    ClockTower,
    ColdWar,
    Contact,
    CooksAssistant,
    CrabQuest,
    CreatureOfFenkenstrain,
    CurrentAffairs,
    DarknessOfHallowvale,
    DeathOnTheIsle,
    DeathPlateau,
    DeathToTheDorgeshuun,
    DefenderOfVarrock,
    DemonSlayer,
    DesertTreasure,
    DesertTreasureIITheFallenEmpire,
    DeviousMinds,
    DoricQuest,
    DragonSlayerI,
    DragonSlayerII,
    DreamMentor,
    DruidicRitual,
    DwarfCannon,
    EadgarsRuse,
    EaglesPeak,
    ElementalWorkshopI,
    ElementalWorkshopII,
    EnakhrasLament,
    EnlightenedJourney,
    ErnestTheChicken,
    EthicallyAcquiredAntiquities,
    FairytaleIGrowingPains,
    FairytaleIICureAQueen,
    FallenFromGrace,
    FamilyCrest,
    FightArena,
    FishingContest,
    ForgettableTale,
    GardenOfTranquillity,
    GertrudesCat,
    GettingAhead,
    GhostsAhoy,
    GoblinDiplomacy,
    GrimTales,
    HauntedMine,
    HazeelCult,
    HeroesQuest,
    HolyGrail,
    HorrorFromTheDeep,
    IcthlarinsLittleHelper,
    ImpCatcher,
    InAidOfTheMyreque,
    InSearchOfTheMyreque,
    JunglePotion,
    KingsRansom,
    LandOfTheGoblins,
    LearningTheRopes,
    LegendsQuest,
    LostCity,
    LunarDiplomacy,
    MakingFriendsWithMyArm,
    MakingHistory,
    MeatAndGreet,
    MerlinsCrystal,
    MisthalinMystery,
    MonkeyMadness,
    MonkeyMadnessII,
    MonksFriend,
    MountainDaughter,
    MourningsEndPartI,
    MourningsEndPartII,
    MurderMystery,
    MyArmsBigAdventure,
    NatureSpirit,
    ObservatoryQuest,
    OlafsQuest,
    OneSmallFavour,
    Pandemonium,
    PerilousMoons,
    PiratesTreasure,
    PlagueCity,
    PriestInPeril,
    PrinceAliRescue,
    PryingTimes,
    RagAndBoneMan,
    RagAndBoneManII,
    Ratcatchers,
    RecipeForDisaster,
    RecruitmentDrive,
    Regicide,
    RomeoAndJuliet,
    RovingElves,
    RoyalTrouble,
    RumDeal,
    RuneMysteries,
    ScorpionCatcher,
    Scrambled,
    SeaSlug,
    SecretsOfTheNorth,
    ShadesOfMortton,
    ShadowOfTheStorm,
    ShadowsOfCustodia,
    SheepHerder,
    SheepShearer,
    ShieldOfArrav,
    ShiloVillage,
    SinsOfTheFather,
    SleepingGiants,
    SongOfTheElves,
    SpiritsOfTheElid,
    SwanSong,
    TaiBwoWannaiTrio,
    TearsOfGuthix,
    TempleOfTheEye,
    TheAscentOfArceuus,
    TheBloodMoonRises,
    TheCorsairCurse,
    TheCurseOfArrav,
    TheDepthsOfDespair,
    TheDigSite,
    TheEyesOfGlouphrie,
    TheFeud,
    TheFinalDawn,
    TheForsakenTower,
    TheFremennikExiles,
    TheFremennikIsles,
    TheFremennikTrials,
    TheGardenOfDeath,
    TheGiantDwarf,
    TheGolem,
    TheGrandTree,
    TheGreatBrainRobbery,
    TheHandInTheSand,
    TheHeartOfDarkness,
    TheIdesOfMilk,
    TheKnightsSword,
    TheLostTribe,
    ThePathOfGlouphrie,
    TheQueenOfThieves,
    TheRedReef,
    TheRestlessGhost,
    TheRibbitingTaleOfALilyPadLabourDispute,
    TheSlugMenace,
    TheTaleOfTheRighteous,
    TheTempleOfIkov,
    TheTouristTrap,
    ThroneOfMiscellania,
    TowerOfLife,
    TreeGnomeVillage,
    TribalTotem,
    TrollRomance,
    TrollStronghold,
    TroubledTortugans,
    TwilightsPromise,
    UndergroundPass,
    VampyreSlayer,
    Wanted,
    Watchtower,
    WaterfallQuest,
    WhatLiesBelow,
    WhileGuthixSleeps,
    WitchesPotion,
    WitchsHouse,
    XMarksTheSpot,
    ZogreFleshEaters,
    // Miniquests
    AlfredGrimhandsBarcrawl,
    BarbarianTraining,
    BearYourSoul,
    CurseOfTheEmptyLord,
    DaddysHome,
    EnterTheAbyss,
    FamilyPest,
    HisFaithfulServants,
    HopespearsWill,
    InSearchOfKnowledge,
    IntoTheTombs,
    LairOfTarnRazorlor,
    MageArenaI,
    MageArenaII,
    SkippyAndTheMogres,
    TheEnchantedKey,
    TheFrozenDoor,
    TheGeneralsShadow,
    ValeTotems,
  ] as Quest[];

  /**
   * Build the quest registry mapping normalized names to quest objects.
   * Each quest is registered by its own `name` property, so it is findable
   * both by exact name and fuzzy match via getQuestByName.
   * @returns Map of normalized quest names to Quest objects
   */
  private static buildQuestRegistry(): Map<string, Quest> {
    const registry = new Map<string, Quest>();
    for (const quest of QuestTool.QUEST_OBJECTS) {
      if (quest?.name) {
        registry.set(QuestTool.normalizeQuestName(quest.name), quest);
      }
    }
    return registry;
  }

  /**
   * Normalize a quest name for comparison purposes.
   * Removes punctuation, extra spaces, and converts to lowercase.
   * @param questName The quest name to normalize
   * @returns Normalized quest name
   */
  private static normalizeQuestName(questName: string): string {
    return questName
      .toLowerCase()
      .replace(/[^\w\s]/g, '') // Remove punctuation (except word chars and spaces)
      .replace(/\s+/g, ' ') // Normalize spaces
      .trim();
  }

  /**
   * Calculate Levenshtein distance between two strings for fuzzy matching.
   * @param str1 First string
   * @param str2 Second string
   * @returns Levenshtein distance
   */
  private static levenshteinDistance(str1: string, str2: string): number {
    const matrix: number[][] = [];

    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }

    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }

    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // Substitution
            matrix[i][j - 1] + 1, // Insertion
            matrix[i - 1][j] + 1, // Deletion
          );
        }
      }
    }

    return matrix[str2.length][str1.length];
  }

  /**
   * Get a quest by name with support for fuzzy matching and common variations.
   * Supports exact matches, case-insensitive matches, and approximate matches.
   * @param questName The name of the quest to retrieve
   * @returns Quest instance or undefined if not found
   */
  static getQuestByName(questName: string): Quest | undefined {
    if (!questName || questName.trim() === '') {
      return undefined;
    }

    // Initialize cache on first use (lazy initialization)
    if (!QuestTool.questCache) {
      QuestTool.questCache = QuestTool.buildQuestRegistry();
    }

    const normalized = QuestTool.normalizeQuestName(questName);

    // Try exact match first
    if (QuestTool.questCache.has(normalized)) {
      return QuestTool.questCache.get(normalized);
    }

    // Try fuzzy matching if exact match fails
    let bestMatch: Quest | undefined;
    let bestDistance = 5; // Threshold for fuzzy matching

    for (const [registryKey, quest] of QuestTool.questCache.entries()) {
      const distance = QuestTool.levenshteinDistance(normalized, registryKey);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestMatch = quest;
      }
    }

    return bestMatch;
  }

  // Static cache for quest registry (initialized lazily)
  private static questCache: Map<string, Quest> | undefined;

  /**
   * Get the maximum boost for a given skill, based on OSRS Wiki data.
   * @param skillName The name of the skill (case-insensitive, e.g. 'Attack', 'Herblore')
   * @returns The maximum boost amount for the skill (positive integer, or 0 if unboostable)
   */
  static getMaxSkillBoost(skillName: string): number {
    return getMaxSkillBoost(skillName);
  }

  /**
   * Evaluate whether an account meets a quest's requirements, including *why* it doesn't -
   * per-requirement detail, plus which checks hiscores can't actually verify (item/location/
   * Slayer-unlock/quest-point requirements). Recursively evaluates quest-prerequisite
   * requirements the same way.
   * @param quest The quest to evaluate
   * @param account The account to evaluate it against
   * @param visited (internal) Set of quest names already visited, to prevent infinite recursion
   */
  static evaluateEligibility(quest: Quest, account: OsrsAccount, visited: Set<string> = new Set()): EligibilityResult {
    if (visited.has(quest.name)) {
      return { advisories: [], checks: [], eligible: true, unmet: [] };
    }
    visited.add(quest.name);

    const result = evaluateRequirements((quest.requirements ?? []) as Requirement[], account);

    for (const check of result.checks) {
      if (check.requirement.type !== RequirementType.Quest) continue;
      const prereqName = (check.requirement as QuestRequirement).questName;
      const prereq = QuestTool.getQuestByName(prereqName);
      check.verifiable = true;

      if (!prereq) {
        check.met = false;
        check.detail = `Could not find quest data for "${prereqName}"`;
        continue;
      }

      const nested = QuestTool.evaluateEligibility(prereq, account, visited);
      check.met = nested.eligible;
      check.detail = nested.eligible
        ? `${prereqName}'s requirements are currently met`
        : `${prereqName}'s requirements aren't met yet (${nested.unmet.length} unmet)`;
    }

    const unmet = result.checks.filter(c => c.verifiable && !c.met);
    const advisories = result.checks.filter(c => !c.verifiable);
    return { advisories, checks: result.checks, eligible: unmet.length === 0, unmet };
  }
}

export { QuestTool };

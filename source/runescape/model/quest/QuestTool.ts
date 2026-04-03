import { OsrsAccount } from "../account/OsrsAccount";
import { LevelRequirement, QuestRequirement, RequirementType } from "../Requirement";
import { QuestList } from "./QuestList";
import { Quest } from "./Quest";

// Import all quests for registry
import AKingdomDivided from "./all/AKingdomDivided";
import ANightAtTheTheatre from "./all/ANightAtTheTheatre";
import APorcineOfInterest from "./all/APorcineOfInterest";
import ASoulsBane from "./all/ASoulsBane";
import ATailOfTwoCats from "./all/ATailOfTwoCats";
import ATasteOfHope from "./all/ATasteOfHope";
import ATheatreOfBlood from "./all/ATheatreOfBlood";
import AnimalMagnetism from "./all/AnimalMagnetism";
import AnotherSliceOfHAM from "./all/AnotherSliceOfHAM";
import AtFirstLight from "./all/AtFirstLight";
import BelowIceMountain from "./all/BelowIceMountain";
import BeneathCursedSands from "./all/BeneathCursedSands";
import BetweenARock from "./all/BetweenARock";
import BigChompyBirdHunting from "./all/BigChompyBirdHunting";
import Biohazard from "./all/Biohazard";
import BlackKnightsFortress from "./all/BlackKnightsFortress";
import BoneVoyage from "./all/BoneVoyage";
import CabinFever from "./all/CabinFever";
import ChildrenOfTheSun from "./all/ChildrenOfTheSun";
import ClientOfKourend from "./all/ClientOfKourend";
import ClockTower from "./all/ClockTower";
import ColdWar from "./all/ColdWar";
import Contact from "./all/Contact";
import CooksAssistant from "./all/CooksAssistant";
import CreatureOfFenkenstrain from "./all/CreatureOfFenkenstrain";
import CurrentAffairs from "./all/CurrentAffairs";
import DarknessOfHallowvale from "./all/DarknessOfHallowvale";
import DeathOnTheIsle from "./all/DeathOnTheIsle";
import DeathPlateau from "./all/DeathPlateau";
import DeathToTheDorgeshuun from "./all/DeathToTheDorgeshuun";
import DefenderOfVarrock from "./all/DefenderOfVarrock";
import DemonSlayer from "./all/DemonSlayer";
import DesertTreasure from "./all/DesertTreasure";
import DesertTreasureI from "./all/DesertTreasureI";
import DesertTreasureIITheFallenEmpire from "./all/DesertTreasureIITheFallenEmpire";
import DeviousMinds from "./all/DeviousMinds";
import DoricQuest from "./all/DoricQuest";
import DoricsQuest from "./all/DoricsQuest";
import DragonSlayerI from "./all/DragonSlayerI";
import DragonSlayerII from "./all/DragonSlayerII";
import DreamMentor from "./all/DreamMentor";
import DruidicRitual from "./all/DruidicRitual";
import DwarfCannon from "./all/DwarfCannon";
import EadgarsRuse from "./all/EadgarsRuse";
import EaglesPeak from "./all/EaglesPeak";
import ElementalWorkshopI from "./all/ElementalWorkshopI";
import ElementalWorkshopII from "./all/ElementalWorkshopII";
import EnakhrasLament from "./all/EnakhrasLament";
import EnlightenedJourney from "./all/EnlightenedJourney";
import ErnestTheChicken from "./all/ErnestTheChicken";
import EthicallyAcquiredAntiquities from "./all/EthicallyAcquiredAntiquities";
import FairytaleIGrowingPains from "./all/FairytaleIGrowingPains";
import FairytaleIICureAQueen from "./all/FairytaleIICureAQueen";
import FamilyCrest from "./all/FamilyCrest";
import FightArena from "./all/FightArena";
import FishingContest from "./all/FishingContest";
import ForgettableTale from "./all/ForgettableTale";
import GardenOfTranquillity from "./all/GardenOfTranquillity";
import GertrudesCat from "./all/GertrudesCat";
import GettingAhead from "./all/GettingAhead";
import GhostsAhoy from "./all/GhostsAhoy";
import GoblinDiplomacy from "./all/GoblinDiplomacy";
import GrimTales from "./all/GrimTales";
import HauntedMine from "./all/HauntedMine";
import HazeelCult from "./all/HazeelCult";
import HeroesQuest from "./all/HeroesQuest";
import HolyGrail from "./all/HolyGrail";
import HorrorFromTheDeep from "./all/HorrorFromTheDeep";
import IcthlarinsLittleHelper from "./all/IcthlarinsLittleHelper";
import ImpCatcher from "./all/ImpCatcher";
import InAidOfTheMyreque from "./all/InAidOfTheMyreque";
import InSearchOfTheMyreque from "./all/InSearchOfTheMyreque";
import JunglePotion from "./all/JunglePotion";
import KingsRansom from "./all/KingsRansom";
import LandOfTheGoblins from "./all/LandOfTheGoblins";
import LearningTheRopes from "./all/LearningTheRopes";
import LegendsQuest from "./all/LegendsQuest";
import LostCity from "./all/LostCity";
import LunarDiplomacy from "./all/LunarDiplomacy";
import MakingFriendsWithMyArm from "./all/MakingFriendsWithMyArm";
import MakingHistory from "./all/MakingHistory";
import MeatAndGreet from "./all/MeatAndGreet";
import MerlinsCrystal from "./all/MerlinsCrystal";
import MisthalinMystery from "./all/MisthalinMystery";
import MonkeyMadness from "./all/MonkeyMadness";
import MonkeyMadnessI from "./all/MonkeyMadnessI";
import MonkeyMadnessII from "./all/MonkeyMadnessII";
import MonksFriend from "./all/MonksFriend";
import MountainDaughter from "./all/MountainDaughter";
import MourningsEndPartI from "./all/MourningsEndPartI";
import MourningsEndPartII from "./all/MourningsEndPartII";
import MurderMystery from "./all/MurderMystery";
import MyArmsBigAdventure from "./all/MyArmsBigAdventure";
import NatureSpirit from "./all/NatureSpirit";
import ObservatoryQuest from "./all/ObservatoryQuest";
import OlafsQuest from "./all/OlafsQuest";
import OneSmallFavour from "./all/OneSmallFavour";
import Pandemonium from "./all/Pandemonium";
import PerilousMoons from "./all/PerilousMoons";
import PiratesTreasure from "./all/PiratesTreasure";
import PlagueCity from "./all/PlagueCity";
import PriestInPeril from "./all/PriestInPeril";
import PrinceAliRescue from "./all/PrinceAliRescue";
import PryingTimes from "./all/PryingTimes";
import RagAndBoneMan from "./all/RagAndBoneMan";
import RagAndBoneManI from "./all/RagAndBoneManI";
import RagAndBoneManII from "./all/RagAndBoneManII";
import Ratcatchers from "./all/Ratcatchers";
import RecipeForDisaster from "./all/RecipeForDisaster";
import RecruitmentDrive from "./all/RecruitmentDrive";
import Regicide from "./all/Regicide";
import RomeoAndJuliet from "./all/RomeoAndJuliet";
import RovingElves from "./all/RovingElves";
import RoyalTrouble from "./all/RoyalTrouble";
import RumDeal from "./all/RumDeal";
import RuneMysteries from "./all/RuneMysteries";
import ScorpionCatcher from "./all/ScorpionCatcher";
import Scrambled from "./all/Scrambled";
import SeaSlug from "./all/SeaSlug";
import SecretsOfTheNorth from "./all/SecretsOfTheNorth";
import ShadesOfMortton from "./all/ShadesOfMortton";
import ShadowOfTheStorm from "./all/ShadowOfTheStorm";
import ShadowsOfCustodia from "./all/ShadowsOfCustodia";
import SheepHerder from "./all/SheepHerder";
import SheepShearer from "./all/SheepShearer";
import ShieldOfArrav from "./all/ShieldOfArrav";
import ShiloVillage from "./all/ShiloVillage";
import SinsOfTheFather from "./all/SinsOfTheFather";
import SleepingGiants from "./all/SleepingGiants";
import SlugMenace from "./all/SlugMenace";
import SongOfTheElves from "./all/SongOfTheElves";
import SpiritsOfTheElid from "./all/SpiritsOfTheElid";
import SwanSong from "./all/SwanSong";
import TaiBwoWannaiTrio from "./all/TaiBwoWannaiTrio";
import TaleOfTheRighteous from "./all/TaleOfTheRighteous";
import TearsOfGuthix from "./all/TearsOfGuthix";
import TempleOfIkov from "./all/TempleOfIkov";
import TempleOfTheEye from "./all/TempleOfTheEye";
import TheAscentOfArceuus from "./all/TheAscentOfArceuus";
import TheCorsairCurse from "./all/TheCorsairCurse";
import TheCurseOfArrav from "./all/TheCurseOfArrav";
import TheDepthsOfDespair from "./all/TheDepthsOfDespair";
import TheDigSite from "./all/TheDigSite";
import TheEyesOfGlouphrie from "./all/TheEyesOfGlouphrie";
import TheFeud from "./all/TheFeud";
import TheFinalDawn from "./all/TheFinalDawn";
import TheForsakenTower from "./all/TheForsakenTower";
import TheFremennikExiles from "./all/TheFremennikExiles";
import TheFremennikIsles from "./all/TheFremennikIsles";
import TheFremennikTrials from "./all/TheFremennikTrials";
import TheGardenOfDeath from "./all/TheGardenOfDeath";
import TheGiantDwarf from "./all/TheGiantDwarf";
import TheGolem from "./all/TheGolem";
import TheGrandTree from "./all/TheGrandTree";
import TheGreatBrainRobbery from "./all/TheGreatBrainRobbery";
import TheHandInTheSand from "./all/TheHandInTheSand";
import TheHeartOfDarkness from "./all/TheHeartOfDarkness";
import TheIdesOfMilk from "./all/TheIdesOfMilk";
import TheKnightsSword from "./all/TheKnightsSword";
import TheLostTribe from "./all/TheLostTribe";
import ThePathOfGlouphrie from "./all/ThePathOfGlouphrie";
import TheQueenOfThieves from "./all/TheQueenOfThieves";
import TheRestlessGhost from "./all/TheRestlessGhost";
import TheRibbitingTaleOfALilyPadLabourDispute from "./all/TheRibbitingTaleOfALilyPadLabourDispute";
import TheSlugMenace from "./all/TheSlugMenace";
import TheTaleOfTheRighteous from "./all/TheTaleOfTheRighteous";
import TheTempleOfIkov from "./all/TheTempleOfIkov";
import TheTouristTrap from "./all/TheTouristTrap";
import ThroneOfMiscellania from "./all/ThroneOfMiscellania";
import TowerOfLife from "./all/TowerOfLife";
import TreeGnomeVillage from "./all/TreeGnomeVillage";
import TribalTotem from "./all/TribalTotem";
import TrollRomance from "./all/TrollRomance";
import TrollStronghold from "./all/TrollStronghold";
import TroubledTortugans from "./all/TroubledTortugans";
import TwilightsPromise from "./all/TwilightsPromise";
import UndergroundPass from "./all/UndergroundPass";
import VampyreSlayer from "./all/VampyreSlayer";
import Wanted from "./all/Wanted";
import Watchtower from "./all/Watchtower";
import WaterfallQuest from "./all/WaterfallQuest";
import WhatLiesBelow from "./all/WhatLiesBelow";
import WhileGuthixSleeps from "./all/WhileGuthixSleeps";
import WitchesPotion from "./all/WitchesPotion";
import WitchsHouse from "./all/WitchsHouse";
import WitchsPotion from "./all/WitchsPotion";
import XMarksTheSpot from "./all/XMarksTheSpot";
import ZogreFleshEaters from "./all/ZogreFleshEaters";
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
      }
    }
    return true;
  }

  public static getAllQuests(): Quest[] {
    return QuestList.map((name) => QuestTool.getQuestByName(name)).filter((q) => q !== undefined) as Quest[];
  }

  public static getAllMiniQuests(): Quest[] {
    return QuestList.map((name) => QuestTool.getQuestByName(name)).filter((q) => q !== undefined && q.miniquest) as Quest[];
  }

  /**
   * Build the quest registry mapping canonical names to quest objects.
   * Uses QuestList as the source of truth for quest names.
   * @returns Map of normalized quest names to Quest objects
   */
  private static buildQuestRegistry(): Map<string, Quest> {
    const registry = new Map<string, Quest>();

    // All available quests imported above
    const allQuests: Record<string, unknown> = {
      AKingdomDivided,
      ANightAtTheTheatre,
      APorcineOfInterest,
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
      CreatureOfFenkenstrain,
      CurrentAffairs,
      DarknessOfHallowvale,
      DeathOnTheIsle,
      DeathPlateau,
      DeathToTheDorgeshuun,
      DefenderOfVarrock,
      DemonSlayer,
      DesertTreasure,
      DesertTreasureI,
      DesertTreasureIITheFallenEmpire,
      DeviousMinds,
      DoricQuest,
      DoricsQuest,
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
      MonkeyMadnessI,
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
      RagAndBoneManI,
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
      SlugMenace,
      SongOfTheElves,
      SpiritsOfTheElid,
      SwanSong,
      TaiBwoWannaiTrio,
      TaleOfTheRighteous,
      TearsOfGuthix,
      TempleOfIkov,
      TempleOfTheEye,
      TheAscentOfArceuus,
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
      WitchsPotion,
      XMarksTheSpot,
      ZogreFleshEaters,
    };

    // Map canonical quest names from QuestList to quest objects
    for (const questName of QuestList) {
      const quest = QuestTool.findQuestByCanonicalName(questName, allQuests);
      if (quest) {
        registry.set(QuestTool.normalizeQuestName(questName), quest);
      }
    }

    return registry;
  }

  /**
   * Find the quest object matching a canonical quest name from QuestList.
   * Uses the quest's name property to match against the canonical name.
   * @param canonicalName The canonical name from QuestList
   * @param questMap Map of available quest objects
   * @returns The matching Quest object or undefined
   */
  private static findQuestByCanonicalName(canonicalName: string, questMap: Record<string, unknown>): Quest | undefined {
    // Direct match by quest.name property
    for (const quest of Object.values(questMap)) {
      if (quest && typeof quest === "object" && "name" in quest && (quest as Record<string, unknown>)["name"] === canonicalName) {
        return quest as Quest;
      }
    }
    return undefined;
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
      .replace(/[^\w\s]/g, "") // Remove punctuation (except word chars and spaces)
      .replace(/\s+/g, " ") // Normalize spaces
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
    if (!questName || questName.trim() === "") {
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
    // Data from https://oldschool.runescape.wiki/w/Temporary_skill_boost
    const boosts: { [key: string]: number } = {
      // No boost
      Agility: 5,

      Attack: 5,

      // Spicy stew (orange)
      Construction: 5,

      // Admiral pie
      Cooking: 5,

      // Volcanic ash, Summer pie
      Crafting: 3,

      // Super combat potion, Overload(+)
      Defence: 5,

      // Spicy stew (yellow)
      Farming: 5,

      // Chef's delight(m)
      Firemaking: 4,

      // Spicy stew (orange)
      Fishing: 5,

      // Mushroom pie
      Fletching: 3,

      // Summer pie
      Herblore: 5,

      // Preserve, Prayer-boosting items
      Hitpoints: 0,

      // Wild pie
      Hunter: 5,

      // Super combat potion, Overload(+)
      Magic: 4,

      // Hunter potion
      Mining: 3,

      // Ranging potion, Overload(+)
      Prayer: 2,

      // Overload(+), Imbued heart
      Ranged: 4,

      // Garden pie
      Runecraft: 5,

      // Fletching potion
      Slayer: 2,

      // Dwarven stout(m)
      Smithing: 4,

      // Super combat potion, Overload(+)
      Strength: 5,

      // Botanical pie
      Thieving: 5,

      // Spicy stew (red)
      Woodcutting: 3, // Spicy stew (orange)
      // Add more as needed
    };
    const normalized = skillName.charAt(0).toUpperCase() + skillName.slice(1).toLowerCase();
    return boosts[normalized] ?? 0;
  }
}

export { QuestTool };

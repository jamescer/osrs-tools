/**
 * Leagues Overview and Types
 *
 * Leagues are seasonal variants of OSRS with time-limited servers featuring area restrictions,
 * trade restrictions, boosted XP rates, and unique relics/masteries that alter gameplay.
 */

enum LeagueType {
  TWISTED = "Twisted League",
  TRAILBLAZER = "Trailblazer League",
  SHATTERED_RELICS = "Shattered Relics League",
  TRAILBLAZER_RELOADED = "Trailblazer Reloaded League",
  RAGING_ECHOES = "Raging Echoes League",
  DEMONIC_PACTS = "Demonic Pacts League",
}

enum TrophyTier {
  BRONZE = "Bronze",
  IRON = "Iron",
  STEEL = "Steel",
  MITHRIL = "Mithril",
  ADAMANT = "Adamant",
  RUNE = "Rune",
  DRAGON = "Dragon",
}

interface LeagueInfo {
  name: LeagueType;
  number: number;
  startDate: Date;
  endDate: Date;
  duration: number; // weeks
  xpMultiplier: number;
  maxDropRateMultiplier: number;
  relicTiers: number;
  maxUnlockedAreas: number;
  hasAreaRestrictions: boolean;
  hasFragments: boolean;
  hasCombatMasteries: boolean;
  hasEchoBosses: boolean;
  startingArea?: string;
}

interface LeagueTask {
  name: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Elite";
  points: number;
  type: "PvM" | "Skilling" | "Quest" | "Collection";
}

interface RelicFragment {
  name: string;
  effect: string;
  tier: number;
  combinesWith: string[];
}

interface LeagueReward {
  name: string;
  type: "Cosmetic" | "Pet" | "Trophy" | "Icon";
  tier?: TrophyTier;
}

class League {
  info: LeagueInfo;
  tasks: LeagueTask[] = [];
  rewards: LeagueReward[] = [];

  constructor(info: LeagueInfo) {
    this.info = info;
  }

  addTask(task: LeagueTask): void {
    this.tasks.push(task);
  }

  addReward(reward: LeagueReward): void {
    this.rewards.push(reward);
  }

  getDuration(): number {
    const timeDiff = this.info.endDate.getTime() - this.info.startDate.getTime();
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24 * 7));
  }
}

const LEAGUES_DATA: Record<LeagueType, LeagueInfo> = {
  [LeagueType.TWISTED]: {
    name: LeagueType.TWISTED,
    number: 1,
    startDate: new Date("2019-11-14"),
    endDate: new Date("2020-01-16"),
    duration: 8,
    xpMultiplier: 5,
    maxDropRateMultiplier: 1,
    relicTiers: 5,
    maxUnlockedAreas: 1,
    hasAreaRestrictions: true,
    hasFragments: false,
    hasCombatMasteries: false,
    hasEchoBosses: false,
    startingArea: "Great Kourend",
  },
  [LeagueType.TRAILBLAZER]: {
    name: LeagueType.TRAILBLAZER,
    number: 2,
    startDate: new Date("2020-10-28"),
    endDate: new Date("2021-01-06"),
    duration: 10,
    xpMultiplier: 16,
    maxDropRateMultiplier: 3,
    relicTiers: 6,
    maxUnlockedAreas: 5,
    hasAreaRestrictions: true,
    hasFragments: false,
    hasCombatMasteries: false,
    hasEchoBosses: false,
    startingArea: "Misthalin",
  },
  [LeagueType.SHATTERED_RELICS]: {
    name: LeagueType.SHATTERED_RELICS,
    number: 3,
    startDate: new Date("2022-01-19"),
    endDate: new Date("2022-03-16"),
    duration: 8,
    xpMultiplier: 4,
    maxDropRateMultiplier: 2,
    relicTiers: 5,
    maxUnlockedAreas: 999,
    hasAreaRestrictions: false,
    hasFragments: true,
    hasCombatMasteries: false,
    hasEchoBosses: false,
  },
  [LeagueType.TRAILBLAZER_RELOADED]: {
    name: LeagueType.TRAILBLAZER_RELOADED,
    number: 4,
    startDate: new Date("2023-11-15"),
    endDate: new Date("2024-01-10"),
    duration: 8,
    xpMultiplier: 16,
    maxDropRateMultiplier: 3,
    relicTiers: 8,
    maxUnlockedAreas: 7,
    hasAreaRestrictions: true,
    hasFragments: false,
    hasCombatMasteries: false,
    hasEchoBosses: false,
    startingArea: "Misthalin",
  },
  [LeagueType.RAGING_ECHOES]: {
    name: LeagueType.RAGING_ECHOES,
    number: 5,
    startDate: new Date("2024-11-27"),
    endDate: new Date("2025-01-22"),
    duration: 8,
    xpMultiplier: 5,
    maxDropRateMultiplier: 3,
    relicTiers: 8,
    maxUnlockedAreas: 8,
    hasAreaRestrictions: true,
    hasFragments: false,
    hasCombatMasteries: true,
    hasEchoBosses: true,
  },
  [LeagueType.DEMONIC_PACTS]: {
    name: LeagueType.DEMONIC_PACTS,
    number: 6,
    startDate: new Date("2026-04-15"),
    endDate: new Date("2026-06-10"),
    duration: 8,
    xpMultiplier: 5,
    maxDropRateMultiplier: 3,
    relicTiers: 8,
    maxUnlockedAreas: 8,
    hasAreaRestrictions: true,
    hasFragments: false,
    hasCombatMasteries: true,
    hasEchoBosses: true,
    startingArea: "Varlamore",
  },
};

const BRONZE_VETERAN_POINTS = 100;

export { League, LeagueType, TrophyTier, LEAGUES_DATA, BRONZE_VETERAN_POINTS };
export type { LeagueInfo, LeagueTask, LeagueReward, RelicFragment };


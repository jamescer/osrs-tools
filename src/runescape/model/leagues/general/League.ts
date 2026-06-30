import { PactTree } from "./Pact";

/**
 * A single relic option within a tier. Exactly one relic per tier
 * is chosen, and the choice is permanent for the rest of the league.
 */
export interface Relic {
  id: string;
  name: string;
  description: string;
  effects: string[];
  image?: string;
}

/**
 * A tier of relics. Reaching `pointThreshold` grants `passives` to
 * ALL players regardless of which relic (if any) they pick from
 * `relics`. Multiplier overrides represent the cumulative bonus once
 * this tier is reached (e.g. tier 7 might push xpMultiplier to 16).
 */
export interface RelicTier {
  id: string;
  tier: number;
  name: string;
  pointThreshold: number;
  passives: string[];
  relics: Relic[];
  xpMultiplier?: number;
  dropRateMultiplier?: number;
}

/**
 * A milestone reward unlocked by accumulating league points
 * (trophies, cosmetics, league-shop items) — earned automatically,
 * not chosen like a relic.
 */
export interface RewardTier {
  id: string;
  name: string;
  description?: string;
  threshold: number;
  image?: string;
}

interface BaseLeague {
  name: string;
  startDate: Date;
  endDate: Date;
  xpMultiplier: number;
  dropRateMultiplier: number;
  relicTiers: RelicTier[];
  rewards: RewardTier[];
  /** Not every league has one — Demonic Pacts is the first to */
  pactTree?: PactTree;
}

export interface League extends BaseLeague {
  id: string;
  number: number;
  theme: string;
}

export interface CustomLeague extends BaseLeague {}

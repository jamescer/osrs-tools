import { Skill } from './Skill';

interface SkillDetail {
  level: number;
  rank?: number;
  xp?: number;
}

type SkillMap = Partial<Record<Skill, SkillDetail>>;

/**
 * This is the Json representation of an OSRS account.
 * It is used for serialization and deserialization of account data.
 * It should be compatible with osrs-json-hiscores @ https://www.npmjs.com/package/osrs-json-hiscores
 */
interface OsrsAccountJson {
  name?: string;
  main?: {
    combatLevel?: number;
    questPoints?: number;
    skills?: Record<string, SkillDetail>;
  };
  combatLevel?: number;
  questPoints?: number;
  skills: Record<string, SkillDetail>;
  lastManStanding?: BossScore;
  pvpArena?: BossScore;
  soulWarsZeal?: BossScore;
  riftsClosed?: BossScore;
  colosseumGlory?: BossScore;
  collectionsLogged?: BossScore;
  leaguePoints?: BossScore;
  deadmanPoints?: BossScore;
  bosses?: Bosses;
  clues?: Clues;
  bountyHunter?: BountyHunter;
}

interface BossScore {
  rank: number;
  score: number;
}

interface Bosses {
  [bossName: string]: BossScore;
}

interface ClueScore {
  rank: number;
  score: number;
}

interface Clues {
  [clueType: string]: ClueScore;
}

interface BountyHunter {
  hunterV2?: BossScore;
  rogueV2?: BossScore;
  hunter?: BossScore;
  rogue?: BossScore;
}

/**
 * Json blob of an OSRS account, including skills, bosses, clues, and other tracked scores. This structure is used for serialization and deserialization of account data, and is compatible with osrs-json-hiscores.
 * Example usage:
 * const accountJson: OsrsAccountJson = {
 *   name: "A Squeezer",
 *   questPoints: 200,
 *   skills: {
 *     Attack: { level: 99, rank: 1, xp: 13034431 },
 *     Defence: { level: 99, rank: 2, xp: 13034431 },
 *     // ... other skills
 *   },
 *   bosses: {
 *     "Zulrah": { rank: 1000, score: 500 },
 *     // ... other bosses
 *   },
 *   clues: {
 *     "Easy": { rank: 5000, score: 100 },
 *     // ... other clue types
 *   },
 *   bountyHunter: {
 *     hunterV2: { rank: 2000, score: 300 },
 *     rogueV2: { rank: 2500, score: 400 },
 *   },
 *   // ... other tracked scores
 * };
 * const account = OsrsAccount.fromJson(accountJson);
 * console.log(account.name); // "A Squeezer"
 * console.log(account.getSkill("Attack")?.level); // 99
 * console.log(account.getBossScore("Zulrah")?.score); // 500
 * console.log(account.getClueScore("Easy")?.rank); // 5000
 * console.log(account.bountyHunter?.hunterV2?.score); // 300
 */
interface OsrsAccountData {
  name: string;
  questPoints: number;
  skills: SkillMap;
  bosses?: Bosses;
  clues?: Clues;
  bountyHunter?: BountyHunter;
  lastManStanding?: BossScore;
  pvpArena?: BossScore;
  soulWarsZeal?: BossScore;
  riftsClosed?: BossScore;
  colosseumGlory?: BossScore;
  collectionsLogged?: BossScore;
  leaguePoints?: BossScore;
  deadmanPoints?: BossScore;
  combatLevel?: number;
  totalLevel?: number;
  totalXp?: number;
}

class OsrsAccount {
  #name: string;
  #questPoints: number;
  #skills: SkillMap;
  #bosses?: Bosses;
  #clues?: Clues;
  #bountyHunter?: BountyHunter;
  #lastManStanding?: BossScore;
  #pvpArena?: BossScore;
  #soulWarsZeal?: BossScore;
  #riftsClosed?: BossScore;
  #colosseumGlory?: BossScore;
  #collectionsLogged?: BossScore;
  #leaguePoints?: BossScore;
  #deadmanPoints?: BossScore;

  constructor(data: OsrsAccountData) {
    this.#name = data.name;
    this.#questPoints = data.questPoints;
    this.#skills = data.skills;
    this.#bosses = data.bosses;
    this.#clues = data.clues;
    this.#bountyHunter = data.bountyHunter;
    this.#lastManStanding = data.lastManStanding;
    this.#pvpArena = data.pvpArena;
    this.#soulWarsZeal = data.soulWarsZeal;
    this.#riftsClosed = data.riftsClosed;
    this.#colosseumGlory = data.colosseumGlory;
    this.#collectionsLogged = data.collectionsLogged;
    this.#leaguePoints = data.leaguePoints;
    this.#deadmanPoints = data.deadmanPoints;
  }

  static fromJson(json: OsrsAccountJson): OsrsAccount {
    const name = json.name ?? '';
    const questPoints = json.main?.questPoints ?? json.questPoints ?? 0;
    const srcSkills = json.main?.skills ?? json.skills ?? {};
    const skills: SkillMap = {};
    for (const key of Object.keys(srcSkills)) {
      const skillKey = Object.values(Skill).find(s => s.toLowerCase() === key.toLowerCase()) as Skill | undefined;
      if (skillKey) {
        skills[skillKey] = {
          level: srcSkills[key].level,
          rank: srcSkills[key].rank,
          xp: srcSkills[key].xp,
        };
      }
    }
    return new OsrsAccount({
      bosses: json.bosses ? { ...json.bosses } : undefined,
      bountyHunter: json.bountyHunter ? { ...json.bountyHunter } : undefined,
      clues: json.clues ? { ...json.clues } : undefined,
      collectionsLogged: json.collectionsLogged,
      colosseumGlory: json.colosseumGlory,
      deadmanPoints: json.deadmanPoints,
      lastManStanding: json.lastManStanding,
      leaguePoints: json.leaguePoints,
      name,
      pvpArena: json.pvpArena,
      questPoints,
      riftsClosed: json.riftsClosed,
      skills,
      soulWarsZeal: json.soulWarsZeal,
    });
  }

  get name(): string {
    return this.#name;
  }
  get questPoints(): number {
    return this.#questPoints;
  }
  get skills(): SkillMap {
    return this.#skills;
  }
  get bosses(): Bosses | undefined {
    return this.#bosses;
  }
  get clues(): Clues | undefined {
    return this.#clues;
  }
  get bountyHunter(): BountyHunter | undefined {
    return this.#bountyHunter;
  }
  get lastManStanding(): BossScore | undefined {
    return this.#lastManStanding;
  }
  get pvpArena(): BossScore | undefined {
    return this.#pvpArena;
  }
  get soulWarsZeal(): BossScore | undefined {
    return this.#soulWarsZeal;
  }
  get riftsClosed(): BossScore | undefined {
    return this.#riftsClosed;
  }
  get colosseumGlory(): BossScore | undefined {
    return this.#colosseumGlory;
  }
  get collectionsLogged(): BossScore | undefined {
    return this.#collectionsLogged;
  }
  get leaguePoints(): BossScore | undefined {
    return this.#leaguePoints;
  }
  get deadmanPoints(): BossScore | undefined {
    return this.#deadmanPoints;
  }

  // https://oldschool.runescape.wiki/w/Combat_level
  get combatLevel(): number {
    const lvl = (s: Skill): number => this.#skills[s]?.level ?? 1;
    const base = (lvl(Skill.Defence) + lvl(Skill.Hitpoints) + Math.floor(lvl(Skill.Prayer) / 2)) / 4;
    const melee = (13 / 40) * (lvl(Skill.Attack) + lvl(Skill.Strength));
    const ranged = (13 / 40) * Math.floor(lvl(Skill.Ranged) * 1.5);
    const magic = (13 / 40) * Math.floor(lvl(Skill.Magic) * 1.5);
    return Math.floor(base + Math.max(melee, ranged, magic));
  }

  /** Sum of all tracked skill levels. Max 2,376 with all 24 skills at 99. */
  get totalLevel(): number {
    return Object.values(this.#skills).reduce((sum, s) => sum + (s?.level ?? 0), 0);
  }

  /** Total XP across all skills. Undefined if any skill is missing XP data. */
  get totalXp(): number | undefined {
    const vals = Object.values(this.#skills);
    if (!vals.length || vals.some(s => s?.xp === undefined)) return undefined;
    return vals.reduce((sum, s) => sum + (s?.xp ?? 0), 0);
  }

  getSkill(skill: Skill | string): SkillDetail | undefined {
    const key = Object.values(Skill).find(s => s.toLowerCase() === String(skill).toLowerCase()) as Skill | undefined;
    return key ? this.#skills[key] : undefined;
  }

  getBossScore(bossName: string): BossScore | undefined {
    return this.#bosses?.[bossName];
  }

  getClueScore(clueType: string): ClueScore | undefined {
    return this.#clues?.[clueType];
  }

  toString(): string {
    return `${this.#name}:\nCombat Level: ${this.combatLevel}\nQuestPoints: ${this.#questPoints}`;
  }

  toJson(): OsrsAccountData {
    return {
      bosses: this.#bosses,
      bountyHunter: this.#bountyHunter,
      clues: this.#clues,
      collectionsLogged: this.#collectionsLogged,
      colosseumGlory: this.#colosseumGlory,
      deadmanPoints: this.#deadmanPoints,
      lastManStanding: this.#lastManStanding,
      leaguePoints: this.#leaguePoints,
      name: this.#name,
      pvpArena: this.#pvpArena,
      questPoints: this.#questPoints,
      riftsClosed: this.#riftsClosed,
      skills: this.#skills,
      soulWarsZeal: this.#soulWarsZeal,
      combatLevel: this.combatLevel,
      totalLevel: this.totalLevel,
      totalXp: this.totalXp,
    };
  }
}

export type { Bosses, BossScore, BountyHunter, Clues, ClueScore, OsrsAccountData, SkillDetail, SkillMap };
export { OsrsAccount };

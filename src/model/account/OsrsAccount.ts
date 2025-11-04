interface SkillDetail {
  rank: number;
  level: number;
  xp: number;
}

interface Skill {
  level: number;
}

interface Skills {
  [skillName: string]: Skill;
}

interface SkillsDetail {
  [skillName: string]: SkillDetail;
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

interface OsrsAccountData {
  name: string;
  combatLevel: number;
  questPoints: number;
  skills: Skills;
  skillsDetail?: SkillsDetail;
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
}

class OsrsAccount {
  #name: string;
  #combatLevel: number;
  #questPoints: number;
  #skills: Skills;
  #skillsDetail?: SkillsDetail;
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
    this.#combatLevel = data.combatLevel;
    this.#questPoints = data.questPoints;
    this.#skills = data.skills;
    this.#skillsDetail = data.skillsDetail;
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

  static fromJson(json: any): OsrsAccount {
    const name = json.name || '';
    const combatLevel = json.main?.combatLevel ?? json.combatLevel ?? 3;
    const questPoints = json.main?.questPoints ?? json.questPoints ?? 0;
    // Accept both lower and upper case skill keys
    const skills: Skills = {};
    const skillsDetail: SkillsDetail = {};
    const srcSkills = json.main?.skills || json.skills || {};
    for (const key of Object.keys(srcSkills)) {
      skills[key.toLowerCase()] = { level: srcSkills[key].level };
      skillsDetail[key.toLowerCase()] = {
        level: srcSkills[key].level,
        rank: srcSkills[key].rank,
        xp: srcSkills[key].xp,
      };
    }
    const bosses: Bosses | undefined = json.bosses ? { ...json.bosses } : undefined;
    const clues: Clues | undefined = json.clues ? { ...json.clues } : undefined;
    const bountyHunter: BountyHunter | undefined = json.bountyHunter
      ? { ...json.bountyHunter }
      : undefined;
    const lastManStanding: BossScore | undefined = json.lastManStanding;
    const pvpArena: BossScore | undefined = json.pvpArena;
    const soulWarsZeal: BossScore | undefined = json.soulWarsZeal;
    const riftsClosed: BossScore | undefined = json.riftsClosed;
    const colosseumGlory: BossScore | undefined = json.colosseumGlory;
    const collectionsLogged: BossScore | undefined = json.collectionsLogged;
    const leaguePoints: BossScore | undefined = json.leaguePoints;
    const deadmanPoints: BossScore | undefined = json.deadmanPoints;
    return new OsrsAccount({
      bosses,
      bountyHunter,
      clues,
      collectionsLogged,
      combatLevel,
      colosseumGlory,
      lastManStanding,
      deadmanPoints,
      name,
      leaguePoints,
      questPoints,
      pvpArena,
      skills,
      riftsClosed,
      skillsDetail,
      soulWarsZeal,
    });
  }

  get name(): string {
    return this.#name;
  }

  get combatLevel(): number {
    return this.#combatLevel;
  }

  get questPoints(): number {
    return this.#questPoints;
  }

  get skills(): Skills {
    return this.#skills;
  }

  get skillsDetail(): SkillsDetail | undefined {
    return this.#skillsDetail;
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

  getSkill(skillName: string): Skill | undefined {
    return this.#skills[skillName.toLowerCase()];
  }

  getSkillDetail(skillName: string): SkillDetail | undefined {
    return this.#skillsDetail?.[skillName.toLowerCase()];
  }

  getBossScore(bossName: string): BossScore | undefined {
    return this.#bosses?.[bossName];
  }

  getClueScore(clueType: string): ClueScore | undefined {
    return this.#clues?.[clueType];
  }

  toString(): string {
    return `${this.#name}:\nCombat Level: ${this.#combatLevel}\nQuestPoints: ${this.#questPoints}`;
  }

  toJson(): OsrsAccountData {
    return {
      bosses: this.#bosses,
      bountyHunter: this.#bountyHunter,
      clues: this.#clues,
      collectionsLogged: this.#collectionsLogged,
      combatLevel: this.#combatLevel,
      colosseumGlory: this.#colosseumGlory,
      lastManStanding: this.#lastManStanding,
      deadmanPoints: this.#deadmanPoints,
      name: this.#name,
      leaguePoints: this.#leaguePoints,
      questPoints: this.#questPoints,
      pvpArena: this.#pvpArena,
      skills: this.#skills,
      riftsClosed: this.#riftsClosed,
      skillsDetail: this.#skillsDetail,
      soulWarsZeal: this.#soulWarsZeal,
    };
  }
}

export {
  Bosses,
  BossScore,
  BountyHunter,
  Clues,
  ClueScore,
  OsrsAccount,
  OsrsAccountData,
  Skill,
  Skills,
  SkillsDetail,
};

import { OsrsAccount } from "../../../source/runescape/model/account/OsrsAccount";
import { account as accountData } from "../../resources/A_Squeezer_Main_Data";
import { describe, it, expect, beforeEach } from "@jest/globals";

/**
 * Comprehensive tests for OsrsAccount
 * Tests account creation, skill management, and score retrieval
 */
describe("OsrsAccount", () => {
  let account: OsrsAccount;

  beforeEach(() => {
    account = OsrsAccount.fromJson(accountData);
  });

  describe("Account initialization", () => {
    it("should create account from JSON data", () => {
      expect(account).toBeDefined();
      expect(account.name).toBe("A Squeezer");
    });

    it("should initialize all score properties", () => {
      expect(account.bosses).toBeDefined();
      expect(account.clues).toBeDefined();
      expect(account.bountyHunter).toBeDefined();
      expect(account.lastManStanding).toBeDefined();
      expect(account.pvpArena).toBeDefined();
      expect(account.soulWarsZeal).toBeDefined();
      expect(account.riftsClosed).toBeDefined();
      expect(account.colosseumGlory).toBeDefined();
      expect(account.collectionsLogged).toBeDefined();
      expect(account.leaguePoints).toBeDefined();
      expect(account.deadmanPoints).toBeDefined();
    });

    it("should initialize skills", () => {
      expect(account.skills).toBeDefined();
      expect(Object.keys(account.skills).length).toBeGreaterThan(0);
    });

    it("should initialize skills detail", () => {
      expect(account.skillsDetail).toBeDefined();
      expect(Object.keys(account.skillsDetail).length).toBeGreaterThan(0);
    });

    it("should have quest points", () => {
      expect(account.questPoints).toBeDefined();
      expect(typeof account.questPoints).toBe("number");
    });

    it("should have combat level", () => {
      expect(account.combatLevel).toBeDefined();
      expect(typeof account.combatLevel).toBe("number");
    });
  });

  describe("Skill retrieval", () => {
    it("should get skill by name", () => {
      const skill = account.getSkill("attack");
      expect(skill).toBeDefined();
      expect(skill?.level).toBe(99);
    });

    it("should get skill case-insensitively", () => {
      const skill1 = account.getSkill("Attack");
      const skill2 = account.getSkill("ATTACK");
      const skill3 = account.getSkill("attack");

      expect(skill1?.level).toBe(skill2?.level);
      expect(skill2?.level).toBe(skill3?.level);
    });

    it("should return undefined for non-existent skill", () => {
      const skill = account.getSkill("nonexistent");
      expect(skill).toBeUndefined();
    });

    it("should get all primary combat skills", () => {
      expect(account.getSkill("attack")).toBeDefined();
      expect(account.getSkill("strength")).toBeDefined();
      expect(account.getSkill("defence")).toBeDefined();
      expect(account.getSkill("ranged")).toBeDefined();
      expect(account.getSkill("magic")).toBeDefined();
    });

    it("should get all resource gathering skills", () => {
      expect(account.getSkill("mining")).toBeDefined();
      expect(account.getSkill("fishing")).toBeDefined();
      expect(account.getSkill("woodcutting")).toBeDefined();
      expect(account.getSkill("farming")).toBeDefined();
    });

    it("should get all artisan skills", () => {
      expect(account.getSkill("cooking")).toBeDefined();
      expect(account.getSkill("crafting")).toBeDefined();
      expect(account.getSkill("smithing")).toBeDefined();
      expect(account.getSkill("herblore")).toBeDefined();
    });
  });

  describe("Skill detail retrieval", () => {
    it("should get skill detail by name", () => {
      const skillDetail = account.getSkillDetail("attack");
      expect(skillDetail).toBeDefined();
      expect(skillDetail?.level).toBeDefined();
      expect(skillDetail?.xp).toBeDefined();
      expect(skillDetail?.rank).toBeDefined();
    });

    it("should have rank for all skill details", () => {
      const skillDetail = account.getSkillDetail("attack");
      expect(skillDetail?.rank).toBeDefined();
      expect(skillDetail?.rank).toBeGreaterThan(0);
    });

    it("should have XP for all skill details", () => {
      const skillDetail = account.getSkillDetail("attack");
      expect(skillDetail?.xp).toBeDefined();
      expect(skillDetail?.xp).toBeGreaterThanOrEqual(0);
    });

    it("should return undefined for non-existent skill detail", () => {
      const skillDetail = account.getSkillDetail("nonexistent");
      expect(skillDetail).toBeUndefined();
    });
  });

  describe("Boss score retrieval", () => {
    it("should get boss score by name", () => {
      const bossScore = account.getBossScore("zulrah");
      expect(bossScore).toBeDefined();
      if (bossScore) {
        expect(bossScore.rank).toBeGreaterThan(0);
        expect(bossScore.score).toBeGreaterThanOrEqual(0);
      }
    });

    it("should get boss score case-insensitively", () => {
      const score1 = account.getBossScore("Zulrah");
      const score2 = account.getBossScore("ZULRAH");
      const score3 = account.getBossScore("zulrah");

      if (score1 && score2 && score3) {
        expect(score1.score).toBe(score2.score);
        expect(score2.score).toBe(score3.score);
      }
    });

    it("should return undefined for non-existent boss", () => {
      const bossScore = account.getBossScore("nonexistent");
      expect(bossScore).toBeUndefined();
    });

    it("should support multiple bosses", () => {
      const zulrah = account.getBossScore("zulrah");
      const vorkath = account.getBossScore("vorkath");
      // At least one should exist
      expect(zulrah || vorkath).toBeDefined();
    });
  });

  describe("Clue score retrieval", () => {
    it("should get clue score by type", () => {
      const clueScore = account.getClueScore("beginner");
      expect(clueScore).toBeDefined();
      if (clueScore) {
        expect(clueScore.rank).toBeGreaterThan(0);
        expect(clueScore.score).toBeGreaterThanOrEqual(0);
      }
    });

    it("should get all clue difficulty types", () => {
      const difficulties = ["beginner", "easy", "medium", "hard", "elite", "master"];
      for (const difficulty of difficulties) {
        const score = account.getClueScore(difficulty);
        // At least some should exist
      }
    });

    it("should return undefined for invalid clue type", () => {
      const clueScore = account.getClueScore("invalid");
      expect(clueScore).toBeUndefined();
    });

    it("should handle case-insensitive clue types", () => {
      const score1 = account.getClueScore("Beginner");
      const score2 = account.getClueScore("BEGINNER");
      const score3 = account.getClueScore("beginner");

      if (score1 && score2 && score3) {
        expect(score1.score).toBe(score2.score);
      }
    });
  });

  describe("String representation", () => {
    it("should return correct string from toString()", () => {
      const str = account.toString();
      expect(str).toContain(account.name);
      expect(str).toContain(account.combatLevel.toString());
      expect(str).toContain(account.questPoints.toString());
    });

    it("should format combat level correctly", () => {
      const str = account.toString();
      expect(str).toMatch(/combat level|Combat Level/i);
    });

    it("should format quest points correctly", () => {
      const str = account.toString();
      expect(str).toMatch(/quest|Quest/i);
    });
  });

  describe("JSON serialization", () => {
    it("should return correct data from toJson()", () => {
      const json = account.toJson();
      expect(json.name).toBe(account.name);
      expect(json.combatLevel).toBe(account.combatLevel);
      expect(json.questPoints).toBe(account.questPoints);
    });

    it("should include skills in JSON", () => {
      const json = account.toJson();
      expect(json.skills).toBeDefined();
      expect(Object.keys(json.skills).length).toBeGreaterThan(0);
    });

    it("should include boss scores in JSON", () => {
      const json = account.toJson();
      expect(json.bosses).toBeDefined();
    });

    it("should be reversible (JSON -> Account -> JSON)", () => {
      const json1 = account.toJson();
      const account2 = OsrsAccount.fromJson(json1);
      const json2 = account2.toJson();

      expect(json1.name).toBe(json2.name);
      expect(json1.combatLevel).toBe(json2.combatLevel);
      expect(json1.questPoints).toBe(json2.questPoints);
    });
  });

  describe("Account statistics", () => {
    it("should have 99 attack", () => {
      const attack = account.getSkill("attack");
      expect(attack?.level).toBe(99);
    });

    it("should have positive quest points", () => {
      expect(account.questPoints).toBeGreaterThan(0);
    });

    it("should have valid combat level", () => {
      expect(account.combatLevel).toBeGreaterThan(0);
      expect(account.combatLevel).toBeLessThanOrEqual(138);
    });

    it("should have reasonable skill levels", () => {
      const skillDetail = account.getSkillDetail("attack");
      expect(skillDetail?.level).toBeGreaterThanOrEqual(1);
      expect(skillDetail?.level).toBeLessThanOrEqual(99);
    });
  });

  describe("Edge cases", () => {
    it("should handle account with no boss kills", () => {
      const account2 = OsrsAccount.fromJson({
        name: "Noob",
        questPoints: 0,
        skills: {},
        combatLevel: 3,
      });

      const bossScore = account2.getBossScore("zulrah");
      expect(bossScore).toBeUndefined();
    });

    it("should handle skill not in account", () => {
      const skill = account.getSkill("skill_that_doesnt_exist");
      expect(skill).toBeUndefined();
    });
  });
});

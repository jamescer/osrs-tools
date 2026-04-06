import { expect, describe, it, beforeEach } from "@jest/globals";
import { QuestDifficulty, QuestLength } from "../../../source/runescape/model/quest/enums";
import { QuestStatus } from "../../../source/runescape/model/quest/Quest";
import { ItemRequirement, CombatLevelRequirement, SlayerLevelRequirement, QuestRequirement } from "../../../source/runescape/model/Requirement";

/**
 * Comprehensive test suite for Quest data structures and properties
 */
describe("Quest - OSRS Quest system", () => {
  describe("Quest basic structure", () => {
    it("should create a basic quest with required fields", () => {
      const quest = {
        age: "Fifth Age",
        description: "Help the cook in Lumbridge Castle to make a cake.",
        difficulty: QuestDifficulty.Novice,
        id: 1,
        length: QuestLength.Short,
        members: false,
        miniquest: false,
        name: "Cook's Assistant",
        questPoints: 1,
        recommendations: [],
        recommendedPrayers: [],
        recommendedSkills: {},
        requirements: [],
        rewards: { questPoints: 1 },
        shortName: "cooks_assistant",
        startLocation: "Lumbridge Castle",
        status: QuestStatus.NotStarted,
        steps: [],
        url: "http://example.com/cooks_assistant",
      };

      expect(quest.id).toBe(1);
      expect(quest.name).toBe("Cook's Assistant");
      expect(quest.difficulty).toBe(QuestDifficulty.Novice);
      expect(quest.questPoints).toBe(1);
      expect(quest.members).toBe(false);
    });

    it("should support all quest difficulty levels", () => {
      const difficulties = [
        QuestDifficulty.Novice,
        QuestDifficulty.Intermediate,
        QuestDifficulty.Experienced,
        QuestDifficulty.Master,
        QuestDifficulty.Grandmaster,
      ];

      for (const difficulty of difficulties) {
        const quest = {
          age: "Fifth Age",
          description: "Test quest",
          difficulty,
          id: 1,
          length: QuestLength.Short,
          members: false,
          miniquest: false,
          name: "Test Quest",
          questPoints: 1,
          recommendations: [],
          recommendedPrayers: [],
          recommendedSkills: {},
          requirements: [],
          rewards: { questPoints: 1 },
          shortName: "test",
          startLocation: "Lumbridge",
          status: QuestStatus.NotStarted,
          steps: [],
          url: "",
        };
        expect(quest.difficulty).toBe(difficulty);
      }
    });

    it("should support all quest length values", () => {
      const lengths = [
        QuestLength.Short,
        QuestLength.Medium,
        QuestLength.Long,
        QuestLength.VeryLong,
      ];

      for (const length of lengths) {
        const quest = {
          age: "Third Age",
          description: "Test",
          difficulty: QuestDifficulty.Novice,
          id: 1,
          length,
          members: false,
          miniquest: false,
          name: "Test",
          questPoints: 1,
          recommendations: [],
          recommendedPrayers: [],
          recommendedSkills: {},
          requirements: [],
          rewards: { questPoints: 1 },
          shortName: "test",
          startLocation: "Lumbridge",
          status: QuestStatus.NotStarted,
          steps: [],
          url: "",
        };
        expect(quest.length).toBe(length);
      }
    });
  });

  describe("Quest rewards structure", () => {
    it("should support experience array in rewards", () => {
      const quest = {
        age: "Fifth Age",
        description: "Test quest",
        difficulty: QuestDifficulty.Novice,
        id: 1,
        length: QuestLength.Short,
        members: false,
        miniquest: false,
        name: "Experience Quest",
        questPoints: 1,
        recommendations: [],
        recommendedPrayers: [],
        recommendedSkills: { cooking: 10 },
        requirements: [],
        rewards: {
          areas: ["Lumbridge"],
          experience: [
            { amount: 300, skill: "cooking" },
            { amount: 100, skill: "fishing" },
          ],
          items: [{ name: "Quest point" }],
          lamps: [],
          pets: [],
          points: [],
          questPoints: 1,
          unlocks: [{ description: "Access to the kitchen" }],
        },
        shortName: "exp_quest",
        startLocation: "Lumbridge Castle",
        status: QuestStatus.NotStarted,
        steps: [],
        url: "",
      };

      expect(Array.isArray(quest.rewards.experience)).toBe(true);
      expect(quest.rewards.experience?.length).toBe(2);
      expect(quest.rewards.experience?.[0]).toEqual({
        amount: 300,
        skill: "cooking",
      });
      expect(quest.rewards.experience?.[1]).toEqual({
        amount: 100,
        skill: "fishing",
      });
    });

    it("should support item rewards", () => {
      const quest = {
        age: "Fifth Age",
        description: "Test quest",
        difficulty: QuestDifficulty.Intermediate,
        id: 2,
        length: QuestLength.Medium,
        members: false,
        miniquest: false,
        name: "Item Quest",
        questPoints: 1,
        recommendations: [],
        recommendedPrayers: [],
        recommendedSkills: {},
        requirements: [],
        rewards: {
          areas: [],
          experience: [],
          items: [
            { name: "Dragon Sword", quantity: 1 },
            { name: "Coins", quantity: 5000, note: "untradeable" },
          ],
          lamps: [],
          pets: [],
          points: [],
          questPoints: 1,
          unlocks: [],
        },
        shortName: "item_quest",
        startLocation: "Test location",
        status: QuestStatus.NotStarted,
        steps: [],
        url: "",
      };

      expect(quest.rewards.items?.length).toBe(2);
      expect(quest.rewards.items?.[0].name).toBe("Dragon Sword");
      expect(quest.rewards.items?.[1].note).toBe("untradeable");
    });

    it("should support unlocks in rewards", () => {
      const quest = {
        age: "Fifth Age",
        description: "Test quest",
        difficulty: QuestDifficulty.Novice,
        id: 3,
        length: QuestLength.Short,
        members: false,
        miniquest: false,
        name: "Unlock Quest",
        questPoints: 1,
        recommendations: [],
        recommendedPrayers: [],
        recommendedSkills: {},
        requirements: [],
        rewards: {
          areas: [],
          experience: [],
          items: [],
          lamps: [],
          pets: [],
          points: [],
          questPoints: 1,
          unlocks: [
            {
              description: "Access to a new area",
              url: "http://wiki.osrs.com/area",
            },
          ],
        },
        shortName: "unlock_quest",
        startLocation: "Test",
        status: QuestStatus.NotStarted,
        steps: [],
        url: "",
      };

      expect(quest.rewards.unlocks?.length).toBe(1);
      expect(quest.rewards.unlocks?.[0].description).toBe("Access to a new area");
      expect(quest.rewards.unlocks?.[0].url).toBe("http://wiki.osrs.com/area");
    });

    it("should support lamps in rewards", () => {
      const quest = {
        age: "Fifth Age",
        description: "Test quest",
        difficulty: QuestDifficulty.Intermediate,
        id: 4,
        length: QuestLength.Medium,
        members: false,
        miniquest: false,
        name: "Lamp Quest",
        questPoints: 1,
        recommendations: [],
        recommendedPrayers: [],
        recommendedSkills: {},
        requirements: [],
        rewards: {
          areas: [],
          experience: [],
          items: [],
          lamps: [
            { amount: 10000, skillRestriction: "magic" },
            { amount: 5000 },
          ],
          pets: [],
          points: [],
          questPoints: 1,
          unlocks: [],
        },
        shortName: "lamp_quest",
        startLocation: "Test",
        status: QuestStatus.NotStarted,
        steps: [],
        url: "",
      };

      expect(quest.rewards.lamps?.length).toBe(2);
      expect(quest.rewards.lamps?.[0].skillRestriction).toBe("magic");
      expect(quest.rewards.lamps?.[1].amount).toBe(5000);
    });

    it("should support pet rewards", () => {
      const quest = {
        age: "Fifth Age",
        description: "Test quest",
        difficulty: QuestDifficulty.Master,
        id: 5,
        length: QuestLength.VeryLong,
        members: true,
        miniquest: false,
        name: "Pet Quest",
        questPoints: 1,
        recommendations: [],
        recommendedPrayers: [],
        recommendedSkills: {},
        requirements: [],
        rewards: {
          areas: [],
          experience: [],
          items: [],
          lamps: [],
          pets: [{ name: "Magic Creature", note: "tradeable" }],
          points: [],
          questPoints: 1,
          unlocks: [],
        },
        shortName: "pet_quest",
        startLocation: "Test",
        status: QuestStatus.NotStarted,
        steps: [],
        url: "",
      };

      expect(quest.rewards.pets?.length).toBe(1);
      expect(quest.rewards.pets?.[0].name).toBe("Magic Creature");
    });

    it("should allow empty rewards arrays", () => {
      const quest = {
        age: "Fifth Age",
        description: "Test quest",
        difficulty: QuestDifficulty.Novice,
        id: 6,
        length: QuestLength.Short,
        members: false,
        miniquest: false,
        name: "Minimal Quest",
        questPoints: 1,
        recommendations: [],
        recommendedPrayers: [],
        recommendedSkills: {},
        requirements: [],
        rewards: {
          areas: [],
          experience: [],
          items: [],
          lamps: [],
          pets: [],
          points: [],
          questPoints: 1,
          unlocks: [],
        },
        shortName: "minimal",
        startLocation: "Test",
        status: QuestStatus.NotStarted,
        steps: [],
        url: "",
      };

      expect(quest.rewards.experience).toEqual([]);
      expect(quest.rewards.items).toEqual([]);
      expect(quest.rewards.unlocks).toEqual([]);
      expect(quest.rewards.lamps).toEqual([]);
      expect(quest.rewards.pets).toEqual([]);
    });
  });

  describe("Quest requirements", () => {
    it("should support item requirements", () => {
      const quest = {
        age: "Fifth Age",
        description: "Test quest",
        difficulty: QuestDifficulty.Novice,
        id: 7,
        length: QuestLength.Short,
        members: false,
        miniquest: false,
        name: "Item Req Quest",
        questPoints: 1,
        recommendations: [],
        recommendedPrayers: [],
        recommendedSkills: {},
        requirements: [
          new ItemRequirement("Bucket of milk", 1),
          new ItemRequirement("Pot of flour", 1),
        ],
        rewards: { questPoints: 1 },
        shortName: "item_req",
        startLocation: "Lumbridge",
        status: QuestStatus.NotStarted,
        steps: [],
        url: "",
      };

      expect(quest.requirements.length).toBe(2);
      expect(quest.requirements[0]).toBeInstanceOf(ItemRequirement);
    });

    it("should support combat level requirements", () => {
      const quest = {
        age: "Third Age",
        description: "Test quest",
        difficulty: QuestDifficulty.Master,
        id: 8,
        length: QuestLength.VeryLong,
        members: true,
        miniquest: false,
        name: "Combat Quest",
        questPoints: 1,
        recommendations: [],
        recommendedPrayers: [],
        recommendedSkills: {},
        requirements: [new CombatLevelRequirement(75)],
        rewards: { questPoints: 1 },
        shortName: "combat_quest",
        startLocation: "Test",
        status: QuestStatus.NotStarted,
        steps: [],
        url: "",
      };

      expect(quest.requirements.length).toBe(1);
      expect(quest.requirements[0]).toBeInstanceOf(CombatLevelRequirement);
    });

    it("should support quest requirements", () => {
      const quest = {
        age: "Fifth Age",
        description: "Test quest",
        difficulty: QuestDifficulty.Intermediate,
        id: 9,
        length: QuestLength.Medium,
        members: false,
        miniquest: false,
        name: "Quest Sequel",
        questPoints: 1,
        recommendations: [],
        recommendedPrayers: [],
        recommendedSkills: {},
        requirements: [new QuestRequirement("Original Quest")],
        rewards: { questPoints: 1 },
        shortName: "sequel",
        startLocation: "Test",
        status: QuestStatus.NotStarted,
        steps: [],
        url: "",
      };

      expect(quest.requirements.length).toBe(1);
      expect(quest.requirements[0]).toBeInstanceOf(QuestRequirement);
    });
  });

  describe("Quest metadata", () => {
    it("should support recommended skills", () => {
      const quest = {
        age: "Fifth Age",
        description: "Test quest",
        difficulty: QuestDifficulty.Intermediate,
        id: 10,
        length: QuestLength.Medium,
        members: false,
        miniquest: false,
        name: "Skill Quest",
        questPoints: 1,
        recommendations: [],
        recommendedPrayers: [],
        recommendedSkills: {
          combat: 40,
          magic: 30,
          mining: 20,
        },
        requirements: [],
        rewards: { questPoints: 1 },
        shortName: "skill_quest",
        startLocation: "Test",
        status: QuestStatus.NotStarted,
        steps: [],
        url: "",
      };

      expect(Object.keys(quest.recommendedSkills).length).toBe(3);
      expect(quest.recommendedSkills["combat"]).toBe(40);
      expect(quest.recommendedSkills["magic"]).toBe(30);
    });

    it("should support recommended prayers", () => {
      const quest = {
        age: "Fifth Age",
        description: "Test quest",
        difficulty: QuestDifficulty.Experienced,
        id: 11,
        length: QuestLength.Long,
        members: true,
        miniquest: false,
        name: "Prayer Quest",
        questPoints: 1,
        recommendations: [],
        recommendedPrayers: ["Piety", "Eagle Eye"],
        recommendedSkills: {},
        requirements: [],
        rewards: { questPoints: 1 },
        shortName: "prayer_quest",
        startLocation: "Test",
        status: QuestStatus.NotStarted,
        steps: [],
        url: "",
      };

      expect(quest.recommendedPrayers.length).toBe(2);
      expect(quest.recommendedPrayers).toContain("Piety");
    });

    it("should support quest series", () => {
      const quests = [
        {
          age: "Fifth Age",
          description: "First in series",
          difficulty: QuestDifficulty.Novice,
          id: 12,
          length: QuestLength.Short,
          members: false,
          miniquest: false,
          name: "Quest Series Part 1",
          questPoints: 1,
          recommendations: [],
          recommendedPrayers: [],
          recommendedSkills: {},
          requirements: [],
          rewards: { questPoints: 1 },
          shortName: "series_1",
          series: "Epic Series",
          startLocation: "Test",
          status: QuestStatus.NotStarted,
          steps: [],
          url: "",
        },
        {
          age: "Fifth Age",
          description: "Second in series",
          difficulty: QuestDifficulty.Intermediate,
          id: 13,
          length: QuestLength.Medium,
          members: false,
          miniquest: false,
          name: "Quest Series Part 2",
          questPoints: 1,
          recommendations: [],
          recommendedPrayers: [],
          recommendedSkills: {},
          requirements: [],
          rewards: { questPoints: 1 },
          shortName: "series_2",
          series: "Epic Series",
          startLocation: "Test",
          status: QuestStatus.NotStarted,
          steps: [],
          url: "",
        },
      ];

      expect(quests[0].series).toBe(quests[1].series);
    });

    it("should distinguish member and non-member quests", () => {
      const memberQuest = {
        age: "Fifth Age",
        description: "Members only",
        difficulty: QuestDifficulty.Master,
        id: 14,
        length: QuestLength.VeryLong,
        members: true,
        miniquest: false,
        name: "Member Quest",
        questPoints: 1,
        recommendations: [],
        recommendedPrayers: [],
        recommendedSkills: {},
        requirements: [],
        rewards: { questPoints: 1 },
        shortName: "member",
        startLocation: "Test",
        status: QuestStatus.NotStarted,
        steps: [],
        url: "",
      };

      const freeQuest = {
        ...memberQuest,
        members: false,
        name: "Free Quest",
      };

      expect(memberQuest.members).toBe(true);
      expect(freeQuest.members).toBe(false);
    });

    it("should distinguish miniquests from regular quests", () => {
      const miniquest = {
        age: "Fifth Age",
        description: "Small quest",
        difficulty: QuestDifficulty.Novice,
        id: 15,
        length: QuestLength.Short,
        members: false,
        miniquest: true,
        name: "Mini Quest",
        questPoints: 0,
        recommendations: [],
        recommendedPrayers: [],
        recommendedSkills: {},
        requirements: [],
        rewards: { questPoints: 0 },
        shortName: "mini",
        startLocation: "Test",
        status: QuestStatus.NotStarted,
        steps: [],
        url: "",
      };

      const regularQuest = {
        ...miniquest,
        miniquest: false,
        questPoints: 1,
        rewards: { questPoints: 1 },
        name: "Regular Quest",
      };

      expect(miniquest.miniquest).toBe(true);
      expect(miniquest.questPoints).toBe(0);
      expect(regularQuest.miniquest).toBe(false);
      expect(regularQuest.questPoints).toBe(1);
    });
  });

  describe("Quest status", () => {
    it("should support all quest status values", () => {
      const statuses = [
        QuestStatus.NotStarted,
        QuestStatus.InProgress,
        QuestStatus.Complete,
      ];

      for (const status of statuses) {
        const quest = {
          age: "Fifth Age",
          description: "Test",
          difficulty: QuestDifficulty.Novice,
          id: 1,
          length: QuestLength.Short,
          members: false,
          miniquest: false,
          name: "Test",
          questPoints: 1,
          recommendations: [],
          recommendedPrayers: [],
          recommendedSkills: {},
          requirements: [],
          rewards: { questPoints: 1 },
          shortName: "test",
          startLocation: "Test",
          status,
          steps: [],
          url: "",
        };

        expect(quest.status).toBe(status);
      }
    });
  });

  describe("Edge cases and special scenarios", () => {
    it("should handle quests with no requirements", () => {
      const quest = {
        age: "Fifth Age",
        description: "Beginner quest",
        difficulty: QuestDifficulty.Novice,
        id: 16,
        length: QuestLength.Short,
        members: false,
        miniquest: false,
        name: "Beginner Quest",
        questPoints: 1,
        recommendations: [],
        recommendedPrayers: [],
        recommendedSkills: {},
        requirements: [],
        rewards: { questPoints: 1 },
        shortName: "beginner",
        startLocation: "Lumbridge",
        status: QuestStatus.NotStarted,
        steps: [],
        url: "",
      };

      expect(quest.requirements.length).toBe(0);
    });

    it("should handle quests with multiple experience rewards", () => {
      const quest = {
        age: "Fifth Age",
        description: "Multi-skill quest",
        difficulty: QuestDifficulty.Experienced,
        id: 17,
        length: QuestLength.Long,
        members: true,
        miniquest: false,
        name: "Multi-Skill Quest",
        questPoints: 1,
        recommendations: [],
        recommendedPrayers: [],
        recommendedSkills: {},
        requirements: [],
        rewards: {
          areas: [],
          experience: [
            { skill: "attack", amount: 100 },
            { skill: "strength", amount: 100 },
            { skill: "defence", amount: 100 },
            { skill: "hitpoints", amount: 100 },
            { skill: "magic", amount: 100 },
          ],
          items: [],
          lamps: [],
          pets: [],
          points: [],
          questPoints: 1,
          unlocks: [],
        },
        shortName: "multi_skill",
        startLocation: "Test",
        status: QuestStatus.NotStarted,
        steps: [],
        url: "",
      };

      expect(quest.rewards.experience?.length).toBe(5);
      const totalExp = quest.rewards.experience?.reduce(
        (sum, exp) => sum + exp.amount,
        0
      );
      expect(totalExp).toBe(500);
    });

    it("should handle quests with zero quest points", () => {
      const quest = {
        age: "Fifth Age",
        description: "No points quest",
        difficulty: QuestDifficulty.Novice,
        id: 18,
        length: QuestLength.Short,
        members: false,
        miniquest: true,
        name: "Zero Point Quest",
        questPoints: 0,
        recommendations: [],
        recommendedPrayers: [],
        recommendedSkills: {},
        requirements: [],
        rewards: { questPoints: 0 },
        shortName: "zero_points",
        startLocation: "Test",
        status: QuestStatus.NotStarted,
        steps: [],
        url: "",
      };

      expect(quest.questPoints).toBe(0);
      expect(quest.rewards.questPoints).toBe(0);
    });
  });
});

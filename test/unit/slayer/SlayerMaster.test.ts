import { SlayerMaster } from "../../../source/runescape/model/slayer/SlayerMaster";
import { Task } from "../../../source/runescape/model/slayer/Task";
import { SlayerLevelRequirement } from "../../../source/runescape/model/Requirement";
import { expect, describe, it, beforeEach } from "@jest/globals";

/**
 * Comprehensive test suite for SlayerMaster
 */
describe("SlayerMaster - Slayer master configuration and task assignment", () => {
  let mockTasks: Task[];
  let master: SlayerMaster;
  const taskPoints = { 1: 2, 10: 10, 50: 50, 100: 100 };
  const eliteDiaryTaskPoints = { 1: 3, 10: 15, 50: 75, 100: 150 };

  beforeEach(() => {
    mockTasks = [
      new Task("Banshee", 10, 15, [new SlayerLevelRequirement(15)], null, null, [], 5),
      new Task("Cave Crawler", 8, 12, [], null, null, [], 3),
      new Task("Crawling Hand", 5, 10, [], null, null, [], 2),
    ];
    master = new SlayerMaster(
      "Test Master",
      mockTasks,
      "Testville",
      50,
      "https://wiki.test/Test_Master",
      taskPoints,
      eliteDiaryTaskPoints
    );
  });

  describe("Constructor and basic properties", () => {
    it("should construct with correct properties", () => {
      expect(master.getName()).toBe("Test Master");
      expect(master.getLocation()).toBe("Testville");
      expect(master.getMinimumCombatLevel()).toBe(50);
      expect(master.getWikiUrl()).toBe("https://wiki.test/Test_Master");
    });

    it("should store tasks in getTasks()", () => {
      const tasks = master.getTasks();
      expect(tasks).toEqual(mockTasks);
      expect(tasks.length).toBe(3);
    });

    it("should store task point rewards", () => {
      expect(master.taskPoints).toEqual(taskPoints);
      expect(master.eliteDiaryTaskPoints).toEqual(eliteDiaryTaskPoints);
    });

    it("should support empty tasks list", () => {
      const emptyMaster = new SlayerMaster("Empty", [], "Nowhere", 1, "");
      expect(emptyMaster.getTasks()).toEqual([]);
    });

    it("should create multiple master instances independently", () => {
      const master2 = new SlayerMaster("Other Master", mockTasks, "Other", 75, "");
      expect(master.getName()).toBe("Test Master");
      expect(master2.getName()).toBe("Other Master");
      expect(master.getMinimumCombatLevel()).toBe(50);
      expect(master2.getMinimumCombatLevel()).toBe(75);
    });
  });

  describe("Weight calculation", () => {
    it("should calculate total weight correctly", () => {
      // Weight should be sum of all task weights: 5 + 3 + 2 = 10
      expect(master.getTotalWeight()).toBe(10);
      expect(master.calculateTotalWeight()).toBe(10);
    });

    it("should handle empty tasks for weight calculation", () => {
      const emptyMaster = new SlayerMaster("Empty", [], "Nowhere", 1, "");
      expect(emptyMaster.calculateTotalWeight()).toBe(0);
      expect(emptyMaster.getTotalWeight()).toBe(0);
    });

    it("should handle single task weight calculation", () => {
      const singleTaskMaster = new SlayerMaster("Single", [mockTasks[0]], "Test", 1, "");
      expect(singleTaskMaster.calculateTotalWeight()).toBe(5);
    });

    it("should support high weight values", () => {
      const heavyTasks = [
        new Task("Heavy 1", 1, 10, [], null, null, [], 100),
        new Task("Heavy 2", 1, 10, [], null, null, [], 200),
      ];
      const heavyMaster = new SlayerMaster("Heavy", heavyTasks, "Test", 1, "");
      expect(heavyMaster.calculateTotalWeight()).toBe(300);
    });
  });

  describe("Task point rewards", () => {
    it("should get points for task interval", () => {
      expect(master.getPointsForTaskInterval(1)).toBe(2);
      expect(master.getPointsForTaskInterval(10)).toBe(10);
      expect(master.getPointsForTaskInterval(50)).toBe(50);
      expect(master.getPointsForTaskInterval(100)).toBe(100);
    });

    it("should return 0 for undefined task interval", () => {
      expect(master.getPointsForTaskInterval(15)).toBe(0);
      expect(master.getPointsForTaskInterval(99)).toBe(0);
    });

    it("should support various point structures", () => {
      const customPointsMaster = new SlayerMaster(
        "Custom",
        mockTasks,
        "Test",
        1,
        "",
        { 5: 5, 25: 25, 75: 75 },
        { 5: 10, 25: 50, 75: 150 }
      );

      expect(customPointsMaster.getPointsForTaskInterval(5)).toBe(5);
      expect(customPointsMaster.getPointsForTaskInterval(25)).toBe(25);
      expect(customPointsMaster.getPointsForTaskInterval(75)).toBe(75);
    });

    it("should return 0 for negative task intervals", () => {
      expect(master.getPointsForTaskInterval(-1)).toBe(0);
      expect(master.getPointsForTaskInterval(-100)).toBe(0);
    });
  });

  describe("Random task assignment", () => {
    it("should return a valid random task", () => {
      for (let i = 0; i < 20; i++) {
        const task = master.getRandomTask();
        expect(task).not.toBeNull();
        expect(mockTasks).toContain(task);
      }
    });

    it("should return null for empty tasks", () => {
      const emptyMaster = new SlayerMaster("Empty", [], "Nowhere", 1, "");
      expect(emptyMaster.getRandomTask()).toBeNull();
    });

    it("should respect task weights in random selection", () => {
      // Higher weight tasks should be selected more often
      // Create a master with heavily weighted tasks
      const weightedTasks = [
        new Task("Heavy", 1, 10, [], null, null, [], 99),
        new Task("Light", 1, 10, [], null, null, [], 1),
      ];
      const weightedMaster = new SlayerMaster("Weighted", weightedTasks, "Test", 1, "");

      const counts: Record<string, number> = { Heavy: 0, Light: 0 };
      for (let i = 0; i < 100; i++) {
        const task = weightedMaster.getRandomTask();
        if (task?.name === "Heavy") counts.Heavy++;
        if (task?.name === "Light") counts.Light++;
      }

      // Heavy task should be selected significantly more often
      expect(counts.Heavy).toBeGreaterThan(counts.Light);
    });

    it("should return same task if only one task available", () => {
      const singleTaskMaster = new SlayerMaster("Single", [mockTasks[0]], "Test", 1, "");
      const task1 = singleTaskMaster.getRandomTask();
      const task2 = singleTaskMaster.getRandomTask();

      expect(task1).toBe(mockTasks[0]);
      expect(task2).toBe(mockTasks[0]);
    });
  });

  describe("String representation", () => {
    it("toString should return a string", () => {
      expect(typeof master.toString()).toBe("string");
    });

    it("toString should contain master name", () => {
      expect(master.toString()).toContain("Test Master");
    });

    it("should format toString with meaningful data", () => {
      const str = master.toString();
      expect(str.length).toBeGreaterThan(0);
      expect(typeof str).toBe("string");
    });
  });

  describe("Real-world slayer masters", () => {
    it("should represent Turael (lowest level master)", () => {
      const turaelTasks = [
        new Task("Spiders", 10, 20, []),
        new Task("Goblins", 8, 15, []),
      ];
      const turael = new SlayerMaster(
        "Turael",
        turaelTasks,
        "Burthorpe",
        1,
        "https://wiki.osrs.wiki/Turael"
      );

      expect(turael.getName()).toBe("Turael");
      expect(turael.getMinimumCombatLevel()).toBe(1);
    });

    it("should represent Duradel (high level master)", () => {
      const duadelTasks = [
        new Task("Abyssal demons", 100, 200, [new SlayerLevelRequirement(85)]),
        new Task("Wyverns", 75, 150, [new SlayerLevelRequirement(72)]),
      ];
      const duradel = new SlayerMaster(
        "Duradel",
        duadelTasks,
        "Shilo Village",
        50,
        "https://wiki.osrs.wiki/Duradel"
      );

      expect(duradel.getName()).toBe("Duradel");
      expect(duradel.getMinimumCombatLevel()).toBe(50);
    });
  });

  describe("Task filtering and retrieval", () => {
    it("should retrieve specific task by name", () => {
      const tasks = master.getTasks();
      const bansheeTask = tasks.find(t => t.name === "Banshee");

      expect(bansheeTask).toBeDefined();
      expect(bansheeTask?.name).toBe("Banshee");
      expect(bansheeTask?.getAmountMin()).toBe(10);
    });

    it("should identify high-weight tasks", () => {
      const tasks = master.getTasks();
      const highWeightTasks = tasks.filter(t => t.weight > 3);

      expect(highWeightTasks.length).toBeGreaterThan(0);
      expect(highWeightTasks[0]).toBe(mockTasks[0]); // Banshee with weight 5
    });

    it("should identify tasks with requirements", () => {
      const tasks = master.getTasks();
      const requirementTasks = tasks.filter(t => t.requirements.length > 0);

      expect(requirementTasks.length).toBeGreaterThan(0);
      expect(requirementTasks[0].name).toBe("Banshee");
    });
  });

  describe("Edge cases", () => {
    it("should handle master with null wiki URL", () => {
      const masterNoUrl = new SlayerMaster("No URL", mockTasks, "Test", 1, null);
      expect(masterNoUrl.getWikiUrl()).toBeNull();
    });

    it("should handle master with empty wiki URL", () => {
      const masterEmptyUrl = new SlayerMaster("Empty URL", mockTasks, "Test", 1, "");
      expect(masterEmptyUrl.getWikiUrl()).toBe("");
    });

    it("should handle master with very high minimum combat level", () => {
      const endgameMaster = new SlayerMaster("Endgame", mockTasks, "Test", 138, "");
      expect(endgameMaster.getMinimumCombatLevel()).toBe(138);
    });

    it("should handle empty point structure", () => {
      const noPointsMaster = new SlayerMaster("No Points", mockTasks, "Test", 1, "", {});
      expect(noPointsMaster.getPointsForTaskInterval(1)).toBe(0);
      expect(noPointsMaster.getPointsForTaskInterval(10)).toBe(0);
    });
  });
});

// Test for the Tureal data from the JSON file
import {
  Requirement,
  SlayerLevelRequirement,
} from "../../../../src/model/Requirement";
import { Task } from "../../../../src/model/slayer/Task";
import { Duradel } from "../../../../src/resources/slayer/Masters";

describe("Duradel Slayer Master", () => {
  it("should have the correct name", () => {
    expect(Duradel.name).toBe("Duradel");
  });

  it("should have the correct location", () => {
    expect(Duradel.location).toBe("Shilo Village");
  });

  it("should have the correct minimum combat level", () => {
    expect(Duradel.minimumCombatLevel).toBe(85);
  });

  it("should have a valid wiki URL", () => {
    expect(Duradel.wikiUrl).toBe("https://oldschool.runescape.wiki/w/Duradel");
  });

  it("should have a list of tasks", () => {
    expect(Duradel.tasks).toBeDefined();
    expect(Duradel.tasks).toEqual(expect.any(Array));
    expect(Duradel.tasks.length).toBeGreaterThan(0);
  });

  it("should have tasks with valid properties", () => {
    Duradel.tasks.forEach((task: Task) => {
      expect(task.name).toBeDefined();
      expect(task.weight).toBeGreaterThanOrEqual(0);
      expect(task.requirements).toBeInstanceOf(Array);
      task.requirements.forEach((requirement: Requirement) => {
        expect(requirement).toBeInstanceOf(SlayerLevelRequirement);
      });
    });
  });
});

// We recommend installing an extension to run jest tests.

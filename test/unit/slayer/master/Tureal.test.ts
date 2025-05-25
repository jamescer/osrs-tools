// Test for the Tureal data from the JSON file
import {
  Requirement,
  SlayerLevelRequirement,
} from "../../../../src/model/Requirement";
import { Task } from "../../../../src/model/slayer/Task";
import { Turael } from "../../../../src/model/slayer/Masters";

describe("Turael Slayer Master", () => {
  it("should have the correct name", () => {
    expect(Turael.name).toBe("Turael");
  });

  it("should have the correct location", () => {
    expect(Turael.location).toBe("Burthope");
  });

  it("should have the correct minimum combat level", () => {
    expect(Turael.minimumCombatLevel).toBe(0);
  });

  it("should have the correct wiki URL", () => {
    expect(Turael.wikiUrl).toBe("https://oldschool.runescape.wiki/w/Turael");
  });

  it("should have a list of tasks", () => {
    expect(Array.isArray(Turael.tasks)).toBe(true);
    expect(Turael.tasks.length).toBeGreaterThan(0);
  });
});

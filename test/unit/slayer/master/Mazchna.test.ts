import { Mazchna } from "../../../../src/model/slayer/Masters";

describe("Mazchna", () => {
  it("should be defined", () => {
    expect(Mazchna).toBeDefined();
  });

  it("should have a list of tasks", () => {
    const tasks = Mazchna.tasks;
    expect(Array.isArray(tasks)).toBe(true);
    expect(tasks.length).toBeGreaterThan(0);
  });

  it("should have the correct name", () => {
    expect(Mazchna.name).toBe("Mazchna");
  });

  it("should have the correct location", () => {
    expect(Mazchna.location).toBe("Canifis");
  });

  it("should have the correct wiki URL", () => {
    expect(Mazchna.wikiUrl).toBe("https://oldschool.runescape.wiki/w/Mazchna");
  });
});

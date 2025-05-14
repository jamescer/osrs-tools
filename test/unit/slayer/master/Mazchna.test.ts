import { Mazchna } from "../../../../src/resources/slayer/Masters";

describe("Vannaka", () => {
  it("should be defined", () => {
    expect(Mazchna).toBeDefined();
  });

  it("should have a list of tasks", () => {
    const tasks = Mazchna.getTasks();
    expect(Array.isArray(tasks)).toBe(true);
    expect(tasks.length).toBe(0);
  });
});

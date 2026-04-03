import { QuestRequirement } from "../../../source/runescape/model/Requirement";
import { getDiaryByName } from "../../../source/runescape/model/diaries/Diary";
import ArdougneDiary from "../../../source/runescape/model/diaries/ardougne/Ardougne";
import { expect, describe, it } from "@jest/globals";

describe("ArdougneDiary", () => {
  it("defines the diary tasks in TypeScript", () => {
    expect(ArdougneDiary.name).toBe("Ardougne Diary");
    expect(getDiaryByName("Ardougne Diary")).toBe(ArdougneDiary);
    expect(ArdougneDiary.easy.tasks).toHaveLength(10);
    expect(ArdougneDiary.medium.tasks).toHaveLength(12);
    expect(ArdougneDiary.hard.tasks).toHaveLength(12);
    expect(ArdougneDiary.elite.tasks).toHaveLength(8);

    expect(ArdougneDiary.easy.tasks[0]?.description).toContain("Wizard Cromperty");
    expect(ArdougneDiary.easy.tasks[0]?.requirements).toEqual([
      new QuestRequirement("Rune Mysteries"),
    ]);
  });
});

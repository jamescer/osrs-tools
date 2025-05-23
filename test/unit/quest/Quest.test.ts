import { Quest } from "../../../src/model/quest/Quest";

describe("Quest Interface", () => {
  it("should create a valid Quest object", () => {
    const quest: Quest = {
      age: "Fifth Age",
      difficulty: "Novice",
      difficultyLevel: "Easy",
      id: 1,
      itemRequirements: ["Bucket of milk", "Pot of flour", "Egg"],
      length: "Short",
      members: false,
      miniquest: false,
      name: "Cook's Assistant",
      officialAge: "Fifth Age",
      officialDifficulty: "Novice",
      officialLength: "Short",
      questPoints: 1,
      questRequirements: [],
      recommendedItems: ["None"],
      recommendedPrayers: ["None"],
      recommendedSkills: { cooking: 10 },
      rewards: {
        areas: ["Lumbridge"],
        experience: { cooking: 300 },
        items: ["Quest point"],
      },
      series: "None",
      shortName: "cooks_assistant",
      skillRequirements: {
        cooking: { isBoostable: true, level: 10 },
      },
      startLocation: "Lumbridge Castle",
      status: "Not Started",
      url: "http://example.com/cooks_assistant",
    };

    expect(quest.id).toBe(1);
    expect(quest.name).toBe("Cook's Assistant");
    expect(quest.difficulty).toBe("Novice");
    expect(quest.skillRequirements.cooking.level).toBe(10);
    expect(quest.skillRequirements.cooking.isBoostable).toBe(true);
    expect(quest.status).toBe("Not Started");
    expect(quest.miniquest).toBe(false);
    expect(quest.shortName).toBe("cooks_assistant");
    expect(quest.url).toBe("http://example.com/cooks_assistant");
    expect(quest.series).toBe("None");
    expect(quest.members).toBe(false);
    expect(quest.questPoints).toBe(1);
    expect(quest.length).toBe("Short");
    expect(quest.age).toBe("Fifth Age");
    expect(quest.startLocation).toBe("Lumbridge Castle");
    expect(quest.difficultyLevel).toBe("Easy");
    expect(quest.officialDifficulty).toBe("Novice");
    expect(quest.officialLength).toBe("Short");
    expect(quest.officialAge).toBe("Fifth Age");
    expect(quest.itemRequirements).toContain("Bucket of milk");
    expect(quest.recommendedItems).toContain("None");
    expect(quest.recommendedSkills.cooking).toBe(10);
    expect(quest.recommendedPrayers).toContain("None");
    expect(quest.questRequirements).toHaveLength(0);
    expect(quest.rewards.experience?.cooking).toBe(300);
    expect(quest.rewards.items).toContain("Quest point");
    expect(quest.rewards.areas).toContain("Lumbridge");
  });
});

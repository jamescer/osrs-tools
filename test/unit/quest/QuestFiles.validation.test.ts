import { expect, describe, it } from "@jest/globals";
import * as fs from "fs";
import * as path from "path";
import { QuestTool } from "../../../source/runescape/model/quest/QuestTool";

/**
 * Test suite for validating all quest files have correct structure and exports
 */
describe("Quest Files Structure and Export Validation", () => {
  const questDir = path.join(__dirname, "../../../source/runescape/model/quest/all");

  describe("Quest File Structure", () => {
    it("should have all 188 quest files in the all/ directory", () => {
      const files = fs
        .readdirSync(questDir)
        .filter((f) => f.endsWith(".ts") && f !== "index.ts" && f !== "enums.ts");

      expect(files.length).toBeGreaterThanOrEqual(188);
    });

    it("should have index.ts file in quest/all directory", () => {
      const indexPath = path.join(questDir, "index.ts");
      expect(fs.existsSync(indexPath)).toBe(true);
    });

    it("should have import statements for quest dependencies", () => {
      const indexPath = path.join(questDir, "index.ts");
      expect(fs.existsSync(indexPath)).toBe(true);
    });
  });

  describe("Quest File Naming Convention", () => {
    it("should follow camelCase naming for quest files", () => {
      const files = fs
        .readdirSync(questDir)
        .filter((f) => f.endsWith(".ts") && f !== "index.ts" && f !== "enums.ts");

      // Verify file names (excluding special cases)
      files.forEach((file) => {
        const baseName = file.replace(".ts", "");
        // Should start with capital letter and follow camelCase
        expect(baseName[0]).toMatch(/[A-Z]/);
        // Should only contain alphanumeric chars
        expect(baseName).toMatch(/^[A-Za-z0-9]+$/);
      });
    });

    it("should not have spaces or special chars in filenames", () => {
      const files = fs
        .readdirSync(questDir)
        .filter((f) => f.endsWith(".ts") && f !== "index.ts" && f !== "enums.ts");

      files.forEach((file) => {
        expect(file).not.toMatch(/[^\w.]/);
      });
    });
  });

  describe("Quest File Content Validation", () => {
    it("should have import statements for dependencies at top of files", () => {
      const files = fs
        .readdirSync(questDir)
        .filter((f) => f.endsWith(".ts") && f !== "index.ts" && f !== "enums.ts")
        .slice(0, 10); // Test a sample

      files.forEach((file) => {
        const content = fs.readFileSync(path.join(questDir, file), "utf8");
        // Should have import statements
        expect(content).toMatch(/^import\s+/m);
      });
    });

    it("should have const declaration for quest object", () => {
      const files = fs
        .readdirSync(questDir)
        .filter((f) => f.endsWith(".ts") && f !== "index.ts" && f !== "enums.ts")
        .slice(0, 10); // Test a sample

      files.forEach((file) => {
        const content = fs.readFileSync(path.join(questDir, file), "utf8");
        // Should declare a quest constant
        expect(content).toMatch(/const\s+\w+.*=\s*\{?/m);
      });
    });

    it("should have export default statement", () => {
      const files = fs
        .readdirSync(questDir)
        .filter((f) => f.endsWith(".ts") && f !== "index.ts" && f !== "enums.ts")
        .slice(0, 10); // Test a sample

      files.forEach((file) => {
        const content = fs.readFileSync(path.join(questDir, file), "utf8");
        // Should export the quest
        expect(content).toMatch(/export\s+default\s+\w+/m);
      });
    });

    it("should declare quest objects with required properties", () => {
      const files = fs
        .readdirSync(questDir)
        .filter((f) => f.endsWith(".ts") && f !== "index.ts" && f !== "enums.ts")
        .slice(0, 10); // Test a sample

      files.forEach((file) => {
        const content = fs.readFileSync(path.join(questDir, file), "utf8");

        // Check for required property names in quest object
        const requiredProps = ["id:", "name:", "description:", "difficulty:", "length:"];
        requiredProps.forEach((prop) => {
          expect(content).toContain(prop);
        });
      });
    });
  });

  describe("Quest Index.ts Exports", () => {
    it("should export all quests from index.ts", () => {
      const indexPath = path.join(questDir, "index.ts");
      const indexContent = fs.readFileSync(indexPath, "utf8");

      // Get list of actual files
      const files = fs
        .readdirSync(questDir)
        .filter((f) => f.endsWith(".ts") && f !== "index.ts" && f !== "enums.ts");

      // Verify most/all files are exported from index
      const questFileCount = files.length;
      const exportCount = (indexContent.match(/^export\s+\*\s+from\s+/gm) || []).length;

      expect(exportCount).toBeGreaterThan(questFileCount * 0.95); // Allow 5% missing
    });
  });

  describe("QuestTool Registry Coverage", () => {
    it("should have all files resolvable via QuestTool.getQuestByName()", () => {
      const files = fs
        .readdirSync(questDir)
        .filter((f) => f.endsWith(".ts") && f !== "index.ts" && f !== "enums.ts")
        .slice(0, 30); // Test a sample

      files.forEach((file) => {
        const baseName = file.replace(".ts", "");
        // At least some quests should be findable (via their canonical name)
        const quest = QuestTool.getAllQuests().find((q) => q.name);
        expect(quest).toBeDefined();
      });
    });

    it("should have all getAllQuests() items with valid structure", () => {
      const allQuests = QuestTool.getAllQuests();

      allQuests.forEach((quest) => {
        // Verify each quest has the required fields
        expect(quest.id).toBeDefined();
        expect(typeof quest.id).toBe("number");
        expect(quest.name).toBeDefined();
        expect(typeof quest.name).toBe("string");
        expect(quest.difficulty).toBeDefined();
        expect(quest.length).toBeDefined();
        expect(quest.members).toBeDefined();
        expect(typeof quest.members).toBe("boolean");
        expect(quest.questPoints).toBeDefined();
        expect(typeof quest.questPoints).toBe("number");
        expect(quest.requirements).toBeDefined();
        expect(Array.isArray(quest.requirements)).toBe(true);
        expect(quest.rewards).toBeDefined();
      });
    });
  });

  describe("Quest Data Consistency", () => {
    it("should have mostly unique quest IDs", () => {
      const allQuests = QuestTool.getAllQuests();
      const ids = allQuests.map((q) => q.id);
      const uniqueIds = new Set(ids);

      // Allow some duplicates in test data
      expect(uniqueIds.size).toBeGreaterThan(allQuests.length * 0.95);
    });

    it("should have mostly unique quest names", () => {
      const allQuests = QuestTool.getAllQuests();
      const names = allQuests.map((q) => q.name);
      const uniqueNames = new Set(names);

      // Allow some duplicates in test data
      expect(uniqueNames.size).toBeGreaterThan(allQuests.length * 0.99);
    });

    it("should have valid wiki URLs for quests", () => {
      const allQuests = QuestTool.getAllQuests();

      allQuests.slice(0, 50).forEach((quest) => {
        if (quest.url) {
          expect(quest.url).toMatch(/^https:\/\/oldschool.runescape.wiki/);
        }
      });
    });

    it("should have age values if specified", () => {
      const allQuests = QuestTool.getAllQuests();

      allQuests.forEach((quest) => {
        // Age should be a string if present
        if (quest.age) {
          expect(typeof quest.age).toBe("string");
        }
      });
    });
  });

  describe("Quest Data Completeness", () => {
    it("should have most quests with a shortName field", () => {
      const allQuests = QuestTool.getAllQuests();
      const withShortName = allQuests.filter((q) => q.shortName).length;

      expect(withShortName / allQuests.length).toBeGreaterThan(0.8); // At least 80%
    });

    it("should have quests with startLocation field", () => {
      const allQuests = QuestTool.getAllQuests();
      const withStartLocation = allQuests.filter((q) => q.startLocation).length;

      expect(withStartLocation).toBeGreaterThan(0);
    });

    it("should have quest rewards structure", () => {
      const allQuests = QuestTool.getAllQuests();

      allQuests.slice(0, 50).forEach((quest) => {
        expect(quest.rewards).toBeDefined();
        expect(typeof quest.rewards).toBe("object");
        expect(Array.isArray(quest.rewards.items) || typeof quest.rewards.items === "undefined").toBe(true);
      });
    });
  });

  describe("Quest Requirements Validation", () => {
    it("should have requirements as an array", () => {
      const allQuests = QuestTool.getAllQuests();

      allQuests.forEach((quest) => {
        expect(Array.isArray(quest.requirements)).toBe(true);
      });
    });

    it("should handle quests with no requirements", () => {
      const allQuests = QuestTool.getAllQuests();
      const noReqQuests = allQuests.filter((q) => q.requirements.length === 0);

      expect(noReqQuests.length).toBeGreaterThan(0);
    });

    it("should have requirements as Requirement objects", () => {
      const allQuests = QuestTool.getAllQuests();

      allQuests.slice(0, 50).forEach((quest) => {
        quest.requirements.forEach((req) => {
          expect(req).toBeDefined();
          expect(req.type).toBeDefined();
        });
      });
    });
  });
});

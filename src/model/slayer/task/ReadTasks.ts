import * as fs from "fs";
import * as path from "path";

import {
  CombatLevelRequirement,
  QuestRequirement,
} from "../../Requirement";
import { Task } from "../Task";

// Path to your JSON file (adjust as necessary)
const filePath = path.join(__dirname, "../slayerData.json");
let parsedJson;
try {
  // Read the JSON file synchronously
  const data = fs.readFileSync(filePath, "utf8");

  // Parse the JSON string
  parsedJson = JSON.parse(data);
} catch (error) {
  console.error("Error reading or parsing the file:", error);
}

const turaelData = parsedJson.Turael;

// Create Assignment objects dynamically from the assignments array
const assignments = Object.keys(turaelData.assignments).reduce(
  (acc: Record<string, Task>, key) => {
    const assignmentData = turaelData.assignments[key];
    const unlockRequirements = new CombatLevelRequirement(
      assignmentData.unlockRequirements.combat,
    );

    const questRequirements =
      assignmentData.unlockRequirements.quests.map(
        (quest: string) => new QuestRequirement(quest),
      ) || [];
    const partialQuestRequirements =
      assignmentData.unlockRequirements.partialQuests.map(
        (quest: string) => new QuestRequirement(quest),
      ) || [];

    const assignment = new Task(
      assignmentData.name,
      assignmentData.amountMin,
      assignmentData.amountMax,
      [questRequirements, partialQuestRequirements, unlockRequirements],
      assignmentData.extendedAmountMin ?? null,
      assignmentData.extendedAmountMax ?? null,
      assignmentData.alternatives,
      assignmentData.weight,
    );
    acc[key] = assignment;
    return acc;
  },
  {},
);

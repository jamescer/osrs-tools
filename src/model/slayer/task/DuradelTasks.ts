import {
  CombatLevelRequirement,
  SlayerLevelRequirement,
} from "../../Requirement";
import { Task } from "../Task";

export const DuradelTasks = [
  new Task(
    "Aberrant Spectres",
    15,
    50,
    [],
    null,
    null,
    [
      "Aberrant spectre",
      "Aberrant spectre (blood)",
      "Aberrant spectre (dark)",
      "Aberrant spectre (light)",
      "Aberrant spectre (shadow)",
    ],
    6,
  ),
  new Task(
    "Abyssal Demons",
    85,
    100,
    [],
    null,
    null,
    ["Abyssal demon", "Abyssal demon (blood)", "Abyssal demon (dark)"],
    6,
  ),
  new Task(
    "Black Demons",
    50,
    100,
    [],
    null,
    null,
    ["Black demon", "Black demon (blood)", "Black demon (dark)"],
    6,
  ),
  new Task(
    "Bloodvelds",
    10,
    50,
    [],
    null,
    null,
    ["Bloodveld", "Bloodveld (blood)", "Bloodveld (dark)"],
    6,
  ),
  new Task(
    "Cave Horrors",
    20,
    50,
    [],
    null,
    null,
    ["Cave horror", "Cave horror (blood)", "Cave horror (dark)"],
    6,
  ),

  new Task(
    "Cave Kraken",
    40,
    70,
    [],
    null,
    null,
    ["Cave kraken", "Cave kraken (blood)", "Cave kraken (dark)"],
    6,
  ),
];

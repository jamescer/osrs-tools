import { SlayerMaster } from "../../model/slayer/SlayerMaster";
import { DuradelTasks } from "./tasks/DuradelTasks";
import { NieveTasks } from "./tasks/NieveTasks";
import { SpriaTasks } from "./tasks/SpriaTasks";
import { turealTasks } from "./tasks/Tureal";
import { VannakaTasks } from "./tasks/VannakaTasks";

// TODO: Add the rest of the tasks for each master
// TODO: Add the rest of the masters
// TODO: Ensure points are correct

// Mazchna: https://oldschool.runescape.wiki/w/Mazchna
export const Mazchna = new SlayerMaster(
  "Mazchna",
  [],
  "Canifis",
  0,
  "https://oldschool.runescape.wiki/w/Mazchna",
  {
    1: 2,
    10: 5,
    100: 50,
    1000: 100,
    250: 70,
    50: 15,
  },
  undefined,
);

// Spria: https://oldschool.runescape.wiki/w/Spria
export const Spria = new SlayerMaster(
  "Spria",
  SpriaTasks,
  "Draynor Village",
  0,
  "https://oldschool.runescape.wiki/w/Spria",
  {
    1: 2,
    10: 5,
    100: 50,
    1000: 100,
    250: 70,
    50: 15,
  },
  undefined,
);

// Tureal: https://oldschool.runescape.wiki/w/Turael
export const Turael = new SlayerMaster(
  "Turael",
  turealTasks,
  "Burthope",
  0,
  "https://oldschool.runescape.wiki/w/Turael",
  {
    1: 2,
    10: 5,
    100: 50,
    1000: 100,
    250: 70,
    50: 15,
  },
  undefined,
);

// Vannaka: https://oldschool.runescape.wiki/w/Vannaka
export const Vannaka = new SlayerMaster(
  "Vannaka",
  VannakaTasks,
  "Edgeville Dungeon",
  0,
  "https://oldschool.runescape.wiki/w/Vannaka",
  {
    1: 2,
    10: 5,
    100: 50,
    1000: 100,
    250: 70,
    50: 15,
  },
  undefined,
);

// Konar Quo Maten: https://oldschool.runescape.wiki/w/Konar_Quo_Maten
export const KonarQuoMaten = new SlayerMaster(
  "Konar Quo Maten",
  [],
  "Mount Karuulm",
  0,
  "https://oldschool.runescape.wiki/w/Konar_Quo_Maten",
  {
    1: 2,
    10: 5,
    100: 50,
    1000: 100,
    250: 70,
    50: 15,
  },
  undefined,
);

// Krystilia: https://oldschool.runescape.wiki/w/Krystilia
export const Krystilia = new SlayerMaster(
  "Krystilia",
  [],
  "Edgeville",
  0,
  "https://oldschool.runescape.wiki/w/Krystilia",
  {
    1: 2,
    10: 5,
    100: 50,
    1000: 100,
    250: 70,
    50: 15,
  },
  undefined,
);

// Nieve: https://oldschool.runescape.wiki/w/Nieve
export const Nieve = new SlayerMaster(
  "Nieve",
  NieveTasks,
  "Nieve's Cave",
  0,
  "https://oldschool.runescape.wiki/w/Nieve",
  {
    1: 12,
    10: 60,
    100: 300,
    1000: 600,
    250: 420,
    50: 180,
  },
  {
    1: 15,
    10: 75,
    100: 375,
    1000: 750,
    250: 525,
    50: 225,
  },
);

// Duradel: https://oldschool.runescape.wiki/w/Duradel
export const Duradel = new SlayerMaster(
  "Duradel",
  DuradelTasks,
  "Shilo Village",
  85,
  "https://oldschool.runescape.wiki/w/Duradel",
  {
    1: 15,
    10: 75,
    100: 375,
    1000: 750,
    250: 525,
    50: 225,
  },
  undefined,
);

// Chaeldar: https://oldschool.runescape.wiki/w/Chaeldar
export const Chaeldar = new SlayerMaster(
  "Chaeldar",
  [],
  "Zanaris",
  0,
  "https://oldschool.runescape.wiki/w/Chaeldar",
  {
    1: 10,
    10: 50,
    100: 250,
    1000: 500,
    250: 350,
    50: 150,
  },
  undefined,
);

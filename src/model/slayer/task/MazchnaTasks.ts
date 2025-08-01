import {
  CombatLevelRequirement,
  SlayerLevelRequirement,
  QuestRequirement
} from "../../Requirement";
import { Task } from "../Task";

const mazchnaTasks: Task[] = [
  new Task(
    "Banshees",
    15,
    50,
    [new SlayerLevelRequirement(15), new CombatLevelRequirement(20)],
    null,
    null,
    ["Twisted Banshee"],
    8,
    [],
    0,
    ["Slayer Tower (CKS)"]
  ),
  new Task(
    "Bats",
    15,
    50,
    [new CombatLevelRequirement(5)],
    null,
    null,
    ["Giant bat", "Albino bat", "Death wing"],
    7,
    [],
    0,
    ["Silvarea, North of Digsite"]
  ),
  new Task(
    "Bears",
    10,
    20,
    [new CombatLevelRequirement(13)],
    null,
    null,
    ["Grizzly bear cub", "Bear cub", "Grizzly bear", "Reanimated bear", "Callisto", "Artio"],
    7,
    [],
    0,
    ["South-west of Legends' Guild (cannon)"]
  ),
  new Task(
    "Cave bugs",
    10,
    30,
    [new SlayerLevelRequirement(7)],
    null,
    null,
    [],
    8,
    [],
    0,
    ["Dorgesh-Kaan South Dungeon (AJQ)"]
  ),
  new Task(
    "Cave crawlers",
    15,
    50,
    [new SlayerLevelRequirement(10), new CombatLevelRequirement(10)],
    null,
    null,
    [],
    8,
    [],
    0,
    ["Fremennik Slayer Dungeon (AJR)"]
  ),
  new Task(
    "Cave slime",
    10,
    20,
    [new SlayerLevelRequirement(17), new CombatLevelRequirement(15)],
    null,
    null,
    [],
    8,
    [],
    0,
    ["Dorgesh-Kaan South Dungeon (AJQ)"]
  ),
  new Task(
    "Crawling Hands",
    15,
    50,
    [new SlayerLevelRequirement(5), new CombatLevelRequirement(20)],
    null,
    null,
    [],
    8,
    [],
    0,
    ["Slayer Tower (CKS)"]
  ),
  new Task(
    "Dogs",
    15,
    50,
    [new CombatLevelRequirement(15)],
    null,
    null,
    ["Jackal", "Guard dog", "Wild dog", "Reanimated dog"],
    7,
    [],
    0,
    ["East of Sophanem (Pharaoh's sceptre - Jaleustrophos)"]
  ),
  new Task(
    "Dwarves",
    10,
    25,
    [new CombatLevelRequirement(6)],
    null,
    null,
    ["Black Guard", "Chaos Dwarf", "Dwarf gang member"],
    7,
    [],
    0,
    ["White Wolf Tunnel pub"]
  ),
  new Task(
    "Ghosts",
    15,
    50,
    [new CombatLevelRequirement(13)],
    null,
    null,
    ["Tortured soul", "Forgotten Soul", "Revenants", "Death wing"],
    7,
    [],
    0,
    ["Catacombs of Kourend"]
  ),
  new Task(
    "Goblins",
    15,
    50,
    [],
    null,
    null,
    [
      "Cave goblin guards",
      "Sergeant Strongstack",
      "Sergeant Steelwill",
      "Sergeant Grimspike"
    ],
    7,
    [],
    0,
    ["East of Lumbridge"]
  ),
  new Task(
    "Icefiends",
    15,
    20,
    [new CombatLevelRequirement(20)],
    null,
    null,
    [],
    8,
    [],
    0,
    ["Ice Mountain"]
  ),
  new Task(
    "Kalphite",
    15,
    50,
    [new CombatLevelRequirement(15)],
    null,
    null,
    [
      "Kalphite worker",
      "Kalphite soldier",
      "Kalphite guardian",
      "Kalphite Queen"
    ],
    6,
    [],
    0,
    ["Kalphite Cave"]
  ),
  new Task(
    "Minotaurs",
    10,
    20,
    [new CombatLevelRequirement(7)],
    null,
    null,
    [],
    7,
    [],
    0,
    ["Stronghold of Security"]
  ),
  new Task(
    "Monkeys",
    15,
    50,
    [],
    null,
    null,
    [
      "Karamjan Monkey",
      "Monkey Guard",
      "Monkey Archer",
      "Monkey Zombie",
      "Demonic Gorilla",
      "Tortured Gorilla",
      "Maniacal Monkey"
    ],
    6,
    [],
    0,
    [
      "Ardougne Zoo",
      "Karamja north-west of glider",
      "Kruk's Dungeon",
      "North of Cairn Isle"
    ]
  ),
  new Task(
    "Scorpions",
    15,
    50,
    [new CombatLevelRequirement(7)],
    null,
    null,
    [
      "King Scorpion",
      "Poison Scorpion",
      "Pit Scorpion",
      "Scorpia",
      "Lobstrosity",
      "Reanimated scorpion",
      "Scorpia's offspring",
      "Scorpia's guardian"
    ],
    7,
    [],
    0,
    ["Al Kharid Mine", "Dwarven Mine"]
  ),
  new Task(
    "Skeletons",
    15,
    50,
    [new CombatLevelRequirement(15)],
    null,
    null,
    [
      "Skeleton mage",
      "Skeletons in the Stronghold of Security and Ancient Cavern",
      "Vet'ion",
      "Skogre",
      "Shayzien Crypts Skeletons",
      "Skeleton fremennik",
      "Calvar'ion"
    ],
    7,
    [],
    0,
    ["Digsite Dungeon", "Catacombs of Kourend", "Edgeville Dungeon"]
  ),
  new Task(
    "Wolves",
    15,
    50,
    [new CombatLevelRequirement(20)],
    null,
    null,
    [
      "Big Wolf",
      "Desert Wolf",
      "Dire Wolf",
      "Ice wolf",
      "Jungle wolf",
      "White wolf"
    ],
    7,
    [],
    0,
    ["White Wolf Mountain", "Stronghold of Security"]
  ),
  new Task(
    "Zombies",
    15,
    50,
    [new CombatLevelRequirement(10)],
    null,
    null,
    [
      "Monkey Zombie",
      "Undead chicken",
      "Undead cow",
      "Undead Druid",
      "Undead one",
      "Zombie rat",
      "Zogre",
      "Armoured zombie",
      "Zombie pirate",
      "Vorkath"
    ],
    7,
    [],
    0,
    ["Alice's Farm West of Ectofuntus"]
  )
];

export { mazchnaTasks };

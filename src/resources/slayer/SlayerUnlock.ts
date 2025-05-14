export class SlayerUnlock {
  name: string;
  cost: number;
  description: string;

  constructor(name: string, cost: number, description: string) {
    this.name = name;
    this.cost = cost;
    this.description = description;
  }
}

const WatchTheBirdie = new SlayerUnlock(
  "Watch the birdie",
  80,
  "Konar, Duradel, Nieve and Chaeldar will be able to assign you Aviansie as your task.",
);
const GargoyleSmasher = new SlayerUnlock(
  "Gargoyle smasher",
  120,
  "Gargoyles are automatically dealt the finishing blow if the player has a Rock hammer in their inventory.",
);
const SlugSalter = new SlayerUnlock(
  "Slug salter",
  80,
  "Rock slugs are automatically dealt the finishing blow if the player has a Bag of salt in their inventory.",
);
const ReptileFreezer = new SlayerUnlock(
  "Reptile freezer",
  90,
  "Desert lizards are automatically dealt the finishing blow if the player has an Ice cooler in their inventory.",
);
const ShroomSprayer = new SlayerUnlock(
  "Shroom sprayer",
  110,
  "Mutated zygomites are automatically dealt the finishing blow if the player has Fungicide spray & Fungicide.",
);
const BroaderFletching = new SlayerUnlock(
  "Broader fletching",
  300,
  "Learn to fletch Broad arrows (level 52 Fletching), Broad bolts (level 55 Fletching), and Amethyst broad bolts (level 76 Fletching).",
);

const Malevolent = new SlayerUnlock(
  "Malevolent masquerade",
  400,
  "Learn to assemble a Slayer helmet, which requires level 55 Crafting.",
);
const ringbling = new SlayerUnlock(
  "Ring bling",
  300,
  "Learn to craft a Slayer ring, which requires level 75 Crafting.",
);
const Seeingred = new SlayerUnlock(
  "Seeing red",
  50,
  "Konar, Duradel and Nieve will be able to assign you Red dragons as your task.",
);
const mithme = new SlayerUnlock(
  "I hope you mith me",
  80,
  "Konar, Duradel and Nieve will be able to assign you Mithril dragons as your task.",
);
const HotStuff = new SlayerUnlock(
  "Hot stuff",
  100,
  "Duradel, Nieve and Chaeldar will be able to assign TzHaar as your task. You may also be offered a chance to slay TzTok-Jad.",
);

const ReptileGotRipped = new SlayerUnlock(
  "Reptile got ripped",
  75,
  "Konar, Duradel, Nieve, and Chaeldar will be able to assign Lizardmen as your task.",
);

const LikeABoss = new SlayerUnlock(
  "Like a boss",
  200,
  "Konar, Duradel, Krystilia and Nieve will be able to assign boss monsters as your task, excluding the Corporeal Beast.",
);

const BiggerAndBadder = new SlayerUnlock(
  "Bigger and Badder",
  150,
  "Certain slayer monsters will have the chance of spawning a superior version whilst on a slayer task.",
);

const KingBlackBonnet = new SlayerUnlock(
  "King black bonnet",
  1000,
  "Learn how to combine a KBD head with your slayer helm to colour it black.",
);

const KalphiteKhat = new SlayerUnlock(
  "Kalphite khat",
  1000,
  "Learn how to combine a Kalphite Queen head with your slayer helm to colour it green.",
);

const UnholyHelmet = new SlayerUnlock(
  "Unholy helmet",
  1000,
  "Learn how to combine an Abyssal Demon head with your slayer helm to colour it red.",
);

const DarkMantle = new SlayerUnlock(
  "Dark Mantle",
  1000,
  "Learn how to combine a Dark Claw with your slayer helm to colour it purple.",
);

const UndeadHead = new SlayerUnlock(
  "Undead Head",
  1000,
  "Learn how to combine Vorkath's head with your slayer helm to colour it turquoise.",
);

const UseMoreHead = new SlayerUnlock(
  "Use more head",
  1000,
  "Learn how to combine a Hydra head with your slayer helm to theme it like the Alchemical Hydra.",
);

const TwistedVision = new SlayerUnlock(
  "Twisted Vision",
  1000,
  "Learn how to combine the Twisted Horns with your slayer helm to theme it like the Great Olm.",
);

const DulyNoted = new SlayerUnlock(
  "Duly noted",
  200,
  "Mithril dragons drop mithril bars in banknote form while killed on assignment.",
);

const StopTheWyvern = new SlayerUnlock(
  "Stop the Wyvern",
  500,
  "Stops you getting Fossil Island Wyvern tasks, without counting towards your blocked task limit. This does not cancel a current fossil wyvern task.",
);

const DoubleTrouble = new SlayerUnlock(
  "Double Trouble",
  500,
  "Slaying Dusk and Dawn now counts for two kills towards your task rather than one.",
);

const Basilocked = new SlayerUnlock(
  "Basilocked",
  80,
  "Konar, Duradel and Nieve will be able to assign Basilisks as your task.",
);

const ActualVampyreSlayer = new SlayerUnlock(
  "Actual Vampyre Slayer",
  80,
  "Konar, Duradel, Nieve, and Chaeldar will be able to assign Vampyres as your task.",
);

const TaskStorage = new SlayerUnlock(
  "Task Storage",
  1000,
  "Gain the ability to store your task for 50 points, allowing you to take it at a later time.",
);

export const SlayerUnlocks: SlayerUnlock[] = [
  GargoyleSmasher,
  SlugSalter,
  ReptileFreezer,
  ShroomSprayer,
  BroaderFletching,
  Malevolent,
  ringbling,
  Seeingred,
  mithme,
  WatchTheBirdie,
  HotStuff,
  ReptileGotRipped,
  LikeABoss,
  BiggerAndBadder,
  KingBlackBonnet,
  KalphiteKhat,
  UnholyHelmet,
  DarkMantle,
  UndeadHead,
  UseMoreHead,
  TwistedVision,
  DulyNoted,
  StopTheWyvern,
  DoubleTrouble,
  Basilocked,
  ActualVampyreSlayer,
  TaskStorage,
];

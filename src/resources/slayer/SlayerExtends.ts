export class SlayerExtend {
  name: string;
  cost: number;
  notes: string;
  constructor({
    cost,
    name,
    notes,
  }: {
    name: string;
    cost: number;
    notes: string;
  }) {
    this.name = name;
    this.cost = cost;
    this.notes = notes;
  }
  /**
   * Get the name of the Slayer Extend
   */
  getName(): string {
    return this.name;
  }
  /**
   * Get the cost of the Slayer Extend
   */
  getCost(): number {
    return this.cost;
  }
  /**
   * Get the notes of the Slayer Extend
   */
  getNotes(): string {
    return this.notes;
  }
}

// Define each SlayerExtend as a const
const NeedMoreDarkness = new SlayerExtend({
  cost: 100,
  name: "Need more darkness",
  notes: "Number of dark beasts assigned is increased to 100-149.",
});

const AnkouVeryMuch = new SlayerExtend({
  cost: 100,
  name: "Ankou very much",
  notes: "Number of ankous assigned is increased to 91-149.",
});

const SuqAnotherOne = new SlayerExtend({
  cost: 100,
  name: "Suq-a-nother one",
  notes: "Number of suqahs assigned is increased to 185-250.",
});

const FireAndDarkness = new SlayerExtend({
  cost: 50,
  name: "Fire & Darkness",
  notes: "Number of black dragons assigned is increased to 40-60.",
});

const PedalToTheMetals = new SlayerExtend({
  cost: 100,
  name: "Pedal to the metals",
  notes:
    "Number of bronze, iron and steel dragons assigned is increased to 30-50, 60-100 and 40-60, respectively.",
});

const IReallyMithYou = new SlayerExtend({
  cost: 120,
  name: "I really mith you",
  notes: "Number of mithril dragons assigned is increased to 20-40.",
});

const AdaMindSomeMore = new SlayerExtend({
  cost: 100,
  name: "Ada'mind some more",
  notes: "Number of adamant dragons assigned is increased to 20-30.",
});

const Ruuuuune = new SlayerExtend({
  cost: 100,
  name: "RUUUUUNE",
  notes: "Number of rune dragons assigned is increased to 30-60.",
});

const SpiritualFervour = new SlayerExtend({
  cost: 100,
  name: "Spiritual fervour",
  notes: "Number of spiritual creatures assigned is increased to 181-250.",
});

const BirdsOfAFeather = new SlayerExtend({
  cost: 100,
  name: "Birds of a Feather",
  notes: "Number of aviansies assigned is increased to 130-250.",
});

const GreaterChallenge = new SlayerExtend({
  cost: 100,
  name: "Greater challenge",
  notes: "Number of greater demons assigned is increased to 150-200.",
});

const ItsDarkInHere = new SlayerExtend({
  cost: 100,
  name: "It's dark in here",
  notes: "Number of black demons assigned is increased to 200-250.",
});

const BleedMeDry = new SlayerExtend({
  cost: 75,
  name: "Bleed me dry",
  notes: "Number of bloodvelds assigned is increased to 200-250.",
});

const SmellYaLater = new SlayerExtend({
  cost: 100,
  name: "Smell ya later",
  notes: "Number of aberrant spectres assigned is increased to 200-250.",
});

const Horrorific = new SlayerExtend({
  cost: 100,
  name: "Horrorific",
  notes: "Number of cave horrors assigned is increased to 200-250.",
});

const ToDustYouShallReturn = new SlayerExtend({
  cost: 100,
  name: "To dust you shall return",
  notes: "Number of dust devils assigned is increased to 200-250.",
});

const WyverNotherOne = new SlayerExtend({
  cost: 100,
  name: "Wyver-nother one",
  notes: "Number of skeletal Wyverns assigned is increased to 50-75.",
});

const GetSmashed = new SlayerExtend({
  cost: 100,
  name: "Get smashed",
  notes: "Number of gargoyles assigned is increased to 200-250.",
});

const NechsPlease = new SlayerExtend({
  cost: 100,
  name: "Nechs please",
  notes: "Number of nechryael assigned is increased to 200-250.",
});

const AugmentMyAbbies = new SlayerExtend({
  cost: 100,
  name: "Augment my abbies",
  notes: "Number of abyssal demons assigned is increased to 200-250.",
});

const KrackOn = new SlayerExtend({
  cost: 100,
  name: "Krack on",
  notes: "Number of cave kraken assigned is increased to 150-200.",
});

const GetScabarightOnIt = new SlayerExtend({
  cost: 50,
  name: "Get scabaright on it",
  notes: "Number of scabarites assigned is increased to 130-170.",
});

const WyverNotherTwo = new SlayerExtend({
  cost: 100,
  name: "Wyver-nother two",
  notes: "Number of Fossil Island wyverns assigned is increased to 55-75.",
});

const Basilonger = new SlayerExtend({
  cost: 100,
  name: "Basilonger",
  notes: "Number of Basilisks assigned is increased to 200-250.",
});

const MoreAtStake = new SlayerExtend({
  cost: 100,
  name: "More at stake",
  notes: "Number of Vampyres assigned is increased to 200-250.",
});

// Add all defined SlayerExtend objects to the array
export const SlayerExtends = [
  NeedMoreDarkness,
  AnkouVeryMuch,
  SuqAnotherOne,
  FireAndDarkness,
  PedalToTheMetals,
  IReallyMithYou,
  AdaMindSomeMore,
  Ruuuuune,
  SpiritualFervour,
  BirdsOfAFeather,
  GreaterChallenge,
  ItsDarkInHere,
  BleedMeDry,
  SmellYaLater,
  Horrorific,
  ToDustYouShallReturn,
  WyverNotherOne,
  GetSmashed,
  NechsPlease,
  AugmentMyAbbies,
  KrackOn,
  GetScabarightOnIt,
  WyverNotherTwo,
  Basilonger,
  MoreAtStake,
  // Add additional SlayerExtend objects here...
];

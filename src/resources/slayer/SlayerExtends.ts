export class SlayerExtend {
  name: string;
  cost: number;
  notes: string;
  constructor({
    name,
    cost,
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
  name: 'Need more darkness',
  cost: 100,
  notes: 'Number of dark beasts assigned is increased to 100-149.',
});

const AnkouVeryMuch = new SlayerExtend({
  name: 'Ankou very much',
  cost: 100,
  notes: 'Number of ankous assigned is increased to 91-149.',
});

const SuqAnotherOne = new SlayerExtend({
  name: 'Suq-a-nother one',
  cost: 100,
  notes: 'Number of suqahs assigned is increased to 185-250.',
});

const FireAndDarkness = new SlayerExtend({
  name: 'Fire & Darkness',
  cost: 50,
  notes: 'Number of black dragons assigned is increased to 40-60.',
});

const PedalToTheMetals = new SlayerExtend({
  name: 'Pedal to the metals',
  cost: 100,
  notes:
    'Number of bronze, iron and steel dragons assigned is increased to 30-50, 60-100 and 40-60, respectively.',
});

const IReallyMithYou = new SlayerExtend({
  name: 'I really mith you',
  cost: 120,
  notes: 'Number of mithril dragons assigned is increased to 20-40.',
});

const AdaMindSomeMore = new SlayerExtend({
  name: "Ada'mind some more",
  cost: 100,
  notes: 'Number of adamant dragons assigned is increased to 20-30.',
});

const Ruuuuune = new SlayerExtend({
  name: 'RUUUUUNE',
  cost: 100,
  notes: 'Number of rune dragons assigned is increased to 30-60.',
});

const SpiritualFervour = new SlayerExtend({
  name: 'Spiritual fervour',
  cost: 100,
  notes: 'Number of spiritual creatures assigned is increased to 181-250.',
});

const BirdsOfAFeather = new SlayerExtend({
  name: 'Birds of a Feather',
  cost: 100,
  notes: 'Number of aviansies assigned is increased to 130-250.',
});

const GreaterChallenge = new SlayerExtend({
  name: 'Greater challenge',
  cost: 100,
  notes: 'Number of greater demons assigned is increased to 150-200.',
});

const ItsDarkInHere = new SlayerExtend({
  name: "It's dark in here",
  cost: 100,
  notes: 'Number of black demons assigned is increased to 200-250.',
});

const BleedMeDry = new SlayerExtend({
  name: 'Bleed me dry',
  cost: 75,
  notes: 'Number of bloodvelds assigned is increased to 200-250.',
});

const SmellYaLater = new SlayerExtend({
  name: 'Smell ya later',
  cost: 100,
  notes: 'Number of aberrant spectres assigned is increased to 200-250.',
});

const Horrorific = new SlayerExtend({
  name: 'Horrorific',
  cost: 100,
  notes: 'Number of cave horrors assigned is increased to 200-250.',
});

const ToDustYouShallReturn = new SlayerExtend({
  name: 'To dust you shall return',
  cost: 100,
  notes: 'Number of dust devils assigned is increased to 200-250.',
});

const WyverNotherOne = new SlayerExtend({
  name: 'Wyver-nother one',
  cost: 100,
  notes: 'Number of skeletal Wyverns assigned is increased to 50-75.',
});

const GetSmashed = new SlayerExtend({
  name: 'Get smashed',
  cost: 100,
  notes: 'Number of gargoyles assigned is increased to 200-250.',
});

const NechsPlease = new SlayerExtend({
  name: 'Nechs please',
  cost: 100,
  notes: 'Number of nechryael assigned is increased to 200-250.',
});

const AugmentMyAbbies = new SlayerExtend({
  name: 'Augment my abbies',
  cost: 100,
  notes: 'Number of abyssal demons assigned is increased to 200-250.',
});

const KrackOn = new SlayerExtend({
  name: 'Krack on',
  cost: 100,
  notes: 'Number of cave kraken assigned is increased to 150-200.',
});

const GetScabarightOnIt = new SlayerExtend({
  name: 'Get scabaright on it',
  cost: 50,
  notes: 'Number of scabarites assigned is increased to 130-170.',
});

const WyverNotherTwo = new SlayerExtend({
  name: 'Wyver-nother two',
  cost: 100,
  notes: 'Number of Fossil Island wyverns assigned is increased to 55-75.',
});

const Basilonger = new SlayerExtend({
  name: 'Basilonger',
  cost: 100,
  notes: 'Number of Basilisks assigned is increased to 200-250.',
});

const MoreAtStake = new SlayerExtend({
  name: 'More at stake',
  cost: 100,
  notes: 'Number of Vampyres assigned is increased to 200-250.',
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

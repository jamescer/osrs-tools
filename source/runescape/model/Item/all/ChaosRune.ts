import { Item } from '../Item';

const chaosRuneData = {{
    examine: "A chaos rune.",
    value: 96,
    highAlch: 57,
    lowAlch: 38,
    weight: 0.001,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "2001-12-10",
    destroy: "Drop",
    questItem: false,
    stackable: true,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Chaos_rune",
    id: 561,
    name: "Chaos rune",
    iconUrl: "/assets/items/561.png",
    attackStab: 0,
    attackSlash: 0,
    attackCrush: 0,
    attackRanged: 0,
    attackMagic: 0,
    defenceStab: 0,
    defenceSlash: 0,
    defenceCrush: 0,
    defenceRanged: 0,
    defenceMagic: 0,
    strength: 0,
    rangedStrength: 0,
    magicDamage: 0,
    prayer: 0
  }

export const ChaosRune = Item.fromJson(chaosRuneData);

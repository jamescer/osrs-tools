import { Item } from '../Item';

const salmonData = {{
    examine: "I should cook this.",
    value: 30,
    highAlch: 18,
    lowAlch: 12,
    weight: 0.113,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "2001-12-10",
    destroy: "Drop",
    questItem: false,
    stackable: true,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Salmon",
    id: 329,
    name: "Salmon",
    iconUrl: "/assets/items/329.png",
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

export const Salmon = Item.fromJson(salmonData);

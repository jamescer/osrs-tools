import { Item } from '../Item';

const staffOfAirData = {
    examine: "A magical staff of air.",
    value: 30,
    highAlch: 18,
    lowAlch: 12,
    weight: 1.361,
    members: false,
    tradeable: true,
    equipable: true,
    releaseDate: "2001-12-10",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Staff_of_air",
    id: 1381,
    name: "Staff of air",
    iconUrl: "/assets/items/1381.png",
    attackStab: 2,
    attackSlash: 2,
    attackCrush: 2,
    attackRanged: 0,
    attackMagic: 12,
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

export const StaffOfAir = Item.fromJson(staffOfAirData);

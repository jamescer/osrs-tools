import { Item } from "../Item";

const greenDHideBodyData = {{
    examine: "Body armour made from green dragon hide.",
    value: 1315,
    highAlch: 789,
    lowAlch: 526,
    weight: 10,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2004-01-15",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Green_d'hide_body",
    id: 1135,
    name: "Green d'hide body",
    iconUrl: "/assets/items/1135.png",
    attackStab: 0,
    attackSlash: 0,
    attackCrush: 0,
    attackRanged: 10,
    attackMagic: -10,
    defenceStab: 8,
    defenceSlash: 8,
    defenceCrush: 6,
    defenceRanged: 25,
    defenceMagic: -5,
    rangedStrength: 5
  }

export const GreenDHideBody = Item.fromJson(greenDHideBodyData);

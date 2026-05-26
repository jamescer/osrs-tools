import { Item } from '../Item';

const blackPickaxeData = {
    examine: "A black pickaxe is a tool for mining.",
    value: 682,
    highAlch: 409,
    lowAlch: 272,
    weight: 13,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2004-01-15",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Black_pickaxe",
    id: 1543,
    name: "Black pickaxe",
    iconUrl: "/assets/items/1543.png"
  }

export const BlackPickaxe = Item.fromJson(blackPickaxeData);

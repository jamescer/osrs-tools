import { Item } from '../Item';

const steelPickaxeData = {{
    examine: "A steel pickaxe is a basic tool for mining.",
    value: 325,
    highAlch: 195,
    lowAlch: 130,
    weight: 13,
    members: false,
    tradeable: true,
    equipable: true,
    releaseDate: "2001-12-10",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Steel_pickaxe",
    id: 1539,
    name: "Steel pickaxe",
    iconUrl: "/assets/items/1539.png"
  }

export const SteelPickaxe = Item.fromJson(steelPickaxeData);

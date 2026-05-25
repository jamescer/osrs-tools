import { Item } from '../Item';

const woodenShieldGData = {{
    examine: "A basic wooden shield, decorated with gold.",
    value: 159,
    highAlch: 95,
    lowAlch: 63,
    weight: 2.5,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2004-01-15",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Wooden_shield_(g)",
    id: 2585,
    name: "Wooden shield (g)",
    iconUrl: "/assets/items/2585.png"
  }

export const WoodenShieldG = Item.fromJson(woodenShieldGData);

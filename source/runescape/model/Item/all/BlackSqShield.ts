import { Item } from '../Item';

const blackSqShieldData = {{
    examine: "A medium square shield.",
    value: 1152,
    highAlch: 691,
    lowAlch: 460,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Black_sq_shield",
    id: 1179,
    name: "Black sq shield",
    iconUrl: "/assets/items/1179.png"
  }

export const BlackSqShield = Item.fromJson(blackSqShieldData);

import { Item } from '../Item';

const gildedSqShieldData = {{
    examine: "A medium square shield in gold plate.",
    value: 38400,
    highAlch: 23040,
    lowAlch: 15360,
    weight: 3.628,
    members: false,
    tradeable: true,
    equipable: true,
    releaseDate: "2016-07-06",
    destroy: "Wield",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Gilded_sq_shield",
    id: 20152,
    name: "Gilded sq shield",
    iconUrl: "/assets/items/20152.png"
  }

export const GildedSqShield = Item.fromJson(gildedSqShieldData);

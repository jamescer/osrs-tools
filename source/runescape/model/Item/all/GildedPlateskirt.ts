import { Item } from '../Item';

const gildedPlateskirtData = {
    examine: "Rune plateskirt with gold plate.",
    value: 64000,
    highAlch: 38400,
    lowAlch: 25600,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Gilded_plateskirt",
    id: 3485,
    name: "Gilded plateskirt",
    iconUrl: "/assets/items/3485.png"
  }

export const GildedPlateskirt = Item.fromJson(gildedPlateskirtData);

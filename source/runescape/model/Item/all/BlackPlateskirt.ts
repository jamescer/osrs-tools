import { Item } from '../Item';

const blackPlateskirtData = {
    examine: "Big, black and heavy looking.",
    value: 1920,
    highAlch: 1152,
    lowAlch: 768,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Black_plateskirt",
    id: 1089,
    name: "Black plateskirt",
    iconUrl: "/assets/items/1089.png"
  }

export const BlackPlateskirt = Item.fromJson(blackPlateskirtData);

import { Item } from '../Item';

const blackPlatebodyGData = {
    examine: "Black platebody with gold trim.",
    value: 3840,
    highAlch: 2304,
    lowAlch: 1536,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Black_platebody_(g)",
    id: 2591,
    name: "Black platebody (g)",
    iconUrl: "/assets/items/2591.png"
  }

export const BlackPlatebodyG = Item.fromJson(blackPlatebodyGData);

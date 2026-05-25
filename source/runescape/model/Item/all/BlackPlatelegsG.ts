import { Item } from '../Item';

const blackPlatelegsGData = {{
    examine: "Black platelegs with gold trim.",
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Black_platelegs_(g)",
    id: 2593,
    name: "Black platelegs (g)",
    iconUrl: "/assets/items/2593.png"
  }

export const BlackPlatelegsG = Item.fromJson(blackPlatelegsGData);

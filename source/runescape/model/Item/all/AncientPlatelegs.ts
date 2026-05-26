import { Item } from '../Item';

const ancientPlatelegsData = {
    examine: "Rune platelegs in the colours of a long-forgotten god.",
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Ancient_platelegs",
    id: 12462,
    name: "Ancient platelegs",
    iconUrl: "/assets/items/12462.png"
  }

export const AncientPlatelegs = Item.fromJson(ancientPlatelegsData);

import { Item } from '../Item';

const blueBeretData = {
    examine: "Parlez-vous francais?",
    value: 80,
    highAlch: 48,
    lowAlch: 32,
    weight: 0,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Blue_beret",
    id: 2633,
    name: "Blue beret",
    iconUrl: "/assets/items/2633.png"
  }

export const BlueBeret = Item.fromJson(blueBeretData);

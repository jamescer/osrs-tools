import { Item } from '../Item';

const blackCavalierData = {
    examine: "All for one and one for all!",
    value: 200,
    highAlch: 120,
    lowAlch: 80,
    weight: 0.08,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2004-05-05",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Black_cavalier",
    id: 2643,
    name: "Black cavalier",
    iconUrl: "/assets/items/2643.png"
  }

export const BlackCavalier = Item.fromJson(blackCavalierData);

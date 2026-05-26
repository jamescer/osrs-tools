import { Item } from '../Item';

const darkCavalierData = {
    examine: "All for one and one for all!",
    value: 200,
    highAlch: 120,
    lowAlch: 80,
    weight: 0.001,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2004-05-05",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Dark_cavalier",
    id: 2641,
    name: "Dark cavalier",
    iconUrl: "/assets/items/2641.png"
  }

export const DarkCavalier = Item.fromJson(darkCavalierData);

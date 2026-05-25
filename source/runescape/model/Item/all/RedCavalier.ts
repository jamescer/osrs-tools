import { Item } from '../Item';

const redCavalierData = {{
    examine: "All for one and one for all!",
    value: 200,
    highAlch: 120,
    lowAlch: 80,
    weight: 0.08,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2014-06-12",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Red_cavalier",
    id: 12323,
    name: "Red cavalier",
    iconUrl: "/assets/items/12323.png"
  }

export const RedCavalier = Item.fromJson(redCavalierData);

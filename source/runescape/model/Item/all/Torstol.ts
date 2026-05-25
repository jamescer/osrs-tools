import { Item } from '../Item';

const torstolData = {{
    examine: "A powerful herb.",
    value: 75,
    highAlch: 45,
    lowAlch: 30,
    weight: 0.007,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "2002-12-12",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Torstol",
    id: 269,
    name: "Torstol",
    iconUrl: "/assets/items/269.png"
  }

export const Torstol = Item.fromJson(torstolData);

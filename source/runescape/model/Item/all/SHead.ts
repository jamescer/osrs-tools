import { Item } from '../Item';

const sHeadData = {{
    examine: "I could mount this on my wall!",
    value: 50000,
    highAlch: 30000,
    lowAlch: 20000,
    weight: 10,
    members: true,
    tradeable: false,
    equipable: false,
    releaseDate: "2018-01-04",
    destroy: "Unstuff",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Vorkath's_stuffed_head",
    id: 21909,
    name: "Vorkath's stuffed head",
    iconUrl: "/assets/items/21909.png"
  }

export const SHead = Item.fromJson(sHeadData);

import { Item } from '../Item';

const glovesOfDarknessData = {
    examine: "A dark power is woven into these gloves.",
    value: 10000,
    highAlch: 6000,
    lowAlch: 4000,
    weight: 0.453,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2016-07-06",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Gloves_of_darkness",
    id: 20134,
    name: "Gloves of darkness",
    iconUrl: "/assets/items/20134.png"
  }

export const GlovesOfDarkness = Item.fromJson(glovesOfDarknessData);

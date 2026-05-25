import { Item } from '../Item';

const bootsOfDarknessData = {{
    examine: "A dark power is woven into these boots.",
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Boots_of_darkness",
    id: 20140,
    name: "Boots of darkness",
    iconUrl: "/assets/items/20140.png"
  }

export const BootsOfDarkness = Item.fromJson(bootsOfDarknessData);

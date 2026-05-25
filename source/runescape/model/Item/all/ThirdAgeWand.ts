import { Item } from '../Item';

const ThirdAgeWandData = {{
    examine: "A beautifully crafted wand infused by ancient wizards.",
    value: 150000,
    highAlch: 90000,
    lowAlch: 60000,
    weight: 3.175,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2014-06-12",
    destroy: "Wield",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/3rd_age_wand",
    id: 12422,
    name: "3rd age wand",
    iconUrl: "/assets/items/12422.png"
  }

export const ThirdAgeWand = Item.fromJson(ThirdAgeWandData);

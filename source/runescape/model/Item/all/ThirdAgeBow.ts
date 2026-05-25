import { Item } from '../Item';

const ThirdAgeBowData = {{
    examine: "A beautifully crafted bow carved by ancient archers.",
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/3rd_age_bow",
    id: 12424,
    name: "3rd age bow",
    iconUrl: "/assets/items/12424.png"
  }

export const ThirdAgeBow = Item.fromJson(ThirdAgeBowData);

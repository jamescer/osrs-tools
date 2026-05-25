import { Item } from '../Item';

const ThirdAgeVambracesData = {{
    examine: "Fabulously ancient range protection crafted from white dragonhide.",
    value: 50500,
    highAlch: 30300,
    lowAlch: 20200,
    weight: 1,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2006-12-05",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/3rd_age_vambraces",
    id: 10336,
    name: "3rd age vambraces",
    iconUrl: "/assets/items/10336.png"
  }

export const ThirdAgeVambraces = Item.fromJson(ThirdAgeVambracesData);

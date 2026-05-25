import { Item } from '../Item';

const ThirdAgeFullHelmetData = {{
    examine: "Fabulously ancient armour beaten from magical silver.",
    value: 90000,
    highAlch: 54000,
    lowAlch: 36000,
    weight: 0.907,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2006-12-05",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/3rd_age_full_helmet",
    id: 10350,
    name: "3rd age full helmet",
    iconUrl: "/assets/items/10350.png"
  }

export const ThirdAgeFullHelmet = Item.fromJson(ThirdAgeFullHelmetData);

import { Item } from "../Item";

const ThirdAgeAxeData = {
    examine: "A beautifully crafted axe, shaped by ancient smiths.",
    value: 55000,
    highAlch: 33000,
    lowAlch: 22000,
    weight: 1.36,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2016-07-06",
    destroy: "Wield",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/3rd_age_axe",
    id: 20011,
    name: "3rd age axe",
    iconUrl: "/assets/items/20011.png"
  }

export const ThirdAgeAxe = Item.fromJson(ThirdAgeAxeData);

import { Item } from '../Item';

const ThirdAgeRobeTopData = {{
    examine: "Fabulously ancient mage protection enchanted in the 3rd Age.",
    value: 50800,
    highAlch: 30480,
    lowAlch: 20320,
    weight: 2.7,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2006-12-05",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/3rd_age_robe_top",
    id: 10338,
    name: "3rd age robe top",
    iconUrl: "/assets/items/10338.png"
  }

export const ThirdAgeRobeTop = Item.fromJson(ThirdAgeRobeTopData);

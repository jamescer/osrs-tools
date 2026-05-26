import { Item } from '../Item';

const thirdAgeAmuletData = {
    examine: "Fabulously ancient mage protection enchanted in the 3rd Age.",
    value: 50500,
    highAlch: 30300,
    lowAlch: 20200,
    weight: 0,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/3rd_age_amulet",
    id: 10344,
    name: "3rd age amulet",
    iconUrl: "/assets/items/10344.png"
  }

export const ThirdAgeAmulet = Item.fromJson(thirdAgeAmuletData);

import { Item } from '../Item';

const thirdAgePlateskirtData = {
    examine: "Fabulously ancient armour beaten from magical silver.",
    value: 200000,
    highAlch: 120000,
    lowAlch: 80000,
    weight: 0,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/3rd_age_plateskirt",
    id: 23242,
    name: "3rd age plateskirt",
    iconUrl: "/assets/items/23242.png"
  }

export const ThirdAgePlateskirt = Item.fromJson(thirdAgePlateskirtData);

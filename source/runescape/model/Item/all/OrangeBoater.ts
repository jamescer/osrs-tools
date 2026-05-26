import { Item } from '../Item';

const orangeBoaterData = {
    examine: "Stylish!",
    value: 225,
    highAlch: 135,
    lowAlch: 90,
    weight: 0.01,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2006-02-20",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Orange_boater",
    id: 7321,
    name: "Orange boater",
    iconUrl: "/assets/items/7321.png"
  }

export const OrangeBoater = Item.fromJson(orangeBoaterData);

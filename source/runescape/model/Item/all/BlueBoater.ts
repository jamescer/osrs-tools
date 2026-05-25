import { Item } from '../Item';

const blueBoaterData = {{
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Blue_boater",
    id: 7325,
    name: "Blue boater",
    iconUrl: "/assets/items/7325.png"
  }

export const BlueBoater = Item.fromJson(blueBoaterData);

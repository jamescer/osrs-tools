import { Item } from '../Item';

const pinkBoaterData = {{
    examine: "Stylish!",
    value: 225,
    highAlch: 135,
    lowAlch: 90,
    weight: 0.01,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2014-06-12",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Pink_boater",
    id: 12309,
    name: "Pink boater",
    iconUrl: "/assets/items/12309.png"
  }

export const PinkBoater = Item.fromJson(pinkBoaterData);

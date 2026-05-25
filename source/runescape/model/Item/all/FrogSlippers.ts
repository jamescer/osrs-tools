import { Item } from '../Item';

const frogSlippersData = {{
    examine: "Cute frog slippers.",
    value: 1000,
    highAlch: 600,
    lowAlch: 400,
    weight: 0.2,
    members: false,
    tradeable: true,
    equipable: true,
    releaseDate: "2019-04-11",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Frog_slippers",
    id: 23288,
    name: "Frog slippers",
    iconUrl: "/assets/items/23288.png"
  }

export const FrogSlippers = Item.fromJson(frogSlippersData);

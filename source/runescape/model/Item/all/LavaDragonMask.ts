import { Item } from '../Item';

const lavaDragonMaskData = {
    examine: "Do I look scary?",
    value: 10000,
    highAlch: 6000,
    lowAlch: 4000,
    weight: 2.267,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2014-06-12",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Lava_dragon_mask",
    id: 12371,
    name: "Lava dragon mask",
    iconUrl: "/assets/items/12371.png"
  }

export const LavaDragonMask = Item.fromJson(lavaDragonMaskData);

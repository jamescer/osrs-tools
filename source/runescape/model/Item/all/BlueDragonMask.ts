import { Item } from '../Item';

const blueDragonMaskData = {
  id: 12520,
  name: "Blue dragon mask",
  iconUrl: "/assets/items/blue-dragon-mask.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Blue_dragon_mask",
};

export const BlueDragonMask = Item.fromJson(blueDragonMaskData);

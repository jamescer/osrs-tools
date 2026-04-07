import { Item } from '../Item';

const greenDragonMaskData = {
  id: 12518,
  name: "Green dragon mask",
  iconUrl: "/assets/items/green-dragon-mask.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Green_dragon_mask",
};

export const GreenDragonMask = Item.fromJson(greenDragonMaskData);

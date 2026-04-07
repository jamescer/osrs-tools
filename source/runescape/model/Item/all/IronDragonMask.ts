import { Item } from '../Item';

const ironDragonMaskData = {
  id: 12365,
  name: "Iron dragon mask",
  iconUrl: "/assets/items/iron-dragon-mask.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Iron_dragon_mask",
};

export const IronDragonMask = Item.fromJson(ironDragonMaskData);

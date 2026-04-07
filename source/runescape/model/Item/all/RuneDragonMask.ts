import { Item } from '../Item';

const runeDragonMaskData = {
  id: 23273,
  name: "Rune dragon mask",
  iconUrl: "/assets/items/rune-dragon-mask.png",
  examine: "Do I look scary?",
  value: 10000,
  highAlch: 6000,
  lowAlch: 4000,
  weight: 2.267,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2019-04-11",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Rune_dragon_mask",
};

export const RuneDragonMask = Item.fromJson(runeDragonMaskData);

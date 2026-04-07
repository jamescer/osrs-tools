import { Item } from '../Item';

const mithrilDragonMaskData = {
  id: 12369,
  name: "Mithril dragon mask",
  iconUrl: "/assets/items/mithril-dragon-mask.png",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Mithril_dragon_mask",
};

export const MithrilDragonMask = Item.fromJson(mithrilDragonMaskData);

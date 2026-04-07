import { Item } from '../Item';

const catMaskData = {
  id: 12361,
  name: "Cat mask",
  iconUrl: "/assets/items/cat-mask.png",
  examine: "Miaow!",
  value: 2400,
  highAlch: 1440,
  lowAlch: 960,
  weight: 2.267,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Cat_mask",
};

export const CatMask = Item.fromJson(catMaskData);

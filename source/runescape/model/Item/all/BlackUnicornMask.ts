import { Item } from '../Item';

const blackUnicornMaskData = {
  id: 20266,
  name: "Black unicorn mask",
  iconUrl: "/assets/items/black-unicorn-mask.png",
  examine: "Pointy shadows.",
  value: 1000,
  highAlch: 600,
  lowAlch: 400,
  weight: 0.1,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Black_unicorn_mask",
};

export const BlackUnicornMask = Item.fromJson(blackUnicornMaskData);

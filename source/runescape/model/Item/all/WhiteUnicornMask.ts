import { Item } from '../Item';

const whiteUnicornMaskData = {
  id: 20269,
  name: "White unicorn mask",
  iconUrl: "/assets/items/white-unicorn-mask.png",
  examine: "Pointy rainbows.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/White_unicorn_mask",
};

export const WhiteUnicornMask = Item.fromJson(whiteUnicornMaskData);

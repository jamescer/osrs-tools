import { Item } from '../Item';

const wolfMaskData = {
  id: 23407,
  name: "Wolf mask",
  iconUrl: "/assets/items/wolf-mask.png",
  examine: "Howwwallll!",
  value: 2400,
  highAlch: 1440,
  lowAlch: 960,
  weight: 2.267,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2019-04-11",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Wolf_mask",
};

export const WolfMask = Item.fromJson(wolfMaskData);

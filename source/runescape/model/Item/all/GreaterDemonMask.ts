import { Item } from '../Item';

const greaterDemonMaskData = {
  id: 20023,
  name: "Greater demon mask",
  iconUrl: "/assets/items/greater-demon-mask.png",
  examine: "Evil.",
  value: 4000,
  highAlch: 2400,
  lowAlch: 1600,
  weight: 0.8,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Greater_demon_mask",
};

export const GreaterDemonMask = Item.fromJson(greaterDemonMaskData);

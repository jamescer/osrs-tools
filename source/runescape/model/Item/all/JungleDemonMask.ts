import { Item } from '../Item';

const jungleDemonMaskData = {
  id: 20032,
  name: "Jungle demon mask",
  iconUrl: "/assets/items/jungle-demon-mask.png",
  examine: "A mask resembling a visage of a Greater Jungle demon.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Jungle_demon_mask",
};

export const JungleDemonMask = Item.fromJson(jungleDemonMaskData);

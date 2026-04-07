import { Item } from '../Item';

const penguinMaskData = {
  id: 12428,
  name: "Penguin mask",
  iconUrl: "/assets/items/penguin-mask.png",
  examine: "Thankfully this doesn't reset every week.",
  value: 1200,
  highAlch: 720,
  lowAlch: 480,
  weight: 1.814,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Penguin_mask",
};

export const PenguinMask = Item.fromJson(penguinMaskData);

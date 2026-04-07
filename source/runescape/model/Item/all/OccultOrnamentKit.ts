import { Item } from '../Item';

const occultOrnamentKitData = {
  id: 20065,
  name: "Occult ornament kit",
  iconUrl: "/assets/items/occult-ornament-kit.png",
  examine: "Use on an occult necklace to make it look fancier!",
  value: 5000,
  highAlch: 3000,
  lowAlch: 2000,
  weight: 0.5,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2016-07-06",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Occult_ornament_kit",
};

export const OccultOrnamentKit = Item.fromJson(occultOrnamentKitData);

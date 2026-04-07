import { Item } from '../Item';

const shayzienHoodData = {
  id: 20125,
  name: "Shayzien hood",
  iconUrl: "/assets/items/shayzien-hood.png",
  examine: "A rare hood from Shayzien.",
  value: 1,
  highAlch: 0,
  lowAlch: 0,
  weight: 0.1,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Shayzien_hood",
};

export const ShayzienHood = Item.fromJson(shayzienHoodData);

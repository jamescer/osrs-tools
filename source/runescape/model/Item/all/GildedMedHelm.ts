import { Item } from '../Item';

const gildedMedHelmData = {
  id: 20146,
  name: "Gilded med helm",
  iconUrl: "/assets/items/gilded-med-helm.png",
  examine: "A medium sized helmet with gold plate.",
  value: 19200,
  highAlch: 11520,
  lowAlch: 7680,
  weight: 1.814,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Gilded_med_helm",
};

export const GildedMedHelm = Item.fromJson(gildedMedHelmData);

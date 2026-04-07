import { Item } from '../Item';

const ancientCrozierData = {
  id: 12199,
  name: "Ancient crozier",
  iconUrl: "/assets/items/ancient-crozier.png",
  examine: "An Ancient crozier.",
  value: 5000,
  highAlch: 3000,
  lowAlch: 2000,
  weight: 0.005,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Ancient_crozier",
};

export const AncientCrozier = Item.fromJson(ancientCrozierData);

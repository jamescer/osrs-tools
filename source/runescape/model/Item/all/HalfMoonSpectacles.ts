import { Item } from '../Item';

const halfMoonSpectaclesData = {
  id: 20053,
  name: "Half moon spectacles",
  iconUrl: "/assets/items/half-moon-spectacles.png",
  examine: "The two halfs would surely make a full moon?",
  value: 19450,
  highAlch: 11670,
  lowAlch: 7780,
  weight: 0.05,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Half_moon_spectacles",
};

export const HalfMoonSpectacles = Item.fromJson(halfMoonSpectaclesData);

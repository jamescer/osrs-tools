import { Item } from '../Item';

const sHatData = {
  id: 1949,
  name: "Chef's hat",
  iconUrl: "/assets/items/chefs-hat.png",
  examine: "What a silly hat.",
  value: 2,
  highAlch: 1,
  lowAlch: 0,
  weight: 0.907,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "2001-01-04",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Chef's_hat",
};

export const SHat = Item.fromJson(sHatData);

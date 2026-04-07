import { Item } from '../Item';

const crierHatData = {
  id: 12319,
  name: "Crier hat",
  iconUrl: "/assets/items/crier-hat.png",
  examine: "Hear ye! Hear ye!",
  value: 5000,
  highAlch: 3000,
  lowAlch: 2000,
  weight: 0.3,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Crier_hat",
};

export const CrierHat = Item.fromJson(crierHatData);

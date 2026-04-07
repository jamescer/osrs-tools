import { Item } from '../Item';

const crierCoatData = {
  id: 20240,
  name: "Crier coat",
  iconUrl: "/assets/items/crier-coat.png",
  examine: "Don't shoot the messenger!",
  value: 5000,
  highAlch: 3000,
  lowAlch: 2000,
  weight: 0.001,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Crier_coat",
};

export const CrierCoat = Item.fromJson(crierCoatData);

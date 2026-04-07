import { Item } from '../Item';

const crierBellData = {
  id: 20243,
  name: "Crier bell",
  iconUrl: "/assets/items/crier-bell.png",
  examine: "For whom?",
  value: 5000,
  highAlch: 3000,
  lowAlch: 2000,
  weight: 0.453,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Crier_bell",
};

export const CrierBell = Item.fromJson(crierBellData);

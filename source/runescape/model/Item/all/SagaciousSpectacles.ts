import { Item } from '../Item';

const sagaciousSpectaclesData = {
  id: 12337,
  name: "Sagacious spectacles",
  iconUrl: "/assets/items/sagacious-spectacles.png",
  examine: "Do they make me look... old?",
  value: 1400,
  highAlch: 840,
  lowAlch: 560,
  weight: 0.001,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Sagacious_spectacles",
};

export const SagaciousSpectacles = Item.fromJson(sagaciousSpectaclesData);

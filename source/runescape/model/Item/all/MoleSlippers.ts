import { Item } from '../Item';

const moleSlippersData = {
  id: 23285,
  name: "Mole slippers",
  iconUrl: "/assets/items/mole-slippers.png",
  examine: "Cute mole slippers.",
  value: 1000,
  highAlch: 600,
  lowAlch: 400,
  weight: 0.2,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "2019-04-11",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Mole_slippers",
};

export const MoleSlippers = Item.fromJson(moleSlippersData);

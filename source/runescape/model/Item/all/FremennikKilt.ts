import { Item } from '../Item';

const fremennikKiltData = {
  id: 23246,
  name: "Fremennik kilt",
  iconUrl: "/assets/items/fremennik-kilt.png",
  examine: "A kilt worn by the mightiest of Fremennik warriors.",
  value: 60000,
  highAlch: 36000,
  lowAlch: 24000,
  weight: 3,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2019-04-11",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Fremennik_kilt",
};

export const FremennikKilt = Item.fromJson(fremennikKiltData);

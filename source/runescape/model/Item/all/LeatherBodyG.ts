import { Item } from '../Item';

const leatherBodyGData = {
  id: 23381,
  name: "Leather body (g)",
  iconUrl: '/assets/items/23381.png',
  examine: "Better than no armour! Nice trim too!",
  value: 850,
  highAlch: 510,
  lowAlch: 340,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Leather_body_(g)',
};

export const LeatherBodyG = Item.fromJson(leatherBodyGData);

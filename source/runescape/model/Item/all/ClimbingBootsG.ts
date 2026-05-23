import { Item } from '../Item';

const climbingBootsGData = {
  id: 23413,
  name: "Climbing boots (g)",
  iconUrl: '/assets/items/23413.png',
  examine: "Boots made for climbing. Nice trim!",
  value: 75000,
  highAlch: 45000,
  lowAlch: 30000,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Climbing_boots_(g)',
};

export const ClimbingBootsG = Item.fromJson(climbingBootsGData);

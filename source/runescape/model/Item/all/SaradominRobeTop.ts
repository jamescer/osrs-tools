import { Item } from '../Item';

const saradominRobeTopData = {
  id: 10458,
  name: "Saradomin robe top",
  iconUrl: '/assets/items/10458.png',
  examine: "Saradomin Vestments.",
  value: 7000,
  highAlch: 4200,
  lowAlch: 2800,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Saradomin_robe_top',
};

export const SaradominRobeTop = Item.fromJson(saradominRobeTopData);

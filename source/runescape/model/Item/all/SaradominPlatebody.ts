import { Item } from '../Item';

const saradominPlatebodyData = {
  id: 2661,
  name: "Saradomin platebody",
  iconUrl: '/assets/items/2661.png',
  examine: "Rune platebody in the colours of Saradomin.",
  value: 65000,
  highAlch: 39000,
  lowAlch: 26000,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Saradomin_platebody',
};

export const SaradominPlatebody = Item.fromJson(saradominPlatebodyData);

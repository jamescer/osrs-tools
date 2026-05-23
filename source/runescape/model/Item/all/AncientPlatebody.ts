import { Item } from '../Item';

const ancientPlatebodyData = {
  id: 12460,
  name: "Ancient platebody",
  iconUrl: '/assets/items/12460.png',
  examine: "Rune platebody in the colours of a long-forgotten god.",
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ancient_platebody',
};

export const AncientPlatebody = Item.fromJson(ancientPlatebodyData);

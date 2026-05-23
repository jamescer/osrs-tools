import { Item } from '../Item';

const guthixPlatebodyData = {
  id: 2669,
  name: "Guthix platebody",
  iconUrl: '/assets/items/2669.png',
  examine: "Rune platebody in the colours of Guthix.",
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Guthix_platebody',
};

export const GuthixPlatebody = Item.fromJson(guthixPlatebodyData);

import { Item } from '../Item';

const guthixPlatelegsData = {
  id: 2671,
  name: "Guthix platelegs",
  iconUrl: '/assets/items/2671.png',
  examine: "Rune plate legs in the colours of Guthix.",
  value: 64000,
  highAlch: 38400,
  lowAlch: 25600,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Guthix_platelegs',
};

export const GuthixPlatelegs = Item.fromJson(guthixPlatelegsData);

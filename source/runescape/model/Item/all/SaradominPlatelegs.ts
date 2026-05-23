import { Item } from '../Item';

const saradominPlatelegsData = {
  id: 2663,
  name: "Saradomin platelegs",
  iconUrl: '/assets/items/2663.png',
  examine: "Rune platelegs in the colours of Saradomin.",
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Saradomin_platelegs',
};

export const SaradominPlatelegs = Item.fromJson(saradominPlatelegsData);

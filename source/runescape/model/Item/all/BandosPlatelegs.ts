import { Item } from '../Item';

const bandosPlatelegsData = {
  id: 12482,
  name: "Bandos platelegs",
  iconUrl: '/assets/items/12482.png',
  examine: "Rune platelegs in the colours of Bandos.",
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
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Bandos_platelegs',
};

export const BandosPlatelegs = Item.fromJson(bandosPlatelegsData);

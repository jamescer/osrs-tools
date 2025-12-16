import { Item, ItemJson } from '../Item';

const bloodRuneData: ItemJson = {
  destroy: 'Drop',
  equipable: false,
  examine: 'Used for high level necromancy spells.',
  highAlch: 240,
  id: 565,
  lowAlch: 160,
  members: true,
  meleeStrength: 0,
  name: 'Blood rune',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Blood_rune',
  prayer: 0,
  questItem: false,
  releaseDate: '24 September 2001',
  stackable: true,
  tradeable: true,
  value: 400,
  weight: 0.002,
};

export const BloodRune = Item.fromJson(bloodRuneData);

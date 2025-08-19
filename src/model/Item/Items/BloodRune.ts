import { Item } from '../Item';

const bloodRuneData = {
  id: 565,
  name: 'Blood rune',
  members: true,
  tradeable: true,
  stackable: true,
  noted: false,
  value: 400,
  examine: 'Used for high level necromancy spells.',
  equipable: false,
  weight: 0.002,
  questItem: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Blood_rune',
};

export const BloodRune = Item.fromJson(bloodRuneData);

import { Item } from '../Item';

const bloodRuneData = {
  equipable: false,
  examine: 'Used for high level necromancy spells.',
  id: 565,
  members: true,
  name: 'Blood rune',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Blood_rune',
  questItem: false,
  stackable: true,
  tradeable: true,
  value: 400,
  weight: 0.002,
};

export const BloodRune = Item.fromJson(bloodRuneData);

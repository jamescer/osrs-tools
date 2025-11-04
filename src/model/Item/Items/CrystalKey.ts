import { Item } from '../Item';

const crystalKeyData = {
  equipable: false,
  examine: 'A glittering key made from crystal.',
  id: 989,
  members: true,
  name: 'Crystal key',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Crystal_key',
  questItem: false,
  stackable: false,
  tradeable: true,
  value: 19000,
  weight: 0.01,
};

export const CrystalKey = Item.fromJson(crystalKeyData);

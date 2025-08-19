import { Item } from '../Item';

const crystalKeyData = {
  id: 989,
  name: 'Crystal key',
  members: true,
  tradeable: true,
  stackable: false,
  noted: false,
  value: 19000,
  examine: 'A glittering key made from crystal.',
  equipable: false,
  weight: 0.01,
  questItem: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Crystal_key',
};

export const CrystalKey = Item.fromJson(crystalKeyData);

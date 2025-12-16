import { Item, ItemJson } from '../Item';

const crystalKeyData: ItemJson = {
  destroy: 'Drop',
  equipable: false,
  examine: 'A glittering key made from crystal.',
  highAlch: 11400,
  id: 989,
  lowAlch: 7600,
  members: true,
  meleeStrength: 0,
  name: 'Crystal key',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Crystal_key',
  prayer: 0,
  questItem: false,
  releaseDate: '24 September 2001',
  stackable: false,
  tradeable: true,
  value: 19000,
  weight: 0.01,
};

export const CrystalKey = Item.fromJson(crystalKeyData);

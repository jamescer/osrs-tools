import { Item, ItemJson } from '../Item';

const thammaronsSceptreData: ItemJson = {
  id: 22547,
  name: 'Thammaron\'s sceptre',
  iconUrl: '/assets/items/thammarons-sceptre.png',
  examine: 'An ancient sceptre infused with dark magic.',
  value: 800000,
  highAlch: 480000,
  lowAlch: 320000,
  weight: 0.907,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2021-08-02',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Thammaron%27s_sceptre',
  attackMagic: 25,
  magicDamage: 15,
  defenceMagic: 10,
};

export const ThammaronsSceptre = Item.fromJson(thammaronsSceptreData);

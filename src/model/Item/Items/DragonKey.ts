import { Item, ItemJson } from '../Item';

const dragonKeyData: ItemJson = {
  destroy: "You'll need to collect the three key pieces again.",
  equipable: false,
  examine: 'A key made from three separate pieces.',
  highAlch: 0,
  id: 21042,
  lowAlch: 0,
  members: true,
  meleeStrength: 0,
  name: 'Dragon key',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Dragon_key',
  prayer: 0,
  questItem: true,
  releaseDate: '5 January 2017',
  stackable: false,
  tradeable: false,
  value: 0,
  weight: 0.013,
};

export const DragonKey = Item.fromJson(dragonKeyData);

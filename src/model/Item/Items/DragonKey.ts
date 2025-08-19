import { Item } from '../Item';

const dragonKeyData = {
  id: 21042,
  name: 'Dragon key',
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 0,
  examine: 'A key made from three separate pieces.',
  equipable: false,
  weight: 0.013,
  questItem: true,
  destroy: "You'll need to collect the three key pieces again.",
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Dragon_key',
};

export const DragonKey = Item.fromJson(dragonKeyData);

import { Item } from '../Item';

const dragonKeyData = {
  equipable: false,
  examine: 'A key made from three separate pieces.',
  id: 21042,
  members: true,
  destroy: "You'll need to collect the three key pieces again.",
  name: 'Dragon key',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Dragon_key',
  questItem: true,
  stackable: false,
  tradeable: false,
  value: 0,
  weight: 0.013,
};

export const DragonKey = Item.fromJson(dragonKeyData);

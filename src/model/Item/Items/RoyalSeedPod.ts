import { Item } from '../Item';

const royal_seed_podData = {
  destroy: 'King Narnode will give you another one.',
  equipable: false,
  examine: 'Can be used to teleport to the Grand Tree.',
  id: 19564,
  members: true,
  name: 'Royal seed pod',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Royal_seed_pod',
  questItem: false,
  stackable: false,
  tradeable: false,
  value: 0,
  weight: 0,
};

export const RoyalSeedPod = Item.fromJson(royal_seed_podData);

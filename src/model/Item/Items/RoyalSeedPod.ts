import { Item } from '../Item';

const royal_seed_podData = {
  id: 19564,
  name: 'Royal seed pod',
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 0,
  examine: 'Can be used to teleport to the Grand Tree.',
  equipable: false,
  weight: 0,
  questItem: false,
  destroy: 'King Narnode will give you another one.',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Royal_seed_pod',
};

export const RoyalSeedPod = Item.fromJson(royal_seed_podData);

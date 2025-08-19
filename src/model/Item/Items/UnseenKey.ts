import { Item } from '../Item';

const unseenKeyData = {
  id: 21089,
  name: 'Unseen key',
  members: true,
  tradeable: false,
  stackable: false,
  noted: false,
  value: 0,
  examine: 'A mysterious key that allows access to the unseen areas.',
  equipable: false,
  weight: 0.006,
  questItem: true,
  destroy: 'You can get another from a servant in the Sisterhood Sanctuary.',
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Unseen_key',
};

export const UnseenKey = Item.fromJson(unseenKeyData);

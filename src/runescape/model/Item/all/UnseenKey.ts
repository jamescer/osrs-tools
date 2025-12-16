import { Item, ItemJson } from '../Item';

const unseenKeyData : ItemJson = {
  destroy: 'You can get another from a servant in the Sisterhood Sanctuary.',
  equipable: false,
  examine: 'A mysterious key that allows access to the unseen areas.',
  id: 21089,
  members: true,
  name: 'Unseen key',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Unseen_key',
  questItem: true,
  stackable: false,
  tradeable: false,
  value: 0,
  weight: 0.006,
  highAlch: 0,
  lowAlch: 0,
  releaseDate: ''
};

export const UnseenKey = Item.fromJson(unseenKeyData);

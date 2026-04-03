import { Item } from '../Item';

const uncutRubyData = {
  id: 1619,
  name: 'Uncut ruby',
  iconUrl: '/assets/items/uncut-ruby.png',
  examine: 'An uncut ruby.',
  value: 732,
  highAlch: 439,
  lowAlch: 292,
  weight: 0.02,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '2001-12-10',
  destroy: 'Drop',
  questItem: false,
  stackable: true,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Uncut_ruby',
};

export const UncutRuby = Item.fromJson(uncutRubyData);

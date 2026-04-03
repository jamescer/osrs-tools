import { Item } from '../Item';

const capeOfSkullsData = {
  id: 10398,
  name: 'Cape of skulls',
  iconUrl: '/assets/items/cape-of-skulls.png',
  examine: 'A black cape with a skull design.',
  value: 936,
  highAlch: 561,
  lowAlch: 374,
  weight: 0.0,
  members: true,
  tradeable: false,
  equipable: true,
  releaseDate: '2003-11-05',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Cape_of_skulls',
};

export const CapeOfSkulls = Item.fromJson(capeOfSkullsData);

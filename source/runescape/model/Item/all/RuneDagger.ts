import { Item } from '../Item';

const runeDaggerData = {
  id: 1213,
  name: "Rune dagger",
  iconUrl: '/assets/items/1213.png',
  examine: "A powerful dagger.",
  value: 8000,
  highAlch: 4800,
  lowAlch: 3200,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Rune_dagger',
};

export const RuneDagger = Item.fromJson(runeDaggerData);

import { Item } from '../Item';

export const DagannothHide = {
  drop_rate: 'Always/1/12.8/1/19',
  dropped_by: [
    'Dagannoth Prime',
    'Dagannoth Rex',
    'Dagannoth Supreme',
    'Dagannoth (Waterbirth Island)',
    'Ninja impling jar',
    'Ninja impling',
  ],
  examine: 'A sturdy piece of dagannoth hide.',
  ge_price: 101,
  highalch: 36,
  location: ['Waterbirth Island Dungeon'],
  lowalch: 24,
  members: true,

  name: 'Dagannoth hide',

  noteable: true,

  noted: false,

  // as of last update
  release_date: '1 August 2005',
  stackable: false,
  tradeable: true,
  used_for: [
    'Rock-shell helm',
    'Rock-shell legs',
    'Rock-shell plate',
    'Skeletal bottoms',
    'Skeletal helm',
    'Skeletal top',
    'Spined body',
    'Spined chaps',
    'Spined helm',
  ],
  value: 60,
  weight: 3.175,
  wiki_url: 'https://oldschool.runescape.wiki/w/Dagannoth_hide',
};

export const DagannothHideItem = Item.fromJson(DagannothHide);

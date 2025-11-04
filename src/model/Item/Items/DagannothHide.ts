import { Item } from '../Item';

export const DagannothHide = {
  examine: 'A sturdy piece of dagannoth hide.',
  highalch: 36,
  ge_price: 101,
  lowalch: 24,
  members: true,
  name: 'Dagannoth hide',
  noteable: true,
  noted: false,
  // as of last update
  release_date: '1 August 2005',

  drop_rate: 'Always/1/12.8/1/19',

  stackable: false,

  dropped_by: [
    'Dagannoth Prime',
    'Dagannoth Rex',
    'Dagannoth Supreme',
    'Dagannoth (Waterbirth Island)',
    'Ninja impling jar',
    'Ninja impling',
  ],
  location: ['Waterbirth Island Dungeon'],
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

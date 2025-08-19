import { Item } from '../Item';

export const DagannothHide = {
  name: 'Dagannoth hide',
  examine: 'A sturdy piece of dagannoth hide.',
  members: true,
  tradeable: true,
  stackable: false,
  noted: false,
  noteable: true,
  value: 60,
  highalch: 36,
  lowalch: 24,
  weight: 3.175,
  ge_price: 101, // as of last update
  release_date: '1 August 2005',
  wiki_url: 'https://oldschool.runescape.wiki/w/Dagannoth_hide',
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
  dropped_by: [
    'Dagannoth Prime',
    'Dagannoth Rex',
    'Dagannoth Supreme',
    'Dagannoth (Waterbirth Island)',
    'Ninja impling jar',
    'Ninja impling',
  ],
  drop_rate: 'Always/1/12.8/1/19',
  location: ['Waterbirth Island Dungeon'],
};

export const DagannothHideItem = Item.fromJson(DagannothHide);

import { Item, ItemJson } from '../Item';

const dagannothHideData: ItemJson = {
  destroy: 'Drop',
  equipable: false,
  examine: 'A sturdy piece of dagannoth hide.',
  highAlch: 36,
  id: 6155,
  lowAlch: 24,
  members: true,
  meleeStrength: 0,
  name: 'Dagannoth hide',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Dagannoth_hide',
  prayer: 0,
  questItem: false,
  releaseDate: '1 August 2005',
  stackable: false,
  tradeable: true,
  value: 60,
  weight: 3.175,
};

export const DagannothHide = Item.fromJson(dagannothHideData);

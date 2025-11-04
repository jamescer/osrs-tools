import { Item, ItemJson } from '../Item';

const ectophialData: ItemJson = {
  destroy: 'You can get another by talking to Velorina in Port Phasmatys.',
  equipable: false,
  examine: 'A glass vial containing ectoplasm.',
  highAlch: 0,
  id: 4251,
  lowAlch: 0,
  members: true,
  meleeStrength: 0,
  name: 'Ectophial',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Ectophial',
  prayer: 0,
  questItem: true,
  releaseDate: '15 January 2005',
  stackable: false,
  tradeable: false,
  value: 1,
  weight: 0.001,
};

export const Ectophial = Item.fromJson(ectophialData);

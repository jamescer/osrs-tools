import { Item, ItemJson } from '../Item';

const suqahTeethData: ItemJson = {
  equipable: false,
  examine: 'Sharp teeth from a Suqah.',
  id: 9079,
  members: true,
  name: 'Suqah teeth',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Suqah_teeth',
  questItem: false,
  stackable: true,
  tradeable: false,
  value: 3,
  weight: 0,
  highAlch: 0,
  lowAlch: 0,
  releaseDate: '',
  destroy: ''
};

export const SuqahTeeth = Item.fromJson(suqahTeethData);

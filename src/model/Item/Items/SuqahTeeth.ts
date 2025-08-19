import { Item } from '../Item';

const suqahTeethData = {
  id: 9079,
  name: 'Suqah teeth',
  members: true,
  tradeable: false,
  stackable: true,
  noted: false,
  value: 3,
  examine: 'Sharp teeth from a Suqah.',
  equipable: false,
  weight: 0,
  questItem: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Suqah_teeth',
};

export const SuqahTeeth = Item.fromJson(suqahTeethData);

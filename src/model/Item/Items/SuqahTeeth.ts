import { Item } from '../Item';

const suqahTeethData = {
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
};

export const SuqahTeeth = Item.fromJson(suqahTeethData);

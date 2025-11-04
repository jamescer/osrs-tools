import { Item } from '../Item';

const mithrilSeedsData = {
  equipable: false,
  examine: 'Plant these to create pretty flowers.',
  id: 299,
  members: true,
  name: 'Mithril seeds',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Mithril_seeds',
  questItem: false,
  stackable: true,
  tradeable: true,
  value: 392,
  weight: 0.002,
};

export const MithrilSeeds = Item.fromJson(mithrilSeedsData);

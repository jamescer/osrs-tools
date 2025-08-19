import { Item } from '../Item';

const mithrilSeedsData = {
  id: 299,
  name: 'Mithril seeds',
  members: true,
  tradeable: true,
  stackable: true,
  noted: false,
  value: 392,
  examine: 'Plant these to create pretty flowers.',
  equipable: false,
  weight: 0.002,
  questItem: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Mithril_seeds',
};

export const MithrilSeeds = Item.fromJson(mithrilSeedsData);

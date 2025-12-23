import { Item, ItemJson } from '../Item';

const mithrilSeedsData: ItemJson = {
  destroy: 'Drop',
  equipable: false,
  examine: 'Plant these to create pretty flowers.',
  highAlch: 235,
  id: 299,
  lowAlch: 157,
  members: true,
  meleeStrength: 0,
  name: 'Mithril seeds',
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Mithril_seeds',
  prayer: 0,
  questItem: false,
  releaseDate: '6 May 2003',
  stackable: true,
  tradeable: true,
  value: 392,
  weight: 0.002,
};

export const MithrilSeeds = Item.fromJson(mithrilSeedsData);

import { Item } from '../Item';

const mithrilPlatebodyTData = {
  id: 12287,
  name: "Mithril platebody (t)",
  iconUrl: '/assets/items/12287.png',
  examine: "Mithril platebody with trim.",
  value: 5200,
  highAlch: 3120,
  lowAlch: 2080,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Mithril_platebody_(t)',
};

export const MithrilPlatebodyT = Item.fromJson(mithrilPlatebodyTData);

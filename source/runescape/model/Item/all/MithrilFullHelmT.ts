import { Item } from '../Item';

const mithrilFullHelmTData = {
  id: 12293,
  name: "Mithril full helm (t)",
  iconUrl: '/assets/items/12293.png',
  examine: "Mithril full helm with trim.",
  value: 1430,
  highAlch: 858,
  lowAlch: 572,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Mithril_full_helm_(t)',
};

export const MithrilFullHelmT = Item.fromJson(mithrilFullHelmTData);

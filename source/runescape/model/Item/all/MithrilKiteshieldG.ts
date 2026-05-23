import { Item } from '../Item';

const mithrilKiteshieldGData = {
  id: 12281,
  name: "Mithril kiteshield (g)",
  iconUrl: '/assets/items/12281.png',
  examine: "Mithril kiteshield with gold trim.",
  value: 2210,
  highAlch: 1326,
  lowAlch: 884,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Mithril_kiteshield_(g)',
};

export const MithrilKiteshieldG = Item.fromJson(mithrilKiteshieldGData);

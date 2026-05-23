import { Item } from '../Item';

const impMaskData = {
  id: 12249,
  name: "Imp mask",
  iconUrl: '/assets/items/12249.png',
  examine: "What mischief can I get up to with this?",
  value: 2000,
  highAlch: 1200,
  lowAlch: 800,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Imp_mask',
};

export const ImpMask = Item.fromJson(impMaskData);

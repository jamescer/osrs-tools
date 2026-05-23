import { Item } from '../Item';

const adamantPlateskirtTData = {
  id: 3474,
  name: "Adamant plateskirt (t)",
  iconUrl: '/assets/items/3474.png',
  examine: "Adamant plateskirt with trim.",
  value: 6400,
  highAlch: 3840,
  lowAlch: 2560,
  weight: 0,
  members: false,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Adamant_plateskirt_(t)',
};

export const AdamantPlateskirtT = Item.fromJson(adamantPlateskirtTData);

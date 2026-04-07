import { Item } from '../Item';

const urisHatData = {
  id: 23255,
  name: "Uri's hat",
  iconUrl: '/assets/items/uris-hat.png',
  examine: 'This is top secret comrade...',
  value: 1000,
  highAlch: 600,
  lowAlch: 400,
  weight: 0.001,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: '2019-04-11',
  destroy: 'Wear',
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Uri%27s_hat',
};

export const UrisHat = Item.fromJson(urisHatData);

import { Item } from '../Item';

const yewShortbowData = {
  id: 857,
  name: "Yew shortbow",
  iconUrl: '/assets/items/857.png',
  examine: "A shortbow made out of yew, still effective.",
  value: 800,
  highAlch: 480,
  lowAlch: 320,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: 'https://oldschool.runescape.wiki/w/Yew_shortbow',
};

export const YewShortbow = Item.fromJson(yewShortbowData);
